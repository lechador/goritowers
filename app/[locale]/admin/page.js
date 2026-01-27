import { setRequestLocale } from 'next-intl/server';
import { FaBuilding, FaCheckCircle, FaExclamationCircle, FaChartLine } from 'react-icons/fa';

export default async function Admin({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const stats = [
        { title: "სულ ბინები", value: "156", icon: <FaBuilding />, color: "bg-blue-500", trend: "+12%" },
        { title: "გაყიდული", value: "89", icon: <FaCheckCircle />, color: "bg-green-500", trend: "+5 ამ თვეში" },
        { title: "ხელმისაწვდომი", value: "67", icon: <FaChartLine />, color: "bg-purple-500", trend: "3 დაჯავშნილი" },
        { title: "მოთხოვნები", value: "12", icon: <FaExclamationCircle />, color: "bg-orange-500", trend: "სასწრაფო" },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="card bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <div className="card-body p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.title}</p>
                                    <h3 className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</h3>
                                </div>
                                <div className={`p-4 rounded-full text-white shadow-lg ${stat.color}`}>
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm text-green-600 font-medium bg-green-50 w-fit px-2 py-1 rounded">
                                {stat.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity / Charts Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card bg-white shadow-sm border border-gray-100 h-96">
                    <div className="card-body">
                        <h3 className="card-title text-gray-700">გაყიდვების მიმოხილვა</h3>
                        <div className="h-full flex items-center justify-center text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                            გრაფიკული კომპონენტი
                        </div>
                    </div>
                </div>

                <div className="card bg-white shadow-sm border border-gray-100 h-96">
                    <div className="card-body">
                        <h3 className="card-title text-gray-700">ახალი შეტყობინებები</h3>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra opacity-70">
                                <thead>
                                    <tr>
                                        <th>მომხმარებელი</th>
                                        <th>თარიღი</th>
                                        <th>სტატუსი</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>გიორგი კ.</td>
                                        <td>2 საათის წინ</td>
                                        <td><span className="badge badge-success badge-sm">ახალი</span></td>
                                    </tr>
                                    <tr>
                                        <td>ნინო მ.</td>
                                        <td>5 საათის წინ</td>
                                        <td><span className="badge badge-warning badge-sm">მიმდინარე</span></td>
                                    </tr>
                                    <tr>
                                        <td>დავით ლ.</td>
                                        <td>1 დღის წინ</td>
                                        <td><span className="badge badge-ghost badge-sm">უპასუხა</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
