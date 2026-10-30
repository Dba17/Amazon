import Header from "./Components/Header/Header";
import LowerHeader from "./Components/Header/LowerHeader";
import Carousel from "./Components/Carousel/Carousel";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <LowerHeader />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;