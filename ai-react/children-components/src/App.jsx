import Greeting from "./components/Greeting";
import Card from "./components/Card";


function App() {
  return (
    <div style={{padding:'50px', background:'#0d1117', minHeight:'100vh'}}>
      <Greeting name="Aung">
        <Card title="My learning Process"/>
        <Card title="Today's Goal" />
        <p>I'm learning react with teacher</p>
      </Greeting>
      <Greeting name="Teacher">
        <Card title="Keep Going" />
        <p>You are doing amazing!</p>
      </Greeting>
    </div>
  )
}

export default App;