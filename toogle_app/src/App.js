import './App.css';
import ToggleButton from './ToggleButton'
import InputComponent from './InputComponent';
import RegisterForm from './RegisterForm';
import SimpleCounter from './Counter'

// For custom context
import MealsProvider from './providers/MealsProvider';
import Counter from './components/Counter';
import MealsList from './components/MealsList'

// Showing useReduce function
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money - 50};
  throw new Error();
}

function App() {

  const initalState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initalState);
  
  return (
    <div className="App">
      <ToggleButton />
      <br></br>
      <InputComponent />
      <br></br>
      <RegisterForm />

      <br></br>
      <SimpleCounter 
          initialValue={ Math.floor((Math.random() * 10 ) + 1)}
      />

      <br></br>
      <MealsProvider>
        <MealsList />
        <Counter />
      </MealsProvider>

      <br></br>
      <h2>Example of useReducer</h2>
      <h3>Waller: {state.money}</h3>
      <button onClick={ () => dispatch({type: 'ride'})}>Got a ride</button>
      <button onClick={ () => dispatch({type: 'fuel'})}>Got to fuel</button>
    </div>
  );
}

export default App;
