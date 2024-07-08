'use client'
// import { FacebookProvider, CustomChat } from 'react-facebook';
import { LiveChatLoaderProvider, Messenger  } from 'react-live-chat-loader'

export default function Fbchat() {
  return (
    // <FacebookProvider appId="817959516966841" chatSupport>
    //     <CustomChat pageId="366838836504467" minimized={false}/>
    //   </FacebookProvider>     
    <LiveChatLoaderProvider
        provider="messenger"
        providerKey="366838836504467"
        appID="817959516966841"
        locale="en_US"
      >
        <Messenger />
      </LiveChatLoaderProvider>
  )
}
