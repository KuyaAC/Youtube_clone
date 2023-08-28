import Header from "./Header";
import Leftnav from "./LeftNav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Leftnav />
      </div>
      <div className="rightside">
        <Header />
      </div>
    </div>
  );
}

export default App;
