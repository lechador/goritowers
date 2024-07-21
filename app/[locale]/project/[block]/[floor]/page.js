
import {unstable_setRequestLocale} from 'next-intl/server';
import AsyncFloor from './async';
import { useTranslations } from 'next-intl';

export default function FloorHome({params}) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Floor")
  
  return (
    <AsyncFloor params={params} blockTr={t('block')} floorTr={t('floor')} chooseTr={t('choose')} aptTr={t('apt')} />
  )
}
