import LoginClient from "./client";
import {unstable_setRequestLocale} from 'next-intl/server';
const Login = ({params: {locale}}) => {
  
  unstable_setRequestLocale(locale);
 
  return (
    <div className="container mx-auto mt-8">
      <LoginClient />
    </div>
  );
};

export default Login;