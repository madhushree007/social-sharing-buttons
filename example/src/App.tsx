import React from 'react'
import { SocialButtons } from 'social-networking-buttons'


const App = () => {
  const ReceivedProps: any = {
    links: [
      'https://facebook.com',
      'https://twitter.com',
      'https://instagram.com',
      'https://linkedin.com',
      'https://pinterest.com',
      'https://snapchat.com',
      'https://spotify.com',
      'https://whatsapp.com',
      'https://youtube.com',
      'https://skype.com'
    ],
    height: 50,
    color: 'red',
    padding: 10,
    logo: false,
    vertical: false,
    width: 400,
    borderRadius: 40,
    border: 0
  }
  return <SocialButtons {...ReceivedProps} />
}
export default App
