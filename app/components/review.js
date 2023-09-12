

export default function Review() {
  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700" data-theme="garden">
        <div className="flex justify-between p-4">
            <div className="flex space-x-4 items-center">
                <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                </div>
                <div>
                    <h4 className="font-bold">ანა ვარნაზიშვილი</h4>
                </div>
            </div>
        </div>
        <div className="p-4 space-y-2 text-md">
            <p>არქი განსაკუთრებულად ყურადღებიანი კომპანიაა, რომელსაც გამართული სერვისი აქვს, სადარბაზო ყოველთვის მოწესრიგებულია და ყველანაირ კომფორტს გვიქმნიან ცხოვრებისთვის. აქ ისეთი მეგობრული გარემოა, რომ დიდი ოჯახის  ნაწილად ვგრძნობ თავს.</p>
        </div>
    </div>
  )
}
