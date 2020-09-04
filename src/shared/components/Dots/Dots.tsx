import React, { FC } from 'react'
import { CustomDots, Dot } from './Dots.styled';

export const Dots: FC<{
  dots: any[],
}> = ({dots}) => {
  console.log(dots)
  return (
  <CustomDots>
    {dots.map((el) => {
      return <Dot
        active={el.props.className === 'slick-active'}
        onClick={el.props.children.props.onClick}
      />
    })}
  </CustomDots>
  )
}