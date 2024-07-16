import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className="w-full md:w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li>
            <Link className="hover:bg-gray-700 px-3 py-2 block" href="/admin/">
              მთავარი
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-3 py-2 block" href="/admin/apartments">
              ბინები
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-3 py-2 block" href="/admin/settings">
              პარამეტრები
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
