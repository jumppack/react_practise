import {useState, useEffect, useCallback, useReducer} from 'react'
import './panel.css'

export default function Panel (props) {
    const [details, setDetails] = useState({
        name: "Karan",
        place: "USA",
        age: 35
    });


    // For reducer
    const initalState = {
        age: 35,
        message: "Welcome"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return {...state, age: state.age+1}
            case "decrement":
                return {...state, age: state.age-1}
            default:
                throw new Error("Unkonw action")
        }
    }

    const [state, dispatch] = useReducer(reducer, initalState);


    useEffect( () => {
        console.log(
            "From inside use effect callback"
        )
    }, [details]);


    const handleClick = useCallback( (event) => {
        setDetails( {
            name: props.name,
            place: props.place
        })
    }, [props])


    return (
        <div className="panel">
            <header>Welcome {state.message} - {details.name}</header>
            <p>Name: {details.name}</p>
            <p>Place: {details.place}</p>
            <p>Age: {state.age}</p>
            <button onClick={handleClick}>Click Me!😉</button>
            <button className="incButton" onClick={() => dispatch({type: "increment"})}>⬆️ age</button>
            <button className="decButton" onClick={() => dispatch({type: "decrement"})}>⬇️ age</button>
        </div>
    )
}