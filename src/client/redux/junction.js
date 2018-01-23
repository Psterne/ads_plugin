import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import * as actions from 'Actions'

const mapStateToProps = ( state, props ) => {
    return {
      ...state.Application,
      todoList: state.Application.todoList,
      username: state.Application.userLogin,
      password: state.Application.userPassword,
      sliderValue: state.Application.sliderValue,
    }
}

const mapDispatchToProps = (dispatch) => {

  // return actions;
  return {
    sliderSlideStop: function(sliderPosition) {
      console.log('sliderPosition')
      console.log(sliderPosition)
      dispatch({type: "SLIDER_STOP_CHANGED", sliderPosition})
    },
    userSignInStart: function(){
      dispatch({type: "USER_SIGNIN_START"})
    },
    userClickedHandler: function() {
      dispatch({type: "USER_LOGIN_BUTTON_CLICK"})
    },
    userLoginKeyUp: function(value) {
      dispatch({type: "USER_GAVE_LOGIN_NAME", value })
    },
    newTodoInputKeyUp: function(value) {
      dispatch({type: "NEW_TODO_INPUT_KEY_UP", value })
    },
    newTodoOnButtonClick: function() {
      dispatch({type: "NEW_TODO_BUTTON_CLICK"})
    },
    deleteATodoItemOnButtonClick: function(todoId) {
      dispatch({type: "DELETE_TODO", todoId})
    },
    updateATodoItemOnButtonClick: function(todoId) {
      dispatch({type: 'UPDATE_TODO', todoId})
    },
    onBangItemClick: function(parentId) {
      dispatch({type: 'MAKE_CHILD', parentId})
    }
  };

}

const Junction = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationComponent)

export default Junction
