import styled from 'styled-components';

export const CustomDots = styled.div`
  display: grid;
  grid-template: 10px / repeat(auto-fit, 10px);
  gap: 10px;
  justify-content: center;
`;

export const Dot = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  transition: background-color .3s ease-in-out;
  ${(props: {active: boolean})=>`
    background-color: ${props.active ? 'black' : 'white'};
  `}
`
