import TicketIcon from "../icons/TicketIcon";
import MenuButton from "./MenuButton";

function Header() {
  return (
    <header className="h-20 relative flex items-center justify-between px-5 w-full text-white">
      <div className="flex items-center gap-2 ">
        <span>
          <TicketIcon sizes={45} />
        </span>
        <h1 className="font-bold text-3xl relative">
          Zellito
          <span className="self-end rounded-full px-4 bg-cosmic text-sm absolute -top-2 -right-1/2">
            beta
          </span>
        </h1>
      </div>
      <MenuButton />
    </header>
  );
}

export default Header;
