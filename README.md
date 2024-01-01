<h1 align="left">This is project Lian Fashion on Next.js</h1>

<br>

## The project can be run locally

    1. Clone this repository and server repository
    2. Install dependencies with "npm install"
    3. npm run start dev

<br />

<h2 align="left" id="debabin-stack">Tech stack in the project</h2>

<table width='100%'>
  <tr>
    <td align="center" width="96">
      <a href="#debabin-stack">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" width="48" height="48" alt="JavaScript" />
      </a>
      <br>JavaScript
    </td>    
    <td align="center" width="96">
      <a href="#debabin-stack" >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" width="48" height="48" alt="Git" />
      </a>
      <br>Git
    </td>
    <td align="center" width="96">
      <a href="#amangeldi-stack">
        <img src="https://yt3.ggpht.com/ytc/AKedOLShJwhCsYpSGZc1T6Pas0p4S69vz8ue6wLo00x3=s900-c-k-c0x00ffffff-no-rj" width="48" height="48" alt="NextJS" />
      </a>
      <br>NextJS
    </td>
    <td align="center" width="96">
      <a href="#amangeldi-stack">
        <img src="https://avatars.mds.yandex.net/i?id=1cd42d726745ea8445e2572c26ed33ccfdd69e68-7682919-images-thumbs&n=13" width="48" height="48" alt="Tailwind" />
      </a>
      <br>Tailwind
    </td>
    <td align="center" width="96">
      <a href="#debabin-stack">
        <img src="https://brandeps.com/icon-download/P/Prettier-icon-vector-02.svg" width="48" height="48" alt="Prettier" />
      </a>
      <br>Prettier
    </td>
  </tr> 
</table>

## Code examples

### useScreenHandling.jsx (custom hook)

[app/hooks/useScreenHandling.jsx](https://github.com/Grekalimbus/Linas-Fashion/blob/main/app/hooks/useScreenHandling.jsx)

```js
import React, { useState, useEffect } from "react";
const useScreenHandling = () => {
  const [screen, setscreen] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [wrapperStyle, setWrapperStyle] = useState("w-full");

  const handleScreenChange = (screenWrapper) => {
    const widthMappings = {
      1200: { wrapperStyle: "w-full", screenWidth: 1200 },
      950: { wrapperStyle: "w-[950px]", screenWidth: 950 },
      360: { wrapperStyle: "w-[360px]", screenWidth: 360 },
      // Add more width mappings as needed
    };

    const { wrapperStyle, screenWidth } = widthMappings[screenWrapper] || {};

    if (wrapperStyle && screenWidth) {
      setWrapperStyle(wrapperStyle);
      setScreenWidth(screenWidth);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth);
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    setscreen(window.innerWidth);
    setScreenWidth(window.innerWidth);
    // Add event listener when component mounts
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render
  // Return necessary state variables and methods
  return { screen, screenWidth, wrapperStyle, handleScreenChange };
};

export default useScreenHandling;
```

<br />

## Code examples

### page.js

```js
const page = () => {
  const { screenWidth, wrapperStyle, screen, handleScreenChange } =
    useScreenHandling();

  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      {screen >= 950 ? (
        <Header
          screenWidth={screenWidth}
          handleScreenChange={handleScreenChange}
        />
      ) : (
        <></>
      )}
      <div
        className={`${wrapperStyle} overflow-auto max-h-screen transition-all duration-500`}
      >
        <Navbar screen={screen} screenWidth={screenWidth} />
        <FirstDisplay screen={screen} screenWidth={screenWidth} />
        <SecondDisplay screen={screen} screenWidth={screenWidth} />
        <ThirdDisplay />
      </div>
    </main>
  );
};

export default page;
```

[app/page.js](https://github.com/Grekalimbus/Linas-Fashion/blob/main/app/page.js)
