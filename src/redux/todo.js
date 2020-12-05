var uniqid = require('uniqid');

const ADD_TODO = 'todo/ADD_TODO';
const CHANGE_STATE = 'todo/CHANGE_STATE';

const initialState = [
    { id: uniqid(), text: 'init', isChecked: false }
]

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: uniqid(), text: action.payload, isChecked: false }]
        case CHANGE_STATE:
            return state.map(todo => {
                if (todo === action.payload) {
                    return { ...todo, isChecked: !action.payload.isChecked }
                }; 
                return todo;
            });
        default:
            return state;
    }
}

export const addTodo = (text) => {
    return { type: ADD_TODO, payload: text }
}

export const changeState = (todo) => {
    return { type: CHANGE_STATE, payload: todo }
}