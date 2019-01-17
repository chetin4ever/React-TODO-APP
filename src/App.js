import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state={
    todos:[
      { id:1 , content:'buy some milk' , time:"20/2/2019" },
      { id:2 , content:'play coc' , time:"20/1/2019"}
    ]
  }
  addTodo = (todo) =>{
    todo.id= Math.random();
    let date = new Date();
    let n = date.toDateString();
    let time = date.toLocaleTimeString();
    todo.time=time + " "+ n;
    let todos= [...this.state.todos,todo];
    this.setState({
      todos
    });
  }
  deleteTodo=(id)=>{
    console.log(id);
    const todos = this.state.todos.filter (todo =>{
      return todo.id !==id;
    });
    this.setState({
      //todos:todos
      //or
      todos 
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1>heloo world</h1>
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
