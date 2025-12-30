import {useState} from 'react';

function App(){
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      background:'#0e0536ff',
      height: '100vh',
    }}>
      <h1>Simple Counter</h1>
      <h2>{count}</h2>
      <p style={{ fontSize:'60px', margin:'20px 0'}}>Count: {count}</p>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center'
      }}>

        <button
          onClick={()=>setCount(count - 1)}
          disabled={count===0}
          style={{
            padding: '10px 30px',
            fontSize: '20px',
            cursor: count===0 ? 'not-allowed' : 'pointer',
            opacity: count === 0 ? 0.5 : 1
          }}
        >
          -1
        </button>

        <button
          onClick={()=>setCount(0)}
          style={{
            padding:'10px 30px',
            fontSize: '20px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius:'5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
        <button
          onClick={()=>setCount(count+1)}
          style={{
            padding: '10px 30px',
            fontSize: '20px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius:'5px',
            cursor: 'pointer'
          }}
        >
          +1
        </button>
      </div>
    </div>
  )
}

export default App;