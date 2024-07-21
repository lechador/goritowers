import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import dbConnect from './lib/dbConnect';
import Message from './models/Message';
 
const locales = ['ka', 'en', 'ru'];

async function getMessages(locale) {
  await dbConnect()
  const messageDoc = await Message.findOne({ locale }).exec();
  if (!messageDoc) {
    return null;
  }
  return messageDoc.messages;
}

export default getRequestConfig(async ({locale}) => {
  
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages(locale);
  if (!messages) {
    notFound();
  }
  return {
    messages,
  };
})