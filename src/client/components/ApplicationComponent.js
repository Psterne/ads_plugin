import React from 'react';
import Slider from 'nw-react-slider';
export default ApplicationComponent;

function UserLogin({onKeyUp}){
  return (
    <div className="userLogin">
      <input type="text" onKeyUp={onKeyUp}/>
    </div>
  )
}

function PowrButton({onClick, buttonStyles, content}){
  return (
      <button style={buttonStyles} onClick={onClick}>{content}</button>
  )
}

function TodoInputThingy({onKeyUp}){
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

function TodoList({
listOfTodos,
onDeleteItemClick,
onUpdateItemClick,
onBangItemClick
}) {
  return (
    <ul>
    {
      listOfTodos.map((todoItem, index) => {
          var myLiStyles = todoItem.parentId ? {paddingLeft: "20px"} : null
          return (
          <li key={index} style={myLiStyles}>
            {todoItem.name}
            <button onClick={function(){onDeleteItemClick(todoItem.id)}}>Delete</button>
            <button onClick={function(){onUpdateItemClick(todoItem.id)}}>Update</button>
            <button onClick={function(){onBangItemClick(todoItem.id)}}>Make Child</button>
          </li>
          )
      })
    }
    </ul>
  )
}

function ApplicationComponent({
  todoList,
  newTodoOnButtonClick,
  newTodoInputKeyUp,
  is_loading,
  userSignInStart,
  username,
  password,
  userClickedHandler,
  userLoginKeyUp,
  userPwdKeyUp,
  deleteATodoItemOnButtonClick,
  updateATodoItemOnButtonClick,
  onBangItemClick
}){
    return <div className="shopping-list">
        {
          is_loading && <h1> {'LOADING!!!'} </h1>
        }
        <h1>Todo List</h1>
        <TodoInputThingy onKeyUp={(ev)=>newTodoInputKeyUp(ev.target.value)}>
        </TodoInputThingy>
        <TodoList listOfTodos={todoList} onUpdateItemClick={updateATodoItemOnButtonClick} onDeleteItemClick={deleteATodoItemOnButtonClick} onBangItemClick={onBangItemClick}/>

        <button className="square" onClick={()=>newTodoOnButtonClick()}>
          Click Me
        </button>
        <Slider
          value={5}
          min={1}
          max={5}
          onChange={function(){console.log('onChange', arguments)}}
          ticks
          markerLabel={[]}/>
      </div>


}
