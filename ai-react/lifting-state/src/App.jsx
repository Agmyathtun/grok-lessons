import { useState } from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Lifting State Up</h1>
      <CounterDisplay count={count} />
      <CounterButton
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  )
}

export default App;