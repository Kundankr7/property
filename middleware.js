import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';

export async function middleware(request) {
  // Only protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const session = await getSession();

    // If trying to access admin pages but not logged in (and not on the login page itself)
    if (!session && request.nextUrl.pathname !== '/admin') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    // If logged in and trying to access the login page directly
    if (session && request.nextUrl.pathname === '/admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
