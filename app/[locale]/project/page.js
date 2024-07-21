import LocationComponent from "@/app/components/locationComponent";
import TextComponent from "@/app/components/textComponent";
import dynamic from "next/dynamic";
import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
const ImageGallery = dynamic(() => import("@/app/components/imageGallery"), {
  ssr: false
})

const ChooseBlock = dynamic(() => import("@/app/components/chooseBlock"))

export const metadata = {
  title: 'მიმდინარე პროექტი - გორითაუერსი',
  description: 'გორითაურსი',
}
export default function ProjectHome({params: { locale }}) {
  unstable_setRequestLocale(locale); 
  const t = useTranslations("Blocks")
  const p = useTranslations("Project")
  return (
    <>
    <div className="relative w-full">
      <div className="relative">
        <div
          className="bg-cover h-[60vh] lg:rounded-br-full bg-[url('/project-image.webp')]"
        />
        <div className="absolute bottom-0 left-0 p-4 bg-black text-white lg:mb-20 lg:ml-20">
          <h2 className="text-5xl font-bold">{p('title')}</h2>
        </div>
      </div>
      <TextComponent theme="light" text={p('desc')} />
    </div>
    <ChooseBlock locale={locale} blockTranslation={t('block')}
              onGoingTranslation={t('ongoing')}
              plannedTranslation={t('planned')}
              leftTranslation={t('left')}
              aptTranslation={t('apt')} 
              title={t('title')}
              />
    <LocationComponent />
    <ImageGallery theme='garden' />
    </>
  )
}
