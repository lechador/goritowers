import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['ka', 'en', 'ru'];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'ka',
  localeDetection: false
});

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token }) => token != null
    },
    pages: {
      signIn: '/login'
    }
  }
);

export default function middleware(req: NextRequest) {
  const isAdminPage = req.nextUrl.pathname.startsWith('/admin');

  if (isAdminPage) {
    return (authMiddleware as any)(req);
  } else {
    return intlMiddleware(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)', '/admin/:path*']
};