const initState = {
    id: 0,
    todos: []
  };
  
  export default function reducer(state = initState, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          id: state.id + 1,
          todos: [...state.todos, { is: state.id+1, content: action.content }]
        };
  
      case "DELETE_TODO":
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.id)
        };
  
      default:
        return {
          ...state
        };
    }
  }