import { NavLink } from "react-router";
import ScanIcon from "../icons/ScanIcon";
import SettingIcon from "../icons/SettingIcon";
import ClientsIcon from "../icons/ClientsIcon";
import DashboardIcon from "../icons/DashboardIcon";

function NavBottom() {
  return (
    <div className="fixed bottom-0 max-w-xl md:left-1/2 md:-translate-x-1/2 left-0 h-16 bg-night text-white w-full">
      <nav className="flex items-center justify-around gap-5 h-full">
        <NavLink
          className={({ isActive }) =>
            `border border-transparent rounded-full p-2 ${
              isActive && "bg-cosmic text-white"
            }`
          }
          to={"/scan"}
        >
          <ScanIcon sizes={30} />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border border-transparent rounded-full p-2 ${
              isActive && "bg-cosmic text-white"
            }`
          }
          to={"/panel"}
        >
          <DashboardIcon sizes={30} />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border border-transparent rounded-full p-2 ${
              isActive && "bg-cosmic text-white"
            }`
          }
          to={"/users"}
        >
          <ClientsIcon sizes={30} />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `border border-transparent rounded-full p-2 ${
              isActive && "bg-cosmic text-white"
            }`
          }
          to={"/business"}
        >
          <div className="relative w-full">
            <SettingIcon sizes={30} />
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5"></span>
            <span className="w-3 aspect-square rounded-full bg-red-500 absolute -top-0.5 right-0.5 animate-ping"></span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBottom;
