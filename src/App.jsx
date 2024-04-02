import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.25rem] lg:pt-[5rem] overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
