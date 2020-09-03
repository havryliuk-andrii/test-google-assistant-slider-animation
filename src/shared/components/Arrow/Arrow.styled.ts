
import styled from 'styled-components';

import {ReactComponent as SliderArrowSVG } from '../../assets/arrow.svg'
import { FC } from 'react';

export const NextArrow = styled(SliderArrowSVG)`

`

export const ArrowWrapper = styled.div`
  transform: ${(props: {isReverse: boolean}) => props.isReverse
    ? 'rotateY(180deg) translate(-50%, -50%)' 
    : 'translate(-50%, -50%)'};
  border-radius: 50%;
  width: 65px;
  height: 65px;
  transition: box-shadow .2s ease-in-out;
  background-color: rgba(255,255,255,.45);
  &:hover{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12);
    path{
      fill: #000;
    }
  }
  &::before {
    display: none;
  }

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%, -45%);
    
    path{
      transition: fill .2s ease-in-out;
      fill: #555;
    }
  }
`;