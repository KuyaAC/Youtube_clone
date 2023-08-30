import Header from "./Header";
import Leftnav from "./LeftNav";
import Category from "./Category";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="leftside">
        <Leftnav />
      </div>
      <div className="rightside">
        <Header />
        <Category />
      </div>
    </div>
  );
}

export default App;
