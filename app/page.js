import {redirect} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';

export default async function RootPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  redirect('/ka');
}