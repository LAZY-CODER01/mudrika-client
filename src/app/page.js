import Image from "next/image";
import Navbar from "./components/Nav";
import Footer from "./components/Foot";
import Home from "./home/page";
export default function Index() {
  return (
    <>
    <Navbar/>
       <Home/>
   <Footer/>
    </>
  );
}
