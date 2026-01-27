import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import dbConnect from './lib/dbConnect';
import Message from './models/Message';
 
const locales = ['ka', 'en', 'ru'];

async function getMessages(locale) {
  try {
    await dbConnect()
    const messageDoc = await Message.findOne({ locale }).exec();
    if (!messageDoc) {
        console.log('Message doc not found for locale ' + locale);
        return null;
    }
    return messageDoc.messages;
  } catch (e) {
    console.error('DB Error', e);
    return {};
  }
}

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale)) {
      locale = 'ka';
  }

  const messages = await getMessages(locale);
  
  return {
    locale,
    messages: messages || {},
  };
})
