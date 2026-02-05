import {useState} from 'react';


const Counter = (props) {

    const [count, setCount] = useState(props.initialValue);

    const handleIncrement = () => {
        setCount(++count);
    }

    const handleDecrement = () => {
        setCount(--count)
    }
}