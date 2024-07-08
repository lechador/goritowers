'use client'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function Fbchat() {
  return (
    <FacebookProvider appId="817959516966841" chatSupport>
        <CustomChat pageId="366838836504467" minimized={false}/>
      </FacebookProvider>      
  )
}
