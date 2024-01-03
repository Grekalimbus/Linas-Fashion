import { FaDesktop, FaTablet, FaMobile } from "react-icons/fa";
import Link from "next/link";

export const Header = ({ handleScreenChange }) => {
  return (
    <header className="flex justify-between w-full sticky top-0 z-[10] p-6">
      <Link
        href="/https://www.hostinger.com/website-templates"
        className="text-center font-light cursor-pointer rounded-3xl lg:w-1/6 md:w-1/4 text-xs bg-violet-700 px-8 py-2 ml-20"
      >
        All templates
      </Link>

      <div className="flex justify-center space-x-6 m-auto">
        <button
          onClick={() => {
            handleScreenChange(1200);
          }}
        >
          <FaDesktop
            className="cursor-pointer text-gray-300 hover:text-gray-600 transition-all"
            size={32}
          />
        </button>
        <button
          onClick={() => {
            handleScreenChange(950);
          }}
        >
          <FaTablet
            className="cursor-pointer text-gray-300 hover:text-gray-600 transition-all"
            size={32}
          />
        </button>
        <button
          onClick={() => {
            handleScreenChange(420);
          }}
        >
          <FaMobile
            className="cursor-pointer text-gray-300 hover:text-gray-600 transition-all"
            size={32}
          />
        </button>
      </div>

      <Link
        href="https://www.hostinger.com/website-builder"
        className="text-center font-light cursor-pointer rounded-3xl lg:w-1/6 md:w-1/4 text-xs bg-violet-700 px-8 py-2 mr-20"
      >
        Start build
      </Link>
    </header>
  );
};
