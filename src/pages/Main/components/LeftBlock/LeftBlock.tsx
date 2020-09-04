import React, { FC } from 'react'
import { TAnimated } from '../Slide/types'
import { AnimatedLeft } from '../../Main.styled';

type TProps = TAnimated & {
  src: string
}

export const LeftBlock: FC<TProps> = ({ isVisible, animated, src}) => {
  return (
    <AnimatedLeft animated={animated} isVisible={isVisible}
      src={process.env.PUBLIC_URL + `/images/slider/${src}`} 
      alt="slogan"
    />
  )
}