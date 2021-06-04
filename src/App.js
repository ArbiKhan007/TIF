import "./App.css";
import Navbar from "./Components/Navbar";
import StateContext from "./StateContext";
import HeroContent from "./Components/HeroContent";
import LinkForm from "./Components/LinkForm";
import MidContent from "./Components/MidContent";
import BeforeFooter from "./Components/BeforeFooter";
import Footer from "./Components/Footer";

function App() {
  return (
    <StateContext.Provider>
      <Navbar />
      <HeroContent />
      <LinkForm />
      <MidContent />
      <BeforeFooter />
      <Footer />
    </StateContext.Provider>
  );
}

export default App;
