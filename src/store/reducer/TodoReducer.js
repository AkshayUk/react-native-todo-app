import {CREATE_TODO, DELETE_TODO, UPDATE_TODO} from '../action/TodoAction';

const initialState = {
  todolist: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todolist: [...state.todolist, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todolist: state.todolist.filter(todo => todo.id != action.payload),
      };

    case UPDATE_TODO:
      return {
        ...state,
        todolist: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
