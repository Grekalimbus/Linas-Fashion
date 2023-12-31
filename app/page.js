"use client"
import React, { useState, useEffect } from "react";
import FirstDisplay from "./components/FirstDisplay";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import SecondDisplay from "./components/SecondDisplay";

const page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [valueDisplay, setValueDisplay] = useState(window.innerWidth);
  const [styleScreen, setStyleScreen] = useState("w-full");
  
  const handleChangeScreen = (screen) =>{
    console.log("screenWidth", screenWidth);
    if (screenWidth >= 1200 && screen === 1200) {      
      setStyleScreen("w-full");
      setValueDisplay(screen)
    }
    if (screenWidth >= 1200 && screen === 950) {
      setStyleScreen('w-[950px]')
      setValueDisplay(screen)
    }
     if (screenWidth >= 1200 && screen === 360) {
       setStyleScreen("w-[360px]");
       setValueDisplay(screen)
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 1200) {
       setStyleScreen("w-full");
       setValueDisplay(screen)
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 950) {
       setStyleScreen("w-full");
       setValueDisplay(screen)
     }
     if (screenWidth <= 1200 && screenWidth >= 360 && screen === 360) {
       setStyleScreen("w-[360px]");
       setValueDisplay(screen)
     }
     if (screenWidth <= 950 && screenWidth >= 360 && screen === 1200) {
       setStyleScreen("w-[360px]");
       setValueDisplay(screen)
     }
     if (screenWidth <= 950 && screenWidth >= 360 && screen === 950) {
       setStyleScreen("w-[360px]");
       setValueDisplay(screen)
     }
     if (screenWidth <= 950 && screenWidth >= 360 && screen === 360) {
       setStyleScreen("w-[360px]");
       setValueDisplay(screen)
     }    
  }

   const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  const getValueToDisplay = () =>{
    console.log("styleScreen", styleScreen);
    console.log("screenWidth", screenWidth);
    if(styleScreen === 'w-[360px]'){
      return 360
    }
    if (screenWidth > 360 && screenWidth <= 950 && styleScreen === "w-full") {
      return 950;
    }
    if (screenWidth > 950 && styleScreen === "w-full") {
      return 1200;
    }
  }

   useEffect(() => {
     window.addEventListener("resize", handleResize);
     setValueDisplay(getValueToDisplay());
     console.log("valueDisplay", valueDisplay);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, [screenWidth, valueDisplay, styleScreen]); 

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <Header handleChangeScreen={handleChangeScreen} />
      <div
        className={`${styleScreen} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar />
        <FirstDisplay valueDisplay={valueDisplay} />
        <SecondDisplay screenWidth={screenWidth} />
      </div>
    </main>
  );
};

export default page;
