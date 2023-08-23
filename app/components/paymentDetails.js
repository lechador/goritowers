import ComponentTitle from "./componentTitle";


export default function PaymentDetails() {
  return (
    <div className="flex flex-col items-center py-6" data-theme="dark">
      <ComponentTitle title="გადახდის პირობები" />
      <p className="mb-4 text-lg">
        სახლის შეძენა შესაძლებელია ერთიანი გადახდით, იპოთეკური სესხით ან უპროცენტო შიდა განვადებით.
      </p>
      <p className="mb-4 text-lg">
        ერთიანი გადახდის შემთხვევაში მოქმედებს ფასდაკლება.
      </p>
      <p className="font-bold mb-4 text-lg">შიდა განვადების პირობები:</p>
      <ul className="flex flex-col items-center mb-4">
        <li className="mb-2">წლიური საპროცენტო განაკვეთი - 0%</li>
        <li className="mb-2">მინიმალური თანამონაწილეობა - 10%</li>
        <li className="mb-2">განვადების ვადა - მშენებლობის დასრულებამდე</li>
        <li className="mb-2">უზრუნველყოფა - შესაძენი უძრავი ქონება</li>
      </ul>
      <p className="mb-4 text-lg"> 
        იპოთეკური სესხის პირობები ინდივიდუალურია და განსხვავდება კონკრეტული ბანკის მიმდინარე ტარიფების შესაბამისად.
      </p>
    </div>
  )
}
