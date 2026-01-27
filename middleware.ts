import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import createMiddleware from 'next-intl/middleware';

const { auth } = NextAuth(authConfig);

const locales = ['ka', 'en', 'ru'];

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: 'ka',
  localeDetection: false
});

export default auth((req) => {
    return intlMiddleware(req);
});

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
    '/((?!api|_next|admin|.*\\..*).*)',
    '/:locale((?!api|_next|admin|.*\\..*).*)',
    '/admin/:path*',
    '/:locale/admin/:path*'
  ],
};