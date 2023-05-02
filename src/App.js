import { useEffect, useReducer, } from "react";
import "./App.css";
import Form from "./components/form/Form";
import List from "./components/list/List";
const todoReducer = (state, action)=> {
  switch (action.type) {
   case "ADD":
     return [...state, 
       {
         name: action.payload.name,
         id:action.payload.id,
       }
     ]
     case 'GET_DATA':
       return action.payload
  case "DELETE":
     return state.filter(el => el.id !==action.payload)
   default:
      return state
  }
}
function App() {
 const [state, dispatch] = useReducer(todoReducer, [])

 const getUsers = async () => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const data = await response.json();
   dispatch({type: 'GET_DATA', payload: data})
 };

 useEffect(() => {
   getUsers();
 }, []);
  return (
    <div className="App">
      <Form dispatch={dispatch} />
      <List dispatch={dispatch} items={state} />
    </div>
  );
}

export default App;
