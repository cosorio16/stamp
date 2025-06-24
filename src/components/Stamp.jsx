import { useState } from "react";
import LocationIcon from "../icons/LocationIcon";
import GiftIcon from "../icons/GiftIcon";
import CalendarIcon from "../icons/CalendarIcon";

function Stamp({ name, date, gift, color, bgColor, icon, dates, checks }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`w-full max-w-96 relative h-48 font-Rubik ${
        flip ? "rotate-x-180" : "rotate-x-0"
      } transition-all duration-300 perspective-distant transform-3d`}
    >
      <div
        onClick={() => setFlip(!flip)}
        className="absolute w-full h-full p-1 flex flex-col justify-between bg-orange-500 rotate-x-180 rounded"
      >
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -top-3"></span>
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
        <div className="h-full grid grid-cols-5 justify-items-center items-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`size-16 aspect-square rounded-full flex bg-orange-200 flex-col items-center justify-center ${
                i % 2 ? "stampy" : "stamped"
              } ${i == 9 && "stampy"} `}
            >
              {i == 9 ? (
                <span>
                  <GiftIcon sizes={40} />
                </span>
              ) : (
                <>
                  <span>{i + 1}</span>
                  <span>SEPT</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => setFlip(!flip)}
        className="absolute w-full h-full  flex flex-col justify-between bg-orange-500 backface-hidden rounded"
      >
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -top-3"></span>
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
        <div className="flex items-start justify-between grow py-6 px-3">
          <h1 className="text-xl font-semibold text-white flex items-center">
            <span>
              <LocationIcon sizes={30} />
            </span>
            Food Nation
          </h1>

          <div className="text-white flex items-center gap-1">
            <span>
              <CalendarIcon sizes={25} />
            </span>
            <span className="text-xl text-white font-bold">16/09</span>
          </div>
        </div>

        <div className="border-t-2 border-dashed border-carbon/30 p-3 bg-orange-600">
          <h1 className="text-white flex items-center gap-1">
            <span>
              <GiftIcon sizes={25} />
            </span>
            FREE CHEESE BURGER
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Stamp;
