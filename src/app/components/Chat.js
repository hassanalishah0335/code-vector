import Link from 'next/link'
import React from 'react'

const Chat = () => {
  return (
    <div className='fixed right-5 bottom-5'>
      <Link href="skype:live:.cid.70023ce0e8a7376d?chat" target="_blank"><img className='w-16' src="/resource/images/skype.png" alt="" /></Link>
      <Link href="https://wa.me/+923700183868" target="_blank"><img className='w-[70px] mt-2' src="/resource/images/WhatsApp.png" alt="" /></Link>
    </div>
  )
}

export default Chat
