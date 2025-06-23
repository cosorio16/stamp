import { useState } from "react";
// import Menu from "./Menu";

function MenuButton() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={`flex-col gap-1.5 p-3 rounded-full aspect-square flex items-center justify-center relative  transition duration-300 z-30`}
      >
        <div
          className={`w-9 h-1 bg-white rounded-full ${
            active ? "opacity-0" : "opacity-100"
          } transition duration-300`}
        ></div>
        <div
          className={`w-9 h-1 bg-white rounded-full ${
            active ? "rotate-45 absolute" : ""
          } transition duration-300`}
        ></div>
        <div
          className={`w-9 h-1 bg-white rounded-full ${
            active ? "-rotate-45 absolute" : ""
          } transition duration-300`}
        ></div>
      </div>

      {/* <Menu
        status={active}
        onClose={() => setActive(false)}
        activeSection={activeSection}
      /> */}
    </>
  );
}

export default MenuButton;
