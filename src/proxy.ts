import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
  ...routing,
  defaultLocale: 'en',
  localeDetection: false,
});

export const config = {
  matcher: [
    '/',
    '/(tr|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ]
};