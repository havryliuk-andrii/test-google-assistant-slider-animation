import React, { FC } from 'react'
import {ReactComponent as SliderArrowSVG } from '../../assets/arrow.svg'
import { ArrowWrapper } from './Arrow.styled';

export const Arrow: FC<{
  isReverse?: boolean,
  className?: string,
  style?: {[key:string]: string}
  onClick?: ()=>void,
  handleClick?: ()=>void,
}> = ({ isReverse=false, className, style, onClick, handleClick }) => {
  const _onClick = () => {
    if (handleClick) handleClick()
    if (onClick) onClick()
  }
  return (
    <ArrowWrapper  className={className} onClick={() => _onClick()} isReverse={isReverse}>
      <SliderArrowSVG />    
    </ArrowWrapper>
  )
}