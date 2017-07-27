import { connect,applyMiddleware } from 'react-redux'
import ApplicationComponent from 'Components/ApplicationComponent'
import * as actions from 'Actions'

const mapStateToProps = ( state, props ) => {
    return {
      ...state.Application,
      username: "myName",
      password: "supersecret"
    }
}

const mapDispatchToProps = (dispatch) => {

  // return actions;
  return {
    userSignInStart: function(){
      dispatch({type: "USER_SIGNIN_START"})
    }
  };
}

const ApplicationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationComponent)

export default ApplicationContainer
