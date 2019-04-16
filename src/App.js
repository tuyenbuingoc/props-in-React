import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import downarrow from './Img/down-arrow.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      TodoItems: [{title: "Ăn sáng", isComplete: true}, 
      {title: "Ăn trưa", isComplete: false},
      {title: "Ăn tối", isComplete: false}]
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        TodoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index+1)
        ]
      });
    }
  }
  onKeyUp(event) {
    if(event.keyCode === 13) { //Enter key is pressed
      let text = event.target.value;
      if(!text) {
        return;
      }
      text = text.trim();
      if(!text) {
        return;
      }
      this.setState({
        newItem: '',
        TodoItems: [
          {
            title: text,
            isComplete: false
          },
          ...this.state.TodoItems
        ]
      });
    }
  } 

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const {TodoItems, newItem} = this.state;
    return (
      <div className="App">
        <h1>todos</h1>
        <div className="newItem">
          <img src={downarrow} 
          alt="downarrow" width={24} height={24} 
          >
          </img>
          <input type="text" 
          placeholder="What needs to be done?"
          value={newItem}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}/>
        </div>
        
        {
          TodoItems.length && TodoItems.map((item, index) => 
          <TodoList 
          key={index} 
          item={item}
          onClick={this.onItemClicked(item)} />)
        }
      </div>
    );
  }
}

export default App;
