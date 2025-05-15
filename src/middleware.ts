import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  console.log('🧠 Middleware running:', req.nextUrl.pathname);
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) return;

  const locales = ['en', 'ru'];
  const hasLocale = locales.some((loc) => pathname.startsWith(`/${loc}`));

  if (!hasLocale) {
    const locale = 'ru';
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};