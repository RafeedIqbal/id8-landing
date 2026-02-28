create table id8_waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz default now()
);

alter table id8_waitlist enable row level security;

-- Allow anonymous inserts only (no auth required)
create policy "allow_anon_insert"
  on id8_waitlist for insert
  to anon
  with check (true);
