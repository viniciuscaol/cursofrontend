import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const handleClickIncrement = () => {
    setCount(count+1);
  };
  const handleClickDecrement = () => {
    setCount(count-1);
  };
  return (
  <div className="container">
    CounterAPP
    <div id="counter" className="counter_text">{count}</div>
    <div className="buttons">
      <button onClick={handleClickIncrement} id="increment" className='increment'>Incrementar</button>
      <button onClick={handleClickDecrement} id="decrement" className='decrement'>Decrementar</button>
    </div>
  </div>
  );
}

export default App;
