import styled, { keyframes, css } from 'styled-components';

export const AppLayout = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 64px 0 20px;
  margin: 0 auto;

  .slick-slider {
    width: 100%;
    height: 100%;
    margin: 0;
  
    .slick-list {
      height: calc(100% - 8px);
    }

    .slick-track {
      height: calc(100%);
    }

    .slick-slide {
      height: 100%;
      div {
        height:100%;
      }
    }

    .slick-prev { left: 65px; z-index: 1;}
    .slick-next { right: 65px}
  }
`

const animations = {
  slideUp: (offsetX:string, offsetY: string) => keyframes`
    from{transform: translate(${offsetY}, calc(70px + ${offsetX}))}
    to {transform: translate(${offsetY}, calc(0% + ${offsetX}))}
  `,
  fade: keyframes`
    from{opacity: 0;}
    to{opacity: 1;}
  `,
  ghost: keyframes`
    99% {visibility: hidden}
    100%{visibility: visible}
  `
}

export const SlideWrapper = styled.div`
  height: 100%;
  position: relative;
`

export const animated= (offsetX:string, offsetY:string, delay:string) => css`
animation: 
  ${animations.ghost} .4s forwards ${delay},
  ${animations.slideUp(offsetX, offsetY)} .6s cubic-bezier(.28,.18,.62,.93) calc(.3s + ${delay}) forwards,
  ${animations.fade} .5s ease-in calc(.3s + ${delay}) forwards;
`;

export const AnimatedImg = styled.img`
  ${(props:{animated:boolean,isVisible:boolean}) => ``};
  position: absolute;
  left:50%;
  ${(props)=> props.animated? animated('0%','-50%','.0s') : ''};
  ${({isVisible}) => isVisible 
    ? 'visibility: visible; animation-delay: 0s; animation-duration: 0s;' 
    : 'visibility: hidden'};
`

export const AnimatedDevice = styled.img`
  ${(props:{animated:boolean,isVisible:boolean}) => ``};
  position: absolute;
  left:63%;
  bottom:3%;
  ${(props)=> props.animated? animated('0%','-50%','.4s') : ''};
  ${({isVisible}) => isVisible 
    ? 'visibility: visible; animation-delay: 0s; animation-duration: 0s;' 
    : 'visibility: hidden'};
`

export const AnimatedLeft = styled.img`
  ${(props:{animated:boolean,isVisible:boolean}) => ``};
  position: absolute;
  width: 317px;
  height: 347px;
  left:20%;
  top: calc(50% - 178px);
  ${(props)=> props.animated? animated('0%','-50%','.8s') : ''};
  ${({isVisible}) => isVisible 
    ? 'visibility: visible; animation-delay: 0s; animation-duration: 0s;' 
    : 'visibility: hidden'};
`

export const AnimatedRight = styled.div`
  ${(props:{animated:boolean,isVisible:boolean}) => ``};
  position: absolute;
  right: calc(20% - 150px);
  top: 50%;
  ${(props)=> props.animated? animated('-62%','7%','.8s') : ''};
  ${({isVisible}) => isVisible 
    ? 'visibility: visible; animation-delay: 0s; animation-duration: 0s;' 
    : 'visibility: hidden'};
  display: grid;
  grid-template: max-content max-content / 300px;
  gap: 32px;
  align-content: center;
  
  p {
    width: 300px;
    font-size: 28px;
    line-height: 40px;
  }
`
