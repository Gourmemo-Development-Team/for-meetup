import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Verification successful, redirect to login page with verified=true flag
      return NextResponse.redirect(`${origin}/login?verified=true`);
    }
  }

  // Verification failed or no code present
  return NextResponse.redirect(`${origin}/login?error=Verification_failed`);
}
