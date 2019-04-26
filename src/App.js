import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

//Class Based Component i.e, have state
class App extends Component {

  state = {
    todos : [
      {id: 1, content: 'make some websites'},
      {id: 2, content: 'study react'},
      {id: 3, content: 'go home'},
      {id: 4, content: 'play games'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( (todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos : todos
    });
  }
  
  addTodo = (newTodo) => {

    newTodo.id = Math.random();

    let newTodos = [...this.state.todos , newTodo];
    this.setState({
      todos : newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading text-center text-info py-5">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} /> 
      </div>
    );
  }  
}

export default App;
