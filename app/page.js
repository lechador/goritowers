import {redirect} from 'next/navigation';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function RootPage({ params: {locale} }) {
  unstable_setRequestLocale(locale);
  redirect('/ka');
}