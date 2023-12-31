"use client"
import React, { useState, useEffect } from "react";
import FirstDisplay from "./components/FirstDisplay";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import SecondDisplay from "./components/SecondDisplay";

const page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [styleScreen, setStyleScreen] = useState("w-full");
  
  const handleChangeScreen = (screen) =>{
    console.log("screenWidth", screenWidth);
    if (screenWidth >= 1200 && screen === 1200) {      
      setStyleScreen("w-full");
    }
    if (screenWidth >= 1200 && screen === 920) {
      setStyleScreen('w-[920px]')
    }
     if (screenWidth >= 1200 && screen === 360) {
       setStyleScreen("w-[360px]");
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 1200) {
       setStyleScreen("w-full");
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 920) {
       setStyleScreen("w-full");
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 360) {
       setStyleScreen("w-[360px]");
     }
     if (screenWidth <= 920 && screenWidth >= 360 && screen === 1200) {
       setStyleScreen("w-[360px]");
     }
     if (screenWidth <= 920 && screenWidth >= 360 && screen === 920) {
       setStyleScreen("w-[360px]");
     }
     if (screenWidth <= 920 && screenWidth >= 360 && screen === 360) {
       setStyleScreen("w-[360px]");
     }    
  }

   const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

   useEffect(() => {
     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
      };
   }, [screenWidth]); 

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <Header handleChangeScreen={handleChangeScreen} />
      <div
        className={`${styleScreen} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar />
        <FirstDisplay/>
        <SecondDisplay />
      </div>
    </main>
  );
};

export default page;
