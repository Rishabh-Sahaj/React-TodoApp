import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
      content : ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);

        this.setState({
          content : ''
        });
        console.log(this.state);
    } 
    handleChange = (e) => {
      this.setState({
          content : e.target.value
      });
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group px-5 py-3">
              <label className="text-muted py-3">Add new todo</label>
              <input className="form-control" type="text" onChange={this.handleChange} value={this.state.content}></input>
            </div>
          </form>
        );
    }
}

export default AddTodo;