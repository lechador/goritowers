import Setting from "@/models/Setting"
import ComponentTitle from "../components/componentTitle"
import ImageGallery from "../components/imageGallery"
import TextComponent from "../components/textComponent"

export const metadata = {
    title: 'კომპანიის შესახებ - გორითაუერსი',
    description: 'გორითაურსი',
}

export default async function page() {
  const lineOne = await Setting.findById("669696d7b3a6f8bc5697c075")
  const lineTwo = await Setting.findById("669696f7b3a6f8bc5697c076")
  const lineThree = await Setting.findById("66969743b3a6f8bc5697c077")
  const lineFour = await Setting.findById("66969775b3a6f8bc5697c078")
  const oneVal = lineOne.setting_value
  const twoVal = lineTwo.setting_value
  const threeVal = lineThree.setting_value
  const FourVal = lineFour.setting_value
  return (
    <>
      <ComponentTitle title="კომპანიის შესახებ" />
      <TextComponent text={oneVal} theme='garden' />
      <TextComponent text={twoVal} theme='garden' />
      <TextComponent text={threeVal} theme='garden' />
      <TextComponent text={FourVal} theme='garden' />
      <ImageGallery theme='dark' />
    </>
  )
}
