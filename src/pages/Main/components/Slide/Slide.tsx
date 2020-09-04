import React, { FC, ReactNode } from 'react'
import {
    SlideWrapper,
    AnimatedImg,
    AnimatedDevice,
    AnimatedLeft,
    AnimatedRight
} from '../../Main.styled';
import { CustomLink } from '../../../../styles/Link.styled';
import { TImages, TAnimated } from './types';

type TProps = TAnimated & {
  onClick?: ()=>void
  children: any
  Left: FC<TAnimated>
  Right: FC<TAnimated>
  Device: FC<TAnimated>
}

export const Slide: FC<TProps> = ({ animated, onClick, isVisible, children, Left, Right, Device }) => {
  return (
    <SlideWrapper onClick={onClick}>
      {React.cloneElement(children, {animated, isVisible})}
      <Left isVisible={isVisible} animated={animated} />
      <Right isVisible={isVisible} animated={animated} />
      <Device isVisible={isVisible} animated={animated} />
      {/* <AnimatedImg 
        animated={animated}
        isVisible={isVisible}
        src={process.env.PUBLIC_URL + '/images/slider/'+ images.bg} 
        alt="slide-bg"
      />
      <AnimatedDevice
        animated={animated}
        isVisible={isVisible}
        src={process.env.PUBLIC_URL + '/images/slider/'+ images.device.url}
        style={{width:images.device.width, height:images.device.height}}
        alt="device"
      />
      <AnimatedLeft 
        animated={animated}
        isVisible={isVisible}
        src={process.env.PUBLIC_URL + '/images/slider/'+ images.left} 
        alt="slogan"
      />
      <AnimatedRight animated={animated} isVisible={isVisible}>
        <p>{images.right.text}</p>
        <CustomLink href={images.right.link} target="_blank">Learn more</CustomLink>
      </AnimatedRight>*/}
    </SlideWrapper> 
  )
}