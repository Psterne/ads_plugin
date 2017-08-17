import React from 'react';
export default ApplicationComponent;

function UserLogin({onKeyUp}){
  return (
    <div className="userLogin">
      <input type="text" onKeyUp={onKeyUp}/>
    </div>
  )
}

function UserPwd({onKeyUp}){
  return (
    <div className="userPwd">
      <input type="text" onKeyUp={onKeyUp}/>
    </div>
  )
}

function PrivacyViolator({username, password}){
  return (
    <div>
      { username }
      { password }
    </div>
  )
}


class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      // "DataSource" is some global data source
    };
  }

  componentDidMount() {
    // Subscribe to changes
    console.log(this, "Helllllo I'm in Mount")
  }

  componentWillUnmount() {
    // Clean up listener
    console.log(this, "Unmount!!")
  }

  render() {
    var children = this.props.children
    return (
      <div className="fooBar">

        {
          children.map((child,index) => (
          <div key={index} onClick={() => alert(`${index}`)}>
            {child}
          </div>
          ))
        }

      </div>
    )
  }
}

function Comment({val}){
  return <div>{val}</div>
}

function ApplicationComponent({is_loading, userSignInStart, username, password, userClickedHandler, userLoginKeyUp, userPwdKeyUp}){
    debugger
    return <div className="shopping-list">
        {
          is_loading && <h1> {'LOADING!!!'} </h1>
        }
        <h1>Log In</h1>
        <PrivacyViolator username={username} password={password}/>
        <UserLogin onKeyUp={(ev)=>userLoginKeyUp(ev.target.value)}>
        </UserLogin>
        <UserPwd onKeyUp={(ev)=>userPwdKeyUp(ev.target.value)}>
        </UserPwd>

        <button className="square" onClick={()=>userClickedHandler()}>
          Click Me
        </button>
      </div>

}
