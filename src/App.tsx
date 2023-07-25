import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tools from "./components/Tools";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Tools />
      <ContactUs />
      {/* Scroll To Top Button */}
      <button
        className="bg-cyan-300 hover:bg-cyan-500 w-16 p-5 rounded-full shadow-lg absolute right-6 cursor-pointer"
        onClick={toTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <Footer />
    </>
  );
}
