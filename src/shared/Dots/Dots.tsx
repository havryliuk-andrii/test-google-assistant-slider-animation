import React, { FC } from 'react'
import { CustomDots, Dot } from './Dots.styled';

type TProps = {
  dots: any[],
}

export const Dots: FC<TProps> = ({dots}) => {

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