import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton'
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <div className="App">
      <ToggleButton />
      <br></br>
      <InputComponent />
      <br></br>
      <RegisterForm />
    </div>
  );
}

export default App;
