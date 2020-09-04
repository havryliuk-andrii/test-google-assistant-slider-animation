import React, { FC } from 'react'
import {ReactComponent as SliderArrowSVG } from '../../assets/arrow.svg'
import { ArrowWrapper } from './Arrow.styled';

type TProps = {
  isReverse?: boolean,
  className?: string,
  onClick?: ()=>void,
}

export const Arrow: FC<TProps> = ({ isReverse=false, className, onClick }) => {

  return (
    <ArrowWrapper  className={className} onClick={onClick} isReverse={isReverse}>
      <SliderArrowSVG />    
    </ArrowWrapper>
  )
}