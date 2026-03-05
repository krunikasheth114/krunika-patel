import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import InstallScreen from "./components/InstallScreen";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <InstallScreen />
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
