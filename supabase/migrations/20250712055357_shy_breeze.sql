/*
  # Create brochures table

  1. New Tables
    - `brochures`
      - `id` (uuid, primary key)
      - `title` (text, required) - The main title of the brochure
      - `subtitle` (text, optional) - A subtitle for the brochure
      - `description` (text, optional) - Detailed description of the brochure content
      - `filename` (text, required) - The filename of the PDF file
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `brochures` table
    - Add policy for public read access to brochures
    - Add policies for authenticated users to manage brochures

  3. Triggers
    - Add trigger to automatically update `updated_at` timestamp
*/

-- Create the brochures table
CREATE TABLE IF NOT EXISTS public.brochures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  description text,
  filename text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.brochures ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to brochures"
  ON public.brochures
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create policies for authenticated users to manage brochures
CREATE POLICY "Allow authenticated users to insert brochures"
  ON public.brochures
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update brochures"
  ON public.brochures
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete brochures"
  ON public.brochures
  FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_brochures_updated_at
  BEFORE UPDATE ON public.brochures
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample brochure data (you can modify these based on your actual PDF files)
INSERT INTO public.brochures (title, subtitle, description, filename) VALUES
  (
    'LASIK aðgerðir',
    'Ítarlegar upplýsingar um LASIK',
    'Ítarlegar upplýsingar um LASIK aðgerðir og hvað þú getur búist við',
    'lasik-baeklingur.pdf'
  ),
  (
    'Augasteinsskipti',
    'Allt um linsu skipti',
    'Allt sem þú þarft að vita um augasteinsskipti og gervilinsur',
    'augasteinsskipti-baeklingur.pdf'
  ),
  (
    'Undirbúningur fyrir aðgerð',
    'Leiðbeiningar og ráðgjöf',
    'Leiðbeiningar um undirbúning og hvað þú þarft að huga að',
    'undirbuningur-baeklingur.pdf'
  ),
  (
    'PRK aðgerðir',
    'TransPRK og hefðbundin PRK',
    'Upplýsingar um PRK aðgerðir og hvað gerir þær sérstaka',
    'prk-adgerdir-baeklingur.pdf'
  );