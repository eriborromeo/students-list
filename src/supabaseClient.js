// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hyiobiqehdzezgwyhxme.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aW9iaXFlaGR6ZXpnd3loeG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5MzM4MTMsImV4cCI6MjAzNTUwOTgxM30.a-s4SHz84drfW7s-LdLBacTGu-EHllkzFS_p6w22C_o";

const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase client initialized:", supabase);


export default supabase;
