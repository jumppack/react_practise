import {useState} from 'react';

const ToggleButton = (props) => {

    const [darkMode, setDarkMode] = useState(false);
    const lightModeH = <h2>Light mode is on</h2>
    const darkModeH = <h2>Dark mode is on</h2>
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    
    return (
        <>
            {darkMode ? darkModeH : lightModeH}
            <button onClick={toggleDarkMode}>Toggle Theme</button>
        </>
    )
}

export default ToggleButton;