import React, { useRef, useState, useEffect } from 'react';

const Refcomp = () => {
    const myBrandNewRef = useRef();
    const [ state, setState] = useState([]);

    useEffect(() => {
        console.log('Refcomp Render');
    });    

    return (
        <div className="Refcomp">
            <h1>Ref Component</h1>
            <input type="text" ref={myBrandNewRef}/>
            <button onClick={() => setState([...state, myBrandNewRef.current.value])}>Add</button>
            <h2>Here is our state-array: {state.join` `}</h2>            
        </div>
    )
}

export default Refcomp;
