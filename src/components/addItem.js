import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { useSelector } from 'react-redux';

const AddItem = () => {
    const [newItem, setItem] = useState({text: ''});

    const test = useSelector(state => state.todo);
    console.log(test)
    return (
        <div className="p-field">
            <label htmlFor="newTodo" className="p-d-block">Username</label>
            <InputText
                className=""
                value={newItem.text}
                onChange={(e) => setItem({ newItem: e.target.value })}
                placeholder="Add New TODO"
                aria-describedby="newTodo-help"
                id="newTodo"
            />
            <small id="newTodo-help" className="p-d-block">Enter your username to reset your password.</small>


        </div>
    )
}

export default AddItem;