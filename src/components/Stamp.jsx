import { useState } from "react";
import LocationIcon from "../icons/LocationIcon";
import GiftIcon from "../icons/GiftIcon";
import CalendarIcon from "../icons/CalendarIcon";
import neumorphism from "../utils/neumorphism";

function Stamp({ name, date, gift, color, bgColor, icon, dates, checks }) {
  const [flip, setFlip] = useState(false);

  const colors = neumorphism.generateNeumorphismColors(`#${bgColor}`);

  return (
    <div
      className={`w-full max-w-md relative min-h-48 font-Rubik ${
        flip ? "rotate-x-180" : "rotate-x-0"
      } transition-all duration-300 perspective-distant transform-3d`}
    >
      <div
        onClick={() => setFlip(!flip)}
        style={{
          background: bgColor,
        }}
        className="absolute w-full h-full p-1 flex flex-col justify-between  rotate-x-180 rounded"
      >
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -top-3"></span>
        <span className="size-6 bg-[#353941] rounded-full absolute left-1/2 -translate-x-1/2 -bottom-3"></span>
        <div className="h-full grid grid-cols-5 justify-items-center items-center">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(145deg, ${colors.thirdGradientColor}, ${colors.secondGradientColor})`,
                boxShadow: `1.5px 1.5px 0px ${colors.darkColor}, -1.5px -1.5px 0px ${colors.lightColor}`,
              }}
              className={`size-16 aspect-square rounded-full flex  flex-col items-center justify-center text-white`}
            >
              {i == 9 ? (
                <span>
                  <GiftIcon sizes={40} />
                </span>
              ) : (
                <>
                  <span></span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={() => setFlip(!flip)}
        style={{
          background: bgColor,
        }}
        className="absolute w-full h-full flex flex-col justify-between  backface-hidden rounded"
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

        <div
          style={{
            background: bgColor,
            borderColor: colors.darkColor,
          }}
          className="border-t-2 border-dashed p-3"
        >
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
