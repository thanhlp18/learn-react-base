import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useState, useEffect } from 'react';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import queryString from 'query-string'
import TodoForm from 'features/Todo/components/TodoForm';

ListPage.propTypes = {

};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Code',
            status: 'new'
        },
    ]

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList)
    const [filter, setFilter] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params.status);
        return params.status || 'all';
    })


    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilter(params.status || 'all')
    }, [location.search])

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }

        setTodoList(newTodoList)
    }

    const handleShowAll = () => {
        setFilter('all')
        const queryParams = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompleted = () => {
        setFilter('completed')
        const queryParams = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })

    }
    const handleShowNew = () => {
        setFilter('new')
        const queryParams = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const filterTodoList = todoList.filter(todo => filter === 'all' || filter === todo.status)

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values)
    }

    return (
        <div>
            <h3>What to do?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />

            <h3>Todo List</h3>
            <TodoList todoList={filterTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAll}>Show All</button>
            <button onClick={handleShowCompleted}>Show Completed</button>
            <button onClick={handleShowNew}> Show New</button>
        </div >
    );
}

export default ListPage;