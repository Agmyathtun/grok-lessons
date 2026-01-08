import Greeting from "./components/Greeting";

function App() {
  return (
    <div>

    <Greeting name="Htun" age={26} />
      <Greeting name="Myat" age={23} />
    <Greeting name="Yazar" age={21} />
    <Greeting name="Aung"/>
    <Greeting />
    <Greeting hobby="coding" />
    </div>
  )
}

export default App;