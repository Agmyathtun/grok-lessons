function Card({ title }) {
    return (
        <div style={{ background: '#161b22', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
            <h3>{title}</h3>
            <p>this is a resuable Card!</p>
        </div>
    )
}

export default Card;