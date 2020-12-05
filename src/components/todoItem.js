import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { changeState } from '../redux/todo';

const TodoItem = () => {
    const todoState = useSelector(state => state.todo);
    const dispatch = useDispatch();

    if (todoState.todos) {
        todoState.todos.map(
            (todo, i) => {
                return (
                    <div className="todoBox card p-shadow-3 p-py-1 p-px-3 p-mt-3" key={i}>
                        <p>{todo.id + todo.text + todo.isChecked}</p>
                        <div className="buttonGroup p-mt-2">
                            <Button
                                icon="pi pi-trash"
                                className="p-button-rounded p-button-outlined p-button-danger p-mr-2"
                            />
                            <Button
                                icon="pi pi-check"
                                className="p-button-rounded p-button-outlined p-button-success"
                                onClick={() => dispatch(changeState(todo))}
                            />
                        </div>
                    </div>
                )
            }
        )
    }
    else {
        return (<div>yok</div>)
    }
}

export default TodoItem;