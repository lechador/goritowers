import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'; // Import for handling responses
import nextAuthMiddleware from 'next-auth/middleware'; // Import NextAuth middleware

const locales = ['ka', 'en', 'ru']

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'ka',
  localeDetection: false
});

const authMiddleware = nextAuthMiddleware(); // Use NextAuth's default configuration

export default async function middleware(request) {
  // Handle authentication first
  let response = await authMiddleware(request);

  // If authentication successful or not required, proceed with internationalization
  if (response) {
    const shouldApplyIntl = request.nextUrl.pathname.startsWith('/') &&
      !request.nextUrl.pathname.startsWith('/admin'); // Exclude admin routes

    if (shouldApplyIntl) {
      response = intlMiddleware(response);
    }
  }

  return response;
}
