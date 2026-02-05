import {useState} from 'react'

const InputComp = (props) => {
    const [inputText, setInputText] = useState('Hello');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    } 

    return (
        <div className='inputText'>
            <input value={inputText} onChange={handleInputChange} />
            <p>You typed {inputText}</p>
            <button onClick={ () => setInputText('Hello') }>
                Reset
            </button>
        </div>
    )
}

export default InputComp;