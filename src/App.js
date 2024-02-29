import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skillset from "./Skillset/Skillset";
import "./all.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skillset />
      <Projects />
      <Footer  />
    </div>
  );
}

export default App;
