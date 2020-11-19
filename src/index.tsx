import * as React from 'react'
import { findMedia } from './Functions'
import IconsPNG from './IconsPNG'
import Icon from './Icon'

export const SocialButtons = (RecivedParameters: any) => {
  interface StateData {
    name: string
    link: string
  }
  interface IFinalProps {
    links: string[]
    height: number
    color: string
    padding: number
    logo: boolean
    background: string
    vertical: boolean
    borderRadius: number
    border: number
  }
  const finalProps: IFinalProps = {
    links: [],
    height: 50,
    color: 'red',
    padding: 5,
    logo: false,
    background: '#FFFFFF',
    vertical: false,
    borderRadius: 40,
    border: 40
  }

  const [lists, setLists] = React.useState<StateData[]>([])
  const [padding, setPadding] = React.useState<number>(10)
  const [height, setHeight] = React.useState<number>(30)
  const [color, setColor] = React.useState<string>('#3552a7')
  const [border, setBorder] = React.useState<number>(10)
  const [logo, setLogo] = React.useState<boolean>(false)
  const [vertical, setVertical] = React.useState<boolean>(false)
  const [bg, setBg] = React.useState<string>('#FFFFFF')
  const [width, setWidth] = React.useState<number>(200)

  React.useEffect(() => {
    const newProps = Object.assign(finalProps, RecivedParameters)

    setHeight(newProps.height)
    setColor(newProps.color)
    setPadding(newProps.padding)
    setVertical(newProps.vertical)
    setBg(newProps.background)
    setBorder(newProps.border)
    setLogo(newProps.logo)
    setWidth(newProps.width)

    const newArr: string[] = [...newProps.links]
    const newList = findMedia(newArr)
    setLists(newList)
  }, [])

  const myStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',
    backgroundColor: bg,
    width: `${width}px`,
    flexWrap: 'wrap'
  }

  return (
    <div>
      <div style={myStyle}>
        {lists.map((list) =>
          logo ? (
            <IconsPNG
              key={list.name}
              name={list.name}
              height={height}
              padding={padding}
              link={list.link}
            />
          ) : (
            <Icon
              key={list.name}
              name={list.name}
              height={height}
              color={color}
              padding={padding}
              border={border}
              link={list.link}
            />
          )
        )}
      </div>
    </div>
  )
}
