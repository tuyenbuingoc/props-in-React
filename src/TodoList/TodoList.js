import React, { Component } from 'react';
import './TodoList.css'
import classnames from 'classnames';
import circle from '../Img/circle.svg';
import success from '../Img/success.svg';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {isComplete: this.props.isComplete};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
          isComplete: !this.state.isComplete
        }))
    }

    render() {
        const {item} = this.props;

        return (
            <div className={classnames('TodoList', {
                'TodoList-complete': this.state.isComplete
            })}>
                <img src={this.state.isComplete ? success : circle}
                width={24} height={24} alt="Checkbox"
                onClick={this.handleClick}></img>
                <p>
                    {item.title}
                </p>
            </div>
        );
    }
}

export default TodoList;