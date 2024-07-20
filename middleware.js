import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';

// Create NextAuth middleware
const nextAuthMiddleware = withAuth({
  // Specify the routes for authentication
  pages: {
    signIn: '/auth/signin',
  },
});

// Create Next-Intl middleware
const intlMiddleware = createMiddleware({
  locales: ['ka', 'en'],
  defaultLocale: 'ka',
});

// Custom middleware that calls both NextAuth and Next-Intl middlewares
export default async function customMiddleware(req) {
  // First run NextAuth middleware
  let response = await nextAuthMiddleware(req);

  // Then run Next-Intl middleware
  response = await intlMiddleware(req);

  return response;
}

// Export matcher configurations for both middlewares
export const config = {
  matcher: ['/admin/:path*', '/', '/(ka|en)/:path*'],
};
