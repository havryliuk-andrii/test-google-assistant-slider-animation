import React, { FC } from 'react'
import { TAnimated } from '../Slide/types'
import { AnimatedDevice } from '../../Main.styled';

type TProps = TAnimated & {
  src: string
  style: {[key:string]:string}

}

export const Device: FC<TProps> = ({ isVisible, animated, style, src}) => {
  return (
     <AnimatedDevice
        animated={animated}
        isVisible={isVisible}
        src={process.env.PUBLIC_URL + `/images/slider/${src}`}
        style={style}
        alt="device"
      />
  )
}