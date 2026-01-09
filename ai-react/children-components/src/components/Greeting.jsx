function Greeting({name, children}) {
    return (
        <div style={{border:'2px solid #4a5568', padding:'20px', borderRadius:'8px', margin:'20px'}}>
            <h3>Hello, {name}</h3>
            {children}
        </div>
    )
}

export default Greeting;