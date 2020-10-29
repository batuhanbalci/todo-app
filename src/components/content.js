import React from 'react';
import AddItem from './addItem';
import TodoList from './todoList';

const Content = () => {
    return (
        <React.Fragment>
            <AddItem />
            <TodoList />
        </React.Fragment>
    )
}

export default Content;