
import FirstDisplay from "./components/FirstDisplay";
import MainPage from "./components/MainPage";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";



const page = () => {
  return (
    <main className="flex overflow-hidden max-h-screen flex-col w-full items-center">
      <Header />
      <div className="w-full overflow-auto max-h-screen">
        <Navbar />
        <FirstDisplay />
      </div>
    </main>
  );
}



export default page;

