import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import './Todo.css';

const Todo = () => {

    const [inputValue, setInputValue] = useState('');
    // const [todoItems, setTodoItems] = useState([]);   

    const todoListReducer = (state, { type, payload }) => {
        switch (type) {
            case 'ADD': return [...state, payload];
            case 'SET': return [...state, ...payload];
            case 'REMOVE': return state.filter(i => i !== payload);
            default: return state;
        }
    };

    const [ todoItems, dispatch ] = useReducer(todoListReducer, []);

    const plusMinusReducer = (state, {type}) => {
        switch (type) {
            case '+': return state + 1;
            case '-': return state - 1;
            default: return state;
        };
    };

    const [ counter, dispatchCounter] = useReducer(plusMinusReducer, 0);



    useEffect(() => {
        axios.get('https://hks-testing.firebaseio.com/todos.json')
            .then(response => {
                const arr = Object.entries(response.data).reduce((a, b) => a.concat(b[1]), []);
                console.log('todos from server:', arr);
                dispatch({type: 'SET', payload: arr});
            })
            .catch(e => console.log(e));
        return () => console.log('cleanup!');
    }, []);
    
    // useEffect(() => {
    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     return () => document.removeEventListener('mousemove', mouseMoveHandler);
    // });
    
    // const mouseMoveHandler = ({ clientX, clientY }) => console.log(clientX, clientY);

    const inputHandler = ({target: {value}}) => {
        setInputValue(prevState => {
            // console.log('prevState', prevState);
            return value;
        })
    };
        
    const buttonHandler = () => {        
        // setTodoItems([...todoItems, inputValue]);
        dispatch({type: 'ADD', payload: inputValue});            
        setInputValue('');
    };

    const removeItemHandler = (e) => {
        // e.persist();
        console.log(e.target.textContent);
        dispatch({type: 'REMOVE', payload: e.target.textContent});
    }

    const postTodoHandler = () => {
        axios.post('https://hks-testing.firebaseio.com/todos.json', todoItems)
            .then(response => console.log('response', response))
            .catch(error => console.log('error', error));
        console.log('post todo Handler');
    };
    
    return (
        <div className="Todo">
            <input onChange={inputHandler} type="text" placeholder="Enter your task" value={inputValue}/>
            <button onClick={buttonHandler} type="button">Add</button>
            <ul>
                {todoItems.map((i) => <li onClick={removeItemHandler} key={Math.random()}>{i}</li>)}
            </ul>
            <button onClick={postTodoHandler} type="button">Post Todos</button>
            <hr/>
            <h2>Our counter: {counter}</h2>
            <button onClick={() => dispatchCounter({type: '+'})}>+</button>
            <button onClick={() => dispatchCounter({type: '-'})}>-</button>
        </div>
    )
}

export default Todo;
