import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {
  constructor() {
    super();
    this.TodoItems = [{title: "Ăn sáng", isComplete: true}, {title: "Ăn trưa"}, {title: "Ăn tối"}];
  }
  render() {
    return (
      <div className="App">
        {
          this.TodoItems.map((item) => <TodoList item={item} />)
        }
      </div>
    );
  }
}

export default App;
