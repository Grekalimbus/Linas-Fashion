"use client";
import FirstDisplay from "./components/FirstDisplay";
import SecondDisplay from "./components/SecondDisplay";
import ThirdDisplay from "./components/ThirdDisplay";
import {Navbar} from "./common/Navbar";
import useScreenHandling from "./hooks/useScreenHandling";
import FourthDisplay from "./components/FourthDisplay";
import FifthDisplay from "./components/FifthDisplay";
import SixthDisplay from "./components/SIxthDisplay";
import Footer from "./common/Footer";

const page = () => {
  const {screen} = useScreenHandling();

  if (screen === 0) {
    return <div></div>;
  }

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`w-full overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar />
        <FirstDisplay />
        <SecondDisplay />
        <ThirdDisplay />
        <FourthDisplay />
        <FifthDisplay />
        <SixthDisplay />
        <Footer />
      </div>
    </main>
  );
};

export default page;
