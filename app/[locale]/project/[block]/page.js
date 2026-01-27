
import {setRequestLocale, getTranslations} from 'next-intl/server';
import AsyncBlock from './async';


export default async function BlockHome({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedParams = await params;
  const t = await getTranslations({locale, namespace: "Block"})
  return (
    <AsyncBlock 
      params={resolvedParams} 
      blockTr={t('block')}
      text={t('text')}
      choose={t('choose')}
      description={t('description')}
    />
  )
}
