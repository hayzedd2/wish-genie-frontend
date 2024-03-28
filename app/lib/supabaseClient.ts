import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY! as string;

if (!supabaseUrl || !supabaseKey) {
  throw new NextResponse("invalid keys", { status: 401 });
}

export const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
