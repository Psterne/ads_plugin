const initialState = {
    TOTALLY_SILLY_STATE:'Hello World'
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
    debugger
    fetch('/login', {method: 'POST'}).then(console.log)
    return {
      ...state,
      clicked_login_button: true
    }

  case 'USER_GAVE_LOGIN_NAME':
    return {
      ...state,
      userLogin: action.value
    }
  case 'USER_GAVE_LOGIN_PASSWORD':
    return {
      ...state,
      userPassword: action.value
    }
  default:
      return state
  }

}
export default Application;
