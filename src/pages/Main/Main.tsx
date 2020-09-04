import React, { useState } from 'react'
import Slider from "react-slick";
import { Arrow } from '../../shared/Arrow/Arrow';
import { AppLayout, AnimatedImg } from './Main.styled';
import { Dots } from '../../shared/Dots/Dots';
import { Slide } from './components/Slide/Slide';
import { devices, right } from '../../utils/constants';
import { RightBlock } from './components/RightBlock/RightBlock';
import { LeftBlock } from './components/LeftBlock/LeftBlock';
import { Device } from './components/Device/Device';

export const Main = () => {
  const [animateIndex, setAnimateIndex] = useState(0)
  const [oldAnimateIndex, setOldAnimateIndex] = useState(-1)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <Arrow />,
    nextArrow: <Arrow isReverse />,
    appendDots: (dots: any) => <Dots dots={dots}/>,
    afterChange: (current:number) => setAnimateIndex(current),
    beforeChange: (oldInd:number) => setOldAnimateIndex(oldInd),
  };

  console.log(animateIndex)
  return (
    <AppLayout>
        <Slider {...settings}>
          {[1,2,3,4,5].map((el,ind) => (
            <Slide animated={ind === animateIndex}
              isVisible={ind === oldAnimateIndex}
              Right={props=> <RightBlock {...props} 
                link={right[ind].link} 
                text={right[ind].text}
              />}
              Left={props => <LeftBlock {...props} src={`slide${el}-left.webp`} />}
              Device={props => <Device {...props} 
                src={`slide${el}-device.webp`} 
                style={{width:devices[ind].width, height:devices[ind].height}}
              />}
              >
                <AnimatedImg
                  animated={ind === animateIndex}
                  isVisible={ind === oldAnimateIndex}
                  src={process.env.PUBLIC_URL + `/images/slider/slide${el}-bg.webp`} 
                  alt="slide-bg"
                />
            </Slide>
          ))}
        </Slider>
      </AppLayout>
  )
}