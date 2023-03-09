import logo from "./logo.svg";
import "./App.css";
import Child from "./Child";

function App() {
  const skills = ["coding", "leadership", "writing"];
  const greeting = () => {
    alert("hello");
  };
  return (
    <div>
      <Child age={15} list={skills} greeting={greeting}>
        workshop props
      </Child>
    </div>
  );
}

export default App;
