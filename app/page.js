"use client";
import FirstDisplay from "./components/firstDisplay/page";
import SecondDisplay from "./components/secondDisplay/page";
import ThirdDisplay from "./components/thirdDisplay/page";
import Navbar from "./components/navbar/page";
import useScreenHandling from "./hooks/useScreenHandling";
import FourthDisplay from "./components/fourthDisplay/page";
import FifthDisplay from "./components/firthDisplay/page";
import SixthDisplay from "./components/SIxthDisplay";
import Footer from "./components/Footer";


const page = () => {
  const { wrapperStyle, screen} =  useScreenHandling();
  if ( screen === 0){
    return <div></div>
  }

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} />
        <FirstDisplay screen={screen} />
        <SecondDisplay screen={screen} />
        <ThirdDisplay screen={screen} />
        <FourthDisplay screen={screen} />
        <FifthDisplay screen={screen} />
        <SixthDisplay screen={screen} />
        <Footer screen={screen} />
      </div>
    </main>
  );  
};

export default page;
