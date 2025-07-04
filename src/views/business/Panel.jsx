import { useState } from "react";
import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import EyeIcon from "../../icons/EyeIcon";
import ChartLine from "../../components/charts/ChartLine";
import CloseIcon from "../../icons/CloseIcon";
import TrashIcon from "../../icons/TrashIcon";
import Stamp from "../../components/Stamp";

function Panel() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <Header />
      <section className="px-2 py-3 flex flex-col pb-20 items-center gap-5 font-Rubik text-white relative">
        <div
          onClick={() => setShowCard(true)}
          className="w-full ring-2 ring-white/30 px-5 py-3 rounded flex justify-between items-center"
        >
          <div>
            <span className="text-xl">Mi Tarjeta</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full text-white/80">
              <EyeIcon sizes={25} />
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 justify-center ring-2 ring-white/30  w-full p-4 rounded">
            <span className="text-sm">Clientes Totales</span>
            <span className="text-3xl grow">50</span>
            <span className="text-frost w-fit px-3 py-1 text-sm rounded-full bg-frost/10 self-end">
              +5%
            </span>
          </div>
          <div className="flex flex-col ring-2 ring-white/30 t w-full p-4 rounded">
            <span className="text-sm">Visitas Acumuladas</span>
            <span className="text-3xl grow">302</span>
            <span className="text-frost w-fit px-3 py-1 text-sm rounded-full bg-frost/10 self-end">
              +8%
            </span>
          </div>
        </div>
        <div className="w-full ring-2 h-48 p-1 ring-white/30 rounded flex flex-col">
          <span className="text-sm  px-3 py-1">Visitas Acumuladas</span>
          <ChartLine />
        </div>

        <div
          className={`fixed inset-0 max-w-2xl w-full md:left-1/2 md:-translate-x-1/2 bg-[#353941]/95 z-30 flex flex-col gap-5 transition ${
            showCard ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setShowCard(false)}
            className={`ring-2 p-2 aspect-square rounded-full text-white/90 size-12 flex items-center justify-center self-end mr-5 mt-5 ${
              showCard ? "scale-100" : "scale-0"
            } transition`}
          >
            <CloseIcon sizes={30} />
          </button>
          <div
            className={`flex flex-col gap-9 items-center  h-full  md:p-5 ${
              showCard ? "translate-y-0" : "translate-y-full"
            } transition p-2`}
          >
            <Stamp
              bgColor={"#ff6467"}
              data={[
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                ["", ""],
                true,
              ]}
              name={"Osorio Frontend"}
              gift={"Free Landing Page"}
            />

            {/* <button
              onClick={() => setShowCard(false)}
              className="flex items-center gap-2 px-8 py-2 text-lg rounded bg-cosmic font-medium"
            >
              <TrashIcon sizes={25}/>
              Eliminar
            </button> */}
          </div>
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default Panel;
