import React from 'react'
interface IProps {
  name: string
  height: number
  padding: number
  link: string
}
export default function IconsPNG({ name, height, padding, link }: IProps) {
  return (
    <div style={{ padding: padding }}>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <img
          src={require(`./assets/png/${name}.png`)}
          alt={name}
          height={height}
        />
      </a>
    </div>
  )
}
