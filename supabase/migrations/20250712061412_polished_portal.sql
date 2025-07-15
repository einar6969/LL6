/*
  # Update brochures table to use URL column

  1. Changes
    - Add `url` column to store full PDF URLs
    - Update existing records with full URLs
    - Remove old `filename` column
    - Update sample data with actual URLs

  2. Security
    - Maintains existing RLS policies
    - No changes to permissions
*/

-- Add url column
ALTER TABLE brochures ADD COLUMN url text;

-- Update existing records with full URLs (replace with your actual Supabase URL and bucket)
UPDATE brochures SET url = 'https://your-project-id.supabase.co/storage/v1/object/public/brochures/' || filename;

-- Make url column required
ALTER TABLE brochures ALTER COLUMN url SET NOT NULL;

-- Drop the old filename column
ALTER TABLE brochures DROP COLUMN filename;

-- Update sample data with proper URLs (replace with your actual URLs)
UPDATE brochures SET 
  url = 'https://your-project-id.supabase.co/storage/v1/object/public/brochures/lasik-baeklingur.pdf'
WHERE title = 'LASIK aðgerðir';

UPDATE brochures SET 
  url = 'https://your-project-id.supabase.co/storage/v1/object/public/brochures/augasteinsskipti-baeklingur.pdf'
WHERE title = 'Augasteinsskipti';

UPDATE brochures SET 
  url = 'https://your-project-id.supabase.co/storage/v1/object/public/brochures/undirbuningur-baeklingur.pdf'
WHERE title = 'Undirbúningur fyrir aðgerð';

UPDATE brochures SET 
  url = 'https://your-project-id.supabase.co/storage/v1/object/public/brochures/prk-adgerdir-baeklingur.pdf'
WHERE title = 'PRK aðgerðir';