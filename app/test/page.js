import ClientRegister from "./client";
import {unstable_setRequestLocale} from 'next-intl/server';

const Register = ({params: {locale}}) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="container mx-auto mt-8">
      <ClientRegister />
    </div>
  );
};

export default Register;
