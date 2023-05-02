import React from 'react'
import ListItem from './ListItem'
import styled from 'styled-components';

const List = ({ items, dispatch, }) => {
  return (
     <UlList>    
        {items.map((el,)=>{
            return(
                <ListItem key={el.id}
                  name={el.name}
                  id={el.id}
                  dispatch={dispatch}
                  />
            )
        })}
     </UlList>
    )
}

export default List

const UlList = styled.ul`
    margin: 0 auto;
    margin-left: 24%;
`