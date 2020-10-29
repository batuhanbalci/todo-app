import React from 'react';
import AddItem from './addItem';
import TodoList from './todoList';

const Content = () => {
    return (
        <div className="content">
            <AddItem />
            <TodoList />
        </div>
    )
}

export default Content;