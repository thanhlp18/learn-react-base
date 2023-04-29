import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames'
import './styles.scss'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {
    const handdleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }
    return (
        <ul>
            {todoList.map((todo, idx) => (
                <li key={todo.id} className={classname({
                    'todo-item': true,
                    'completed': todo.status === 'completed'
                })}
                    onClick={() => handdleTodoClick(todo, idx)}
                >{todo.title}</li>
            ))
            }
        </ul >
    );
}

export default TodoList;