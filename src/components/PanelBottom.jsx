import { Link } from "react-router";
import ScanIcon from "../icons/ScanIcon";
import TicketIcon from "../icons/TicketIcon";
import SettingIcon from "../icons/SettingIcon";
import ClientsIcon from "../icons/ClientsIcon";

function NavBottom() {
  return (
    <div className="fixed bottom-0 left-0 h-16 bg-carbon text-white w-full">
      <nav className="flex items-center justify-around gap-5 h-full">
        <Link to={"/scan"}>
          <ScanIcon sizes={30} />
        </Link>
        <Link to={"/panel"}>
          <TicketIcon sizes={30} />
        </Link>
        <Link to={"/users"}>
          <ClientsIcon sizes={30} />
        </Link>
        <Link to={"/business"}>
          <div className="relative w-full">
            <SettingIcon sizes={30} />
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5"></span>
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5 animate-ping"></span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default NavBottom;
