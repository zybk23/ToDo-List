import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseApiUrl } from "../../Constants";
import axios from "axios";

export const getTodos = createAsyncThunk("todoSlice/getTodos", async () => {
  const res = await axios.get(`${BaseApiUrl}/todos`);
  const { data } = res;
  return data;
});

export const addTodoToList = createAsyncThunk(
  "todoSlice/addTodoToList",
  async (params, { dispatch }) => {
    const res = await axios.post(`${BaseApiUrl}/todos`, params);
    const { data } = res;
    dispatch(getTodos());
    return data;
  }
);

export const updateTodoList = createAsyncThunk(
  "todoSlice/updateTodoList",
  async (params, { dispatch }) => {
    const res = await axios.put(`${BaseApiUrl}/todos/${params.id}`, {
      ...params,
      isChecked: !params.isChecked,
    });
    const { data } = res;
    dispatch(getTodos());
    return data;
  }
);

export const deleteTodoSelectedItem = createAsyncThunk(
  "todoSlice/deleteTodoSelectedItem",
  async (id, { dispatch }) => {
    const res = await axios.delete(`${BaseApiUrl}/todos/${id}`);
    const { data } = res;
    dispatch(getTodos());
    return data;
  }
);

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
