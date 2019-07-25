import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Todo.css';

const Todo = () => {

    const [inputValue, setInputValue] = useState('');
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        axios.get('https://hks-testing.firebaseio.com/todos.json')
            .then(response => console.log(response))
            .catch(e => console.log(e));
        return () => console.log('cleanup!');
    }, [inputValue]);

    
    // useEffect(() => {
    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     return () => document.removeEventListener('mousemove', mouseMoveHandler);
    // });
    
    // const mouseMoveHandler = ({ clientX, clientY }) => console.log(clientX, clientY);

    const inputHandler = ({target: {value}}) => setInputValue(prevState => {
        console.log('prevState', prevState);
        return value;
    });

    const buttonHandler = () => {        
        setTodoItems([...todoItems, inputValue]);
        setInputValue('');
    };

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
                {todoItems.map((i) => <li key={Math.random()}>{i}</li>)}
            </ul>
            <button onClick={postTodoHandler} type="button">Post Todos</button>
        </div>
    )
}

export default Todo;
