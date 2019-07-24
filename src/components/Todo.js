import React, {useState} from 'react';
import './Todo.css';

const Todo = () => {

    const [inputValue, setInputValue] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    
    const inputHandler = ({target: {value}}) => {
        // console.log(value);
        setInputValue(value);
    }

    const buttonHandler = (event) => {
        // console.log('button', event);
        setTodoItems([...todoItems, inputValue]);
        setInputValue('');
    }
    
    return (
        <div className="Todo">
            <input onChange={inputHandler} type="text" placeholder="Enter your task" value={inputValue}/>
            <button onClick={buttonHandler} type="button">Add</button>
            <ul>
                {todoItems.map((i) => <li key={Math.random()}>{i}</li>)}
            </ul>
        </div>
    )
}

export default Todo;
