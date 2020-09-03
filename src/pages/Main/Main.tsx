import React, { useState } from 'react'
import Slider from "react-slick";
import { Arrow } from '../../shared/components/Arrow/Arrow';
import { AppLayout } from './Main.styled';
import { Dots } from '../../shared/components/Dots/Dots';
import { Slide } from './components/Slide';
import { devices, right } from '../constants';

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
          {[1,2,3,4,5].map((el,ind) => {
            return <Slide animated={ind === animateIndex}
              isVisible={ind === oldAnimateIndex}
              images={{
                bg:`slide${el}-bg.webp`,
                device: {
                  url: `slide${el}-device.webp`,
                  width: devices[ind].width,
                  height: devices[ind].height,
                },
                right: right[ind],
                left: `slide${el}-left.webp`,
              }}
            />
          })}
        </Slider>
      </AppLayout>
  )
}