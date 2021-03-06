import "./App.css";
import Navbar from "./Components/Navbar";
import HeroContent from "./Components/HeroContent";
import LinkForm from "./Components/LinkForm";
import MidContent from "./Components/MidContent";
import BeforeFooter from "./Components/BeforeFooter";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroContent />
      <LinkForm />
      <MidContent />
      <BeforeFooter />
      <Footer />
    </>
  );
}

export default App;
