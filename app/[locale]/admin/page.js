import {unstable_setRequestLocale} from 'next-intl/server';
export default function Admin({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div> 
      სამართავი პანელი
    </div>
  )
}
