import React, { FC } from 'react'
import {
    SlideWrapper,
    AnimatedImg,
    AnimatedDevice,
    AnimatedLeft,
    AnimatedRight
} from '../Main.styled';
import { CustomLink } from '../../../shared/components/Link/Link.styled';

export const Slide: FC<{
  onClick?: ()=>void
  animated: boolean
  isVisible: boolean
  images: {
    bg: string
    left: string
    device: {
      url: string,
      width: string,
      height: string,
    }
    right: {
      text: string,
      link: string,
    }
  }
}> = ({ animated, onClick, images, isVisible }) => {
  return (
    <SlideWrapper onClick={onClick}>
      <AnimatedImg 
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
      </AnimatedRight>
    </SlideWrapper>
  )
}