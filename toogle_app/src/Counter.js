import {useState} from 'react';


const Counter = (props) => {

    const [count, setCount] = useState(props.initialValue);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>Counter section</h1>
            <h2>Current count is: {count} </h2>
            <button onClick={handleIncrement}>Increase count</button>
            <button onClick={handleDecrement}>Decrese count</button>

            <button onClick={ () => setCount(props.initialValue) }>Reset</button> 
        </div>
    )
}

export default Counter;