/*
  # Send Booking Email Trigger

  1. New Functions
    - `handle_new_appointment_request()` - PostgreSQL function that calls the Edge Function when a new appointment request is inserted
  
  2. New Triggers
    - `on_new_appointment_request` - Trigger that fires after INSERT on appointment_requests table
  
  3. Extensions
    - Enables `pg_net` extension for making HTTP requests from PostgreSQL
  
  4. Security
    - Function uses SECURITY DEFINER to allow access to pg_net
    - Makes HTTP POST request to send-booking-email Edge Function
*/

-- Enable the pg_net extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a function that calls the Edge Function
CREATE OR REPLACE FUNCTION public.handle_new_appointment_request()
RETURNS TRIGGER AS $$
DECLARE
    FUNCTION_URL TEXT;
    request_id BIGINT;
BEGIN
    -- Construct the URL for the Edge Function
    -- Note: Replace with your actual Supabase project reference if different
    FUNCTION_URL := current_setting('app.settings.api_url', true) || '/functions/v1/send-booking-email';
    
    -- If the above doesn't work, you can hardcode your project URL:
    -- FUNCTION_URL := 'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-booking-email';

    -- Make the HTTP POST request to the Edge Function
    SELECT INTO request_id net.http_post(
        url := FUNCTION_URL,
        body := jsonb_build_object('record', to_jsonb(NEW)),
        headers := jsonb_build_object(
            'Content-Type', 'application/json',
            'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
        )
    );

    -- Log the request for debugging
    RAISE LOG 'Sent booking email request with ID: %, URL: %', request_id, FUNCTION_URL;

    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- Log the error but don't fail the insert
        RAISE LOG 'Error calling send-booking-email function: %', SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger that fires after an insert on appointment_requests
DROP TRIGGER IF EXISTS on_new_appointment_request ON public.appointment_requests;

CREATE TRIGGER on_new_appointment_request
    AFTER INSERT ON public.appointment_requests
    FOR EACH ROW 
    EXECUTE FUNCTION public.handle_new_appointment_request();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA net TO postgres, anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION net.http_post TO postgres, anon, authenticated, service_role;