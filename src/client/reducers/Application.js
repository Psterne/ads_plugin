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
  case 'SOMETHING':
    return state;
  default:
      return state
  }
}
export default Application;
