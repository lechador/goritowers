import AdminHeader from "./components/header";
import AdminSidebar from "./components/sidebar";
import {unstable_setRequestLocale} from 'next-intl/server';

const AdminLayout = ({ children, params: {locale} }) => {
  unstable_setRequestLocale(locale);
  return (
    <div className="flex flex-col h-screen md:flex-row bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <AdminHeader />

        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
