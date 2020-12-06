export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const createTodo = todo => {
  return async dispatch => {
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
  };
};

export const deleteTodo = todoid => {
  return async dispatch => {
    dispatch({
      type: DELETE_TODO,
      payload: todoid,
    });
  };
};

export const updateTodo = todo => {
  return async (dispatch, getState) => {
    const todos = getState().todoReducer.todolist;
    const index = todos.findIndex(item => item.id === todo.id);
    let newArray = [...todos];
    newArray[index] = {...todo};
    dispatch({
      type: UPDATE_TODO,
      payload: newArray,
    });
  };
};
