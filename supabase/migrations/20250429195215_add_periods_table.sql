-- Tabla periods para registrar los periodos menstruales
create table if not exists periods (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  start_date date not null,
  end_date date not null,
  created_at timestamp with time zone default timezone('utc', now()),
  symptoms jsonb default '[]',
  mood text,
  notes text
);
