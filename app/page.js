"use client"
import FirstDisplay from "./components/FirstDisplay";
import SecondDisplay from "./components/SecondDisplay";
import ThirdDisplay from "./components/ThirdDisplay";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import useScreenHandling from "./hooks/useScreenHandling";


const page = () => {  
  const result = useScreenHandling()
  
  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      {result.screen >= 950 ? (
        <Header
          screenWidth={result.screenWidth}
          handleScreenChange={result.handleScreenChange}
        />
      ) : (
        <></>
      )}
      <div
        className={`${result.wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={result.screen} screenWidth={result.screenWidth} />
        <FirstDisplay screen={result.screen} screenWidth={result.screenWidth} />
        <SecondDisplay screen={result.screen} screenWidth={result.screenWidth} />
        <ThirdDisplay />
      </div>
    </main>
  );
};

export default page;
