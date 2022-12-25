import "./App.css";
import Banner from "./components/Banner";
import Navigation from "./components/Navigation";
import Tech from "./components/Tech";
import ThreeBanner from "./components/ThreeBanner";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Tech />
      {/* <ThreeBanner /> */}
      <Projects />
    </div>
  );
}

export default App;
