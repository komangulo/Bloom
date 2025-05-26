-- Ensure subscription_tier is properly configured
DO $$ BEGIN
    -- Create an enum type if it doesn't exist
    CREATE TYPE subscription_tier_type AS ENUM ('free', 'premium');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Add or modify subscription_tier column
ALTER TABLE subscribers 
ADD COLUMN IF NOT EXISTS subscription_tier subscription_tier_type DEFAULT 'free',
ADD COLUMN IF NOT EXISTS webpage text; 