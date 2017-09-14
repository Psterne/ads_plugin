const initialState = {
    TOTALLY_SILLY_STATE:'Hello World',
    todoList: [],
};
const Application = (state=initialState, action) =>  {
  switch (action.type){
  case 'LOADING_START':
    return {
      ...state,
      is_loading: true,
    }
  case 'LOADING_FINISH':
    return {
      ...state,
      is_loading: false,
    }
  case 'USER_LOGIN_BUTTON_CLICK':
    fetch('/login', {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username: state.userLogin, password: state.userPassword})
    }).then(
    ).catch()
    return {
      ...state,
      clicked_login_button: true
    }

  case 'USER_GAVE_LOGIN_NAME':
    return {
      ...state,
      userLogin: action.value
    }
  case 'NEW_TODO_INPUT_KEY_UP':
    return {
      ...state,
      inputValue: action.value
    }
  case 'NEW_TODO_BUTTON_CLICK':
    return {
      ...state,
      todoList: state.todoList.concat(state.inputValue),
      inputValue: '',
    }
  default:
      return state
  }

}
export default Application;
