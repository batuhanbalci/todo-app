import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { addTodo } from '../redux/todoReducer';

const AddItem = () => {
    let inputRef = React.createRef();

    const [newTodo, setItem] = useState({ text: '', isValid: true });

    const dispatch = useDispatch();

    const addNewTodo = () => {
        if (newTodo.text.trim() === '') {
            setItem({ ...newTodo, isValid: false });
        }
        else {
            dispatch(addTodo(newTodo.text));
            setItem({ text: '', isValid: true });
        }
    }

    useEffect(() => {
        inputRef.element.focus();
    });

    return (
        <div className="addTodo p-my-3">
            <div className={newTodo.isValid ? 'p-field p-fluid' : 'p-field p-fluid p-invalid'}>
                <label htmlFor="newTodo">Add New TODO</label>
                <InputText
                    className={newTodo.isValid ? '' : 'p-invalid'}
                    value={newTodo.text}
                    onChange={(e) => setItem({ ...newTodo, text: e.target.value})}
                    placeholder="Add New TODO"
                    aria-describedby="newTodo-help"
                    id="newTodo"
                    ref={e => inputRef = e}
                />
                <small id="newTodo-help">Type your TODO</small>
                <Button className="p-mt-3" type="button" label="Add" onClick={() => addNewTodo()} />
            </div>
        </div>
    )
}

export default AddItem;