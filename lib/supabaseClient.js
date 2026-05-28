import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eccztjjqpxjsdgbtfxhm.supabase.co/rest/v1/";
const supabaseKey = "sb_publishable_bWqoZjkuHsGvlYOmrMOaAA_2s1nTUFy";

export const supabase = createClient(supabaseUrl, supabaseKey);
