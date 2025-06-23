import "./App.css";
import Card from "./components/Card";
import Address from "./components/Address";

function App() {
  return (
    <div className="bg-gray-900/50 h-screen text-center py-24">
      <header className="bg-gray-300 py-4 fixed w-full top-0 font-medium tracking-widest">
        {" "}
        Sample Header
      </header>
    <p>this p tag</p> 
    <h1>this h1 tag </h1> 
    <h2>this is h2 tag</h2>
      <Card /> 
      <p>git pull request</p>
      <p>git pull request assigned to nagaraju</p>
    </div>
  );
}

export default App;
