import './App.css';
import Panel from './components/Panel'
import Wordle from './components/Wordle'
function App() {
  return (
    <div className="app">
      <Panel name="Lava" place="India" age="31" />
      <Wordle />
    </div>
  );
}

export default App;
