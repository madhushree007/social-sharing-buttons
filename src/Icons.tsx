import { ReactComponent as Facebook } from './assets/svg/facebook.svg'
import { ReactComponent as Twitter } from './assets/svg/twitter.svg'
import { ReactComponent as Instagram } from './assets/svg/instagram.svg'
import { ReactComponent as Android } from './assets/svg/android.svg'
import { ReactComponent as GooglePlus } from './assets/svg/google-plus.svg'
import { ReactComponent as Linkedin } from './assets/svg/linkedin.svg'
import { ReactComponent as Pinterest } from './assets/svg/pinterest.svg'
import { ReactComponent as Skype } from './assets/svg/skype.svg'
import { ReactComponent as SnapChat } from './assets/svg/snapchat.svg'
import { ReactComponent as Spotify } from './assets/svg/spotify.svg'
import { ReactComponent as WhatsApp } from './assets/svg/whatsapp.svg'
import { ReactComponent as Youtube } from './assets/svg/youtube.svg'

interface Iicons {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}
const Icons: Iicons = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  android: Android,
  plus: GooglePlus,
  linkedin: Linkedin,
  pinterest: Pinterest,
  skype: Skype,
  snapchat: SnapChat,
  spotify: Spotify,
  whatsapp: WhatsApp,
  youtube: Youtube
}

export default Icons
