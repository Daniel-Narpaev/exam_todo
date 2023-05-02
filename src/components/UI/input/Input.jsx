import React from 'react'
import styled from 'styled-components'

const Input = ({ label, type, value, onChange }) => {
  return (
    <Form>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type={type}  value={value} onChange={onChange}/>
    </Form>
  )
}

export default Input

const Form = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`

const StyledInput = styled.input`
    width: 800px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #1baa16;
    font-size: 1.5rem;
    color: #0f750c;
`
const StyledLabel = styled.label`
    font-weight: bold;
    font-size: 30px;
    color: #1baa16;
    margin-left: 45px;
    align-self: baseline;
`
