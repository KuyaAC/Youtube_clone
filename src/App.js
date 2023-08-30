import Header from "./Header";
import Leftnav from "./LeftNav";
import Category from "./Category";
import Videos from "./Videos";
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
        <Videos />
      </div>
    </div>
  );
}

export default App;
