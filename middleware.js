
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
  locales: ['ka', 'en', 'ru'],
  defaultLocale: 'ka',
  localeDetection: false
});

// Custom middleware that calls both NextAuth and Next-Intl middlewares
export default async function customMiddleware(req) {
  let response = await nextAuthMiddleware(req);
  response = await intlMiddleware(req);

  return response;
}

// Export matcher configurations for both middlewares
export const config = {
  matcher: ['/admin/:path*', '/', '/(ka|en|ru)/:path*'],
};
