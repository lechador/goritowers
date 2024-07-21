import {unstable_setRequestLocale} from 'next-intl/server';
import LoginClient from './client';
const Login = ({params: {locale}}) => {
  
  unstable_setRequestLocale(locale);
 
  return (
    <div className="container mx-auto mt-8">
      <LoginClient />
    </div>
  );
};

export default Login;