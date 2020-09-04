import React, { FC } from 'react'
import { TAnimated } from '../Slide/types'
import { AnimatedRight } from '../../Main.styled'
import { CustomLink } from '../../../../styles/Link.styled';

type TProps = TAnimated & {
  text: string,
  link: string,
}

export const RightBlock: FC<TProps> = ({ isVisible, animated, text, link}) => {
  return (
    <AnimatedRight isVisible={isVisible} animated={animated}>
      <p>{text}</p>
      <CustomLink href={link} target="_blank">Learn more</CustomLink>
    </AnimatedRight>
  )
}