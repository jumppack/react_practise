import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton'
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <ToggleButton />
      <br></br>
      <InputComponent />
      <br></br>
      <RegisterForm />

      <br></br>
      <Counter 
          initialValue={ Math.floor((Math.random() * 10 ) + 1)}
      />
    </div>
  );
}

export default App;
