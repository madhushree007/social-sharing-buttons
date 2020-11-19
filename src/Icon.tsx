import React from 'react'
import Icons from './Icons'

interface IProps {
  name: string
  height: number
  color: string
  padding: number
  link: string
  border: number
}

export default function Icon({
  name,
  height,
  color,
  padding,
  border,
  link
}: IProps) {
  const MyIcon = Icons[name]
  return (
    <div style={{ padding: padding }}>
      <a href={link} rel='noopener noreferrer' target='_blank'>
        <MyIcon
          height={height}
          width={height}
          style={{ color: color, borderRadius: border }}
        />
      </a>
    </div>
  )
}
