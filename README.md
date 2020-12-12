# social-networking-buttons

## Social netwoking buttons is a react component which is used for displaying common Social Media SVG icons or pngs. It has many customizable options

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/social-networking-buttons.svg)](https://www.npmjs.com/package/social-networking-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save social-networking-buttons
```


<img src="./src/svg.png" />
<img src="./src/logo.png" />

## Usage

```tsx
import React from 'react'

import { SocialButtons } from 'social-networking-buttons'

const myApp = () => {
  const PropsToSend: any = {
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
    border: 40
  }
  return <SocialButtons {...PropsToSend} />
}
export default myApp
```

### Required arguments

| Prop name	| Description                | Type |	Default |	Required |
| --------- | -------------------------- | --------| --------| -------- |
| `links`   | Custom links for the icons | `array` | `[]` | yes |
| `height`   | How large should the icons be?  | `number` | `30` | no |
| `color`   | Color of icons  | `string` | `red` | no |
| `padding`   | Padding between icons  | `number` | `10` | no |
| `logo`   | SVG icons or PNG icons  | `boolean` | `false` | no |
| `background`   | What background color to use  | `string` | `white` | no |
| `vertical`   | What direction logos should display  | `boolean` | `false` | no |
| `border`   | Border radius of logos  | `number` | `4` | no |
| `width`   | Width of the div  | `number` |  | no |

### Available icons/png

- facebook
- instagram
- linkedin
- pinterest
- skype
- snapchat
- spotyfy
- twitter
- whatsapp
- youtube

## License

MIT © [Madhushree Gupta](https://github.com/madhushree007)
