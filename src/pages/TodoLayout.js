import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import Input from "../components/Input";
import Button from "../components/Button";
import TodoList from "../components/TodoList";
import { getTodos, addTodoToList } from "../store/todoStore";

const TodoLayout = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const handleChangeTodoValue = (e) => {
    setTodoValue(e.target.value);
  };

  const handleAddTodoToList = () => {
    const todoParams = {
      content: todoValue,
      isChecked: false,
      createdAt: new Date(),
    };

    dispatch(addTodoToList(todoParams))
      .then((res) => {
        setTodoValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <StyledTodoLayoutComponent>
      <StyledTodoTitle>ToDo List</StyledTodoTitle>
      <StyledAddItemContainer>
        <Input
          placeholder="New Task"
          value={todoValue}
          handleChangeValue={handleChangeTodoValue}
        />
        <Button
          disabled={todoValue.length === 0}
          text="Add"
          handleClick={handleAddTodoToList}
        />
      </StyledAddItemContainer>
      <TodoList />
    </StyledTodoLayoutComponent>
  );
};

const StyledTodoLayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 60%;
  background: #fff;
  padding: 20px;
`;

const StyledTodoTitle = styled.h3`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #484848;
`;

const StyledAddItemContainer = styled(StyledTodoLayoutComponent)`
  flex-direction: row;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  background-color: white;
  margin-bottom: 24px;
`;

export default TodoLayout;
