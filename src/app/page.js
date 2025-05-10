import Navbar from "./components/Navbar";
import Branding from "./components/Branding";
import Intro from "./components/Intro";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Developer from "./components/Developer";


export default function Home() {

  return (
    <>
    <Navbar/>
    <Branding/>
    <Intro/>
    <Product/>
    <Developer/>
    <Footer/>
    </>
  );
}