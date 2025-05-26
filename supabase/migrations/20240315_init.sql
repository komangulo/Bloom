-- Create the cycle_data table
CREATE TABLE cycle_data (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    date DATE NOT NULL,
    cycle_length INTEGER NOT NULL,
    flow_intensity INTEGER CHECK (flow_intensity BETWEEN 1 AND 5),
    symptoms TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create the symptom_stats table
CREATE TABLE symptom_stats (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL UNIQUE,
    symptoms JSONB NOT NULL DEFAULT '{}',
    last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_cycle_data_user_id ON cycle_data(user_id);
CREATE INDEX idx_cycle_data_date ON cycle_data(date);

-- Set up Row Level Security (RLS)
ALTER TABLE cycle_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE symptom_stats ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own cycle data"
    ON cycle_data
    FOR SELECT
    USING (auth.uid()::text = user_id);

CREATE POLICY "Users can insert their own cycle data"
    ON cycle_data
    FOR INSERT
    WITH CHECK (auth.uid()::text = user_id);

CREATE POLICY "Users can view their own symptom stats"
    ON symptom_stats
    FOR SELECT
    USING (auth.uid()::text = user_id);

CREATE POLICY "Users can update their own symptom stats"
    ON symptom_stats
    FOR UPDATE
    USING (auth.uid()::text = user_id);

-- Function to update symptom stats
CREATE OR REPLACE FUNCTION update_symptom_stats()
RETURNS TRIGGER AS $$
DECLARE
    symptoms_count JSONB;
    total_entries INTEGER;
BEGIN
    -- Get total number of entries for this user
    SELECT COUNT(*) INTO total_entries
    FROM cycle_data
    WHERE user_id = NEW.user_id;

    -- Calculate symptom frequencies
    WITH symptom_frequencies AS (
        SELECT 
            unnest(symptoms) as symptom,
            COUNT(*) as frequency
        FROM cycle_data
        WHERE user_id = NEW.user_id
        GROUP BY symptom
    )
    SELECT 
        jsonb_object_agg(
            symptom,
            (frequency::float / total_entries)::float
        )
    INTO symptoms_count
    FROM symptom_frequencies;

    -- Update or insert into symptom_stats
    INSERT INTO symptom_stats (user_id, symptoms, last_updated)
    VALUES (NEW.user_id, COALESCE(symptoms_count, '{}'::jsonb), NOW())
    ON CONFLICT (user_id) 
    DO UPDATE SET 
        symptoms = COALESCE(symptoms_count, '{}'::jsonb),
        last_updated = NOW();

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update symptom stats
CREATE TRIGGER update_symptom_stats_trigger
AFTER INSERT OR UPDATE ON cycle_data
FOR EACH ROW
EXECUTE FUNCTION update_symptom_stats(); 