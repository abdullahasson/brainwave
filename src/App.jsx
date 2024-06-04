import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboratio from "./components/Collaboration"

const App = () => {
  return (
    <>
      <div className="pt-[4.25rem] lg:pt-[5rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboratio />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
