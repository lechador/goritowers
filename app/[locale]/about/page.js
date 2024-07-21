import ImageGallery from "@/app/components/imageGallery"
import TextComponent from "@/app/components/textComponent"
import ComponentTitle from "@/app/components/componentTitle"
import { useTranslations } from "next-intl"

export const metadata = {
    title: 'კომპანიის შესახებ - გორითაუერსი',
    description: 'გორითაურსი',
}

export default function About() {
  const t = useTranslations("About")
  return (
    <>
      <ComponentTitle title={t('title')} />
      <TextComponent text={t('line_1')} theme="garden" />
      <TextComponent text={t('line_2')} theme="garden" />
      <TextComponent text={t('line_3')} theme="garden" />
      <TextComponent text={t('line_4')} theme="garden" />
      <ImageGallery theme="dark" />
    </>
  )
}
