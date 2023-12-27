import FirstDisplay from "./components/FirstDisplay";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import SecondDisplay from "./components/SecondDisplay";

const page = () => {
  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <Header />
      <div className="w-full overflow-auto max-h-screen">
        <Navbar />
        <FirstDisplay />
        <SecondDisplay />
      </div>
    </main>
  );
};

export default page;
