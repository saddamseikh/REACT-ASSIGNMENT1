import "./App.css";
import Button from "./Button";
import Person from "./Person";

function App() {
  return (
    <>
      <div className="App" style={{ fontSize: "32px" }}>
        <Person name="Saddam sk" age="23" />
        <Person name="Abdul Rahaman " age="22" />
      </div>
      <Button text="Click me!" onClick={() => console.log("Clicked me ")} />
    </>
  );
}

export default App;
