/*
  # Create doctors and staff tables

  1. New Tables
    - `doctors`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `job_title` (text, not null)
      - `img_src` (text, not null)
      - `further_data` (text, nullable)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    - `staff`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `job_title` (text, not null)
      - `img_src` (text, not null)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (since this is public information)
    - Add policies for authenticated admin users to manage data
*/

-- Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  job_title text NOT NULL,
  img_src text NOT NULL,
  further_data text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create staff table
CREATE TABLE IF NOT EXISTS staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  job_title text NOT NULL,
  img_src text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (team information is public)
CREATE POLICY "Allow public read access to doctors"
  ON doctors
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to staff"
  ON staff
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for authenticated users to manage data (admin access)
CREATE POLICY "Allow authenticated users to insert doctors"
  ON doctors
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update doctors"
  ON doctors
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete doctors"
  ON doctors
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert staff"
  ON staff
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update staff"
  ON staff
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete staff"
  ON staff
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update the updated_at column
CREATE TRIGGER update_doctors_updated_at
  BEFORE UPDATE ON doctors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_staff_updated_at
  BEFORE UPDATE ON staff
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();