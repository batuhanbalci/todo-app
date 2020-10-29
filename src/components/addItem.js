import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {addTodo} from '../redux/todoReducer';

const AddItem = () => {
    const [newItem, setItem] = useState({ text: '' });

    const test = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const addNewTodo = () => {
        dispatch(addTodo(newItem.text));
    }

    return (
        <div className="addTodo p-my-3">
            <div className="p-field p-fluid">
                <label htmlFor="newTodo">Add New TODO</label>
                <InputText
                    className=""
                    value={newItem.text}
                    onChange={(e) => setItem({ text: e.target.value })}
                    placeholder="Add New TODO"
                    aria-describedby="newTodo-help"
                    id="newTodo"
                />
                <small id="newTodo-help">Enter your username to reset your password.</small>
                <Button className="p-mt-3" type="button" label="Add" onClick={() => addNewTodo()}/>
            </div>
           
        </div>
    )
}

export default AddItem;