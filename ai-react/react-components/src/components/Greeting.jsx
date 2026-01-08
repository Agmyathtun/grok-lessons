function Greeting(props) {
    
    return (
        <div>
            
            <h4>Hello {props.name} </h4>
            <h4>Welcome to react components</h4>
            <h4>I'm Aung who studying web developing at the age of {props.age}</h4>
            <h3>My hobby is {props.hobby}</h3>
        </div>
    )
}
export default Greeting;

// ANOTHER WAY TO USE SPECIFIC PROPS
// function Greeting({ name, age }) {
//     return (
//         <div>
//             <p>Hello my name is{name}</p>
//             <p>I'm {age} years old</p>
//         </div>
//     )
// }