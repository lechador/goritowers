import ClientRegister from "./client";
import {setRequestLocale} from 'next-intl/server';

const Register = async ({params}) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="container mx-auto mt-8">
      <ClientRegister />
    </div>
  );
};

export default Register;
