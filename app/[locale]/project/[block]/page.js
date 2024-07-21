
import {unstable_setRequestLocale} from 'next-intl/server';
import AsyncBlock from './async';
import { useTranslations } from 'next-intl';



export default function BlockHome({ params }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("Block")
  return (
    <AsyncBlock 
      params={params} 
      blockTr={t('block')}
      text={t('text')}
      choose={t('choose')}
      description={t('description')}
    />
  )
}
