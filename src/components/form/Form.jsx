import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styled from "styled-components";

const Form = ({ dispatch }) => {
  const [user, setUser] = useState("");
  const [userID, setUserId] = useState("");

  const userChangeHandler = (event) => {
    setUser(event.target.value);
  };
  const userIDChangeHandler = (event) => {
    setUserId(event.target.value);
  };
  const saveHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      payload: { name: user, id: userID },
    });
    // setUser("")
    // setUserId("")
  };
  return (
    <FormBlock>
      <Input
        label="User ID"
        inpType="number"
        onChange={userIDChangeHandler}
        value={userID}
      />
      <Input
        label="User"
        inpType="text"
        value={user}
        onChange={userChangeHandler}
      />
      <Button onClick={saveHandler}>
        ADD
      </Button>
    </FormBlock>
  );
};

export default Form;

const FormBlock = styled.form`
  width: 900px;
  height: 250px;
  background-color: white;
  box-shadow: 0px 0px 5px 2px grey;
  padding: 30px;
  border-radius: 12px;
  margin: 0 auto;
`;
