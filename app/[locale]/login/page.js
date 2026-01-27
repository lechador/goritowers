import {setRequestLocale} from 'next-intl/server';
import LoginClient from './client';
const Login = async ({params}) => {
  const { locale } = await params;
  
  setRequestLocale(locale);
 
  return (
    <div className="container mx-auto mt-8">
      <LoginClient />
    </div>
  );
};

export default Login;