import { serve } from "https://deno.land/std@0.184.0/http/server.ts";

const handler = (_request: Request) => new Response("Hello");

serve(handler);
