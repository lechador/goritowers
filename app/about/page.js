import Setting from "@/models/Setting"
import ComponentTitle from "../components/componentTitle"
import ImageGallery from "../components/imageGallery"
import TextComponent from "../components/textComponent"

export const metadata = {
    title: 'კომპანიის შესახებ - გორითაუერსი',
    description: 'გორითაურსი',
}

export default async function About() {
  const settings = await Promise.all([
    Setting.findById("669696d7b3a6f8bc5697c075"),
    Setting.findById("669696f7b3a6f8bc5697c076"),
    Setting.findById("66969743b3a6f8bc5697c077"),
    Setting.findById("66969775b3a6f8bc5697c078")
  ]);

  const [lineOne, lineTwo, lineThree, lineFour] = settings;

  // Optional: Add error handling in case any setting is not found
  if (!lineOne || !lineTwo || !lineThree || !lineFour) {
    // Handle error accordingly
    throw new Error("One or more settings could not be retrieved");
  }

  return (
    <>
      <ComponentTitle title="კომპანიის შესახებ" />
      <TextComponent text={lineOne.setting_value} theme="garden" />
      <TextComponent text={lineTwo.setting_value} theme="garden" />
      <TextComponent text={lineThree.setting_value} theme="garden" />
      <TextComponent text={lineFour.setting_value} theme="garden" />
      <ImageGallery theme="dark" />
    </>
  )
}
