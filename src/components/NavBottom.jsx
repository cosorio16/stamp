import { Link } from "react-router";
import QrIcon from "../icons/QrIcon";
import TicketIcon from "../icons/TicketIcon";
import UserIcon from "../icons/UserIcon";

function NavBottom() {
  return (
    <div className="fixed bottom-0 left-0 h-16 bg-carbon text-white w-full">
      <nav className="flex items-center justify-around gap-5 h-full">
        <Link to={"/client"}>
          <QrIcon sizes={30} />
        </Link>
        <Link to={"/stamps"}>
          <TicketIcon sizes={30} />
        </Link>
        <Link to={"/profile"}>
          <div className="relative w-full">
            <UserIcon sizes={30} />
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5"></span>
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5 animate-ping"></span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBottom;
