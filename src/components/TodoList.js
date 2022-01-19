import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { updateTodoList, deleteTodoSelectedItem } from "../store/todoStore";
import moment from "moment";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoSlice.todos);

  let modifiedTodos = [...todos];

  modifiedTodos = modifiedTodos.sort(
    (a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix()
  );

  const handleCheckedTodo = (todo) => {
    dispatch(updateTodoList(todo));
  };

  const handleDeleteSelectedTodoItem = (todoId) => {
    dispatch(deleteTodoSelectedItem(todoId));
  };

  return (
    <StyledTodoListContainer>
      {modifiedTodos.map((todo) => (
        <StyledTodoItemContainer key={todo.id}>
          <StyledTodoItemLeftSideContainer>
            <StyledTodoItemCheckox
              checked={todo.isChecked}
              onChange={() => handleCheckedTodo(todo)}
              type="checkbox"
            />
            <StyledTodoItemText
              textdecoration={todo.isChecked ? "line-through" : "none"}
            >
              {todo.content}
            </StyledTodoItemText>
          </StyledTodoItemLeftSideContainer>
          <StyledRemoveButton
            onClick={() => handleDeleteSelectedTodoItem(todo.id)}
            className="far fa-trash-alt"
          />
        </StyledTodoItemContainer>
      ))}
    </StyledTodoListContainer>
  );
};

const StyledTodoListContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StyledTodoItemContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 0.2px solid rgb(202, 202, 202);
`;

const StyledTodoItemLeftSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledTodoItemCheckox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const StyledTodoItemText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #484848;
  margin-left: 24px;
  text-decoration: ${(p) => p.textdecoration};
`;

const StyledRemoveButton = styled.i`
  width: 16px;
  height: 16px;
  color: red;
  cursor: pointer;
`;

export default memo(TodoList);
