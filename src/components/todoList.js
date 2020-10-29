import { useState } from 'react';
import { useSelector } from 'react-redux';


const TodoList = () => {
    const [newItem, setItem] = useState({ text: '' });

    const todoState = useSelector(state => state.todo);

    return (
        <div className="todoList p-my-2">
            {
                todoState.todos.map(
                    (todo, i) => {
                        return (
                            <div className="todoBox card p-shadow-3 p-py-2 p-px-2 p-mt-3" key={i}>
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