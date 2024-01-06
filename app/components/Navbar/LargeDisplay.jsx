import Link from "next/link";

const LargeDisplay = ({ getBorderForLonk }) => {
  return (
    <nav className="shadow bg-[#04111b] w-full sticky top-0 z-[10]">
      <div className="mx-auto flex max-w-6xl  flex-wrap items-center justify-between pt-7 pb-7 bg-[#04111b]">
        <div className="cursor-pointer text-2xl font-medium">
          <p className="">Linas Thoemke</p>
        </div>
        <div className="w-80">
          <ul className="flex justify-around cursor-pointer">
            <li className={`cursor-pointer  ${getBorderForLonk("/")}`}>
              <Link href="/">Work </Link>
            </li>
            <li className={`cursor-pointer  ${getBorderForLonk("/about")}`}>
              <Link href="/about">About </Link>
            </li>
            <li className={`cursor-pointer  ${getBorderForLonk("/clients")}`}>
              <Link href="/clients">Clients </Link>
            </li>
            <li className={`cursor-pointer  ${getBorderForLonk("/contacts")}`}>
              <Link href="/contacts">Contacts </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LargeDisplay;
