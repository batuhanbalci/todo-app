import { useState } from 'react';
import { useSelector } from 'react-redux';


const TodoList = () => {
    const [newItem, setItem] = useState({ text: '' });

    const todoState = useSelector(state => state.todo);

    return (
        <div className="todoList p-my-3">
            {
                todoState.todos.map(
                    todo => {
                        return (
                            <div className="todoBox card p-shadow-3 p-py-3">
                                <p>{todo}</p>
                            </div>
                        )
                    }
                )
            }

        </div>
    )
}

export default TodoList;