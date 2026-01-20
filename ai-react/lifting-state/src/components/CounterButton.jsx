function CounterButton({ onIncrement, onDecrement, onReset, isDecrementDisabled, isIncrementDisabled }) {
    return (
        
        <div style={{display:'flex', gap:'20px', justifyContent:'center'}}>
            <button
                onClick={onIncrement}
                disabled={isIncrementDisabled}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    background: isIncrementDisabled ? '#ccc' : '#4a5568',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isIncrementDisabled ? 'not-allowed' : 'pointer',
            }}
            >
                +1
            </button>
            <button
                onClick={onDecrement}
                disabled={isDecrementDisabled}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                    background: isDecrementDisabled ? '#ccc': '#e53e3e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: isDecrementDisabled ? 'not-allowed' : 'pointer',
                    opacity: isDecrementDisabled ? 0.5 : 1
            }}
            >
                -1
            </button>
            <button
                onClick={onReset}
                style={{
                    padding: '10px 20px',
                    fontSize: '18px',
                   
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    
            }}
            >
                Reset
            </button>
        </div>
    )
}

export default CounterButton;