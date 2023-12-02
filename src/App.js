import "./App.css";
import Button from "./Button";
import Header from "./Header";
import List from "./List";
import Person from "./Person";

function App() {
  return (
    <>
      <div className="App" style={{ fontSize: "32px" }}>
        <Person name="Saddam sk" age="23" />
        <Person name="Abdul Rahaman " age="22" />
      </div>
      {/* Butoon */}
      <Button text="Click me!" onClick={() => console.log("Clicked me ")} />
      {/* Header title */}
      <Header title="This is a header title " />
      {/* List */}
      <List items={["apple", "banana", "orange"]} />
    </>
  );
}

export default App;
