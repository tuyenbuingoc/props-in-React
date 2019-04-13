import React, { Component } from 'react';
import './TodoList.css'

class TodoList extends Component {
    render() {
        
            const {item} = this.props;
            let className = 'TodoList';
            if(item.isComplete) {
                className += ' TodoList-complete';
            }
        
        return (
            <div className={className}>
                <p>
                    {item.title}
                </p>
            </div>
        );
    }
}

export default TodoList;