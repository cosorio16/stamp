import { Link } from "react-router";

function Header() {
  return (
    <header className="h-20 relative flex items-center justify-between px-3 w-full text-white font-Rubik border-b border-white/10">
      <div className="flex items-center gap-2 ">
        <Link to={"/"} className="font-bold text-3xl relative">
          Zellito
          <span className="self-end rounded-full px-4 font-IBM bg-frost text-xs absolute -top-2 -right-1/2">
            beta
          </span>
        </Link>
      </div>
      <span className="font-IBM text-white/50 text-sm">V 1.0.0</span>
    </header>
  );
}

export default Header;
