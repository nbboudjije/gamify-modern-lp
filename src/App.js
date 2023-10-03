import Footer from "./components/Footer";
import Games from "./components/Games";
import Gameslider from "./components/Gameslider";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Special from "./components/Special";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gameslider />
      <Offers />
      <Games />
      <Special />
      <Footer />
    </div>
  );
}

export default App;
