import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="background-1"></div>
        </div>
      </div>
      <div className="container mx-auto px-8"> 
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
