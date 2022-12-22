import "./App.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Tech from "./components/Tech";
import ThreeBanner from "./components/ThreeBanner";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Tech />
      {/* <ThreeBanner /> */}
    </div>
  );
}

export default App;
