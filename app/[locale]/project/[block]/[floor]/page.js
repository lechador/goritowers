
import {setRequestLocale, getTranslations} from 'next-intl/server';
import AsyncFloor from './async';

export default async function FloorHome({params}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const resolvedParams = await params;
  const t = await getTranslations({locale, namespace: "Floor"})
  
  return (
    <AsyncFloor params={resolvedParams} blockTr={t('block')} floorTr={t('floor')} chooseTr={t('choose')} aptTr={t('apt')} />
  )
}

