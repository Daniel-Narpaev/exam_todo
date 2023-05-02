import React from 'react'
import styled from 'styled-components';

const Button = ({onClick, children}) => {
  return (
    <Btn onClick={onClick}>{children}</Btn>
  )
}

export default Button

const Btn = styled.button`
  width: 160px;
  height: 50px;
  background-color: #38bd04;
  color: #ffffff;
  font-size: 1.35rem;
  margin-top: 30px;
  font-weight: 600;
  border: none;
  border-radius: 22px;
  :active {
    background-color: #0d5a1d;
  }
`;