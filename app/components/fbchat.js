'use client'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function Fbchat() {
  return (
    <FacebookProvider appId="1192887195084913" chatSupport>
        <CustomChat pageId="366838836504467"/>
      </FacebookProvider>      
  )
}