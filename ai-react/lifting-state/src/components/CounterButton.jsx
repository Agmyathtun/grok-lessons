function CounterButton({ onIncrement, onDecrement, onReset }) {
    return (
        
        <div style={{display:'flex', gap:'20px', justifyContent:'center'}}>
            <button
                onClick={onIncrement}
                style={{
                padding: '10px 20px',
                fontSize: '18px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius:'5px'
            }}
            >
                +1
            </button>
            <button
                onClick={onDecrement}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    background: '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px'
            }}
            >
                -1
            </button>
            <button
                onClick={onReset}
                style={{
                padding: '10px 20px',
                fontSize: '18px',
                background: '#4a5568',
                color: 'white',
                border: 'none',
                borderRadius:'5px'
            }}
            >
                Reset
            </button>
        </div>
    )
}

export default CounterButton;