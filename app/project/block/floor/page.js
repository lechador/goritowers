import ChooseFloorCard from "@/app/components/chooseFloorCard";

export default function page() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center py-6" data-theme="dark"> 
            <h1 className="text-4xl font-bold mb-4">A ბლოკი</h1>
            <h2 className="text-3xl text-teal-500	font-bold">სართული 16</h2>
        </div>
        <ChooseFloorCard />
    </div>
  )
}
