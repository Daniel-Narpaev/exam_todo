import React from 'react'
import styled from 'styled-components'
import {RiDeleteBin5Fill} from "react-icons/ri"
const ListItem = ({ id, name, dispatch}) => {
    const deleteHandler = ( ) => {
        dispatch({
            type:"DELETE",
            payload:id
        })
    }
  return (
    <List>
        <p><span>{id}</span> {name}</p>
        <Delete onClick={()=>deleteHandler(id)}/>
    </List>
  )
}

export default ListItem

const List = styled.div`
    background-color: #12dd12;
    width: 920px;
    height: 45px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 0px 30px;
    border-radius: 22px;
    margin: 20px 0px;
`
const Delete = styled(RiDeleteBin5Fill)`
    font-size: 2rem;
`