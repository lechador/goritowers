

export default function TextComponent({text, theme}) {
  return (
    <div className="flex justify-center items-center pt-10 pb-10" data-theme={theme}>
        <p className="text-center text-lg mx-3 lg:mx-40">
            {text}
        </p>
    </div>
  )
}
