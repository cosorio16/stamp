import { Link } from "react-router";
import MenuButton from "./MenuButton";

function Header() {
  return (
    <header className="h-20 relative flex items-center justify-between px-5 w-full text-white font-Rubik border-b border-white/10">
      <div className="flex items-center gap-2 ">
        <Link to={"/"} className="font-bold text-3xl relative">
          Zellito
          <span className="self-end rounded-full px-4 bg-cosmic text-sm absolute -top-2 -right-1/2">
            beta
          </span>
        </Link>
      </div>
      <MenuButton />
    </header>
  );
}

export default Header;
