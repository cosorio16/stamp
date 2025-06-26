import { use, useState } from "react";
import Header from "../../components/Header";
import TicketIcon from "../../icons/TicketIcon";
import { Link } from "react-router";

function Register() {
  const [businessName, setBusinessName] = useState("");
  const [kindOfWork, setKindOfWork] = useState("");
  const [direction, setDirection] = useState("");
  const [steps, setSteps] = useState(2);
  const [color, setColor] = useState("");
  const [colorSelected, setColorSelected] = useState(0);

  const colors = [
    "#ff6900",
    "#ff6467",
    "#7ccf00",
    "#00a6f4",
    "#7c86ff",
    "#00bba7",
    "#fcc800",
    "#ff2056",
  ];

  return (
    <>
      <Header />
      <section className="px-3 flex flex-col gap-5 font-Rubik py-5">
        <h1 className="text-white text-2xl flex items-center gap-1">
          <span>
            <TicketIcon sizes={30} />
          </span>
          Configure su Estampa
        </h1>

        <form action="" className="flex flex-col w-full gap-2.5">
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition capitalize"
            type="text"
            placeholder="Nombre del Negocio"
          />

          <select
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            name=""
            id=""
          >
            <option value="">Rubro</option>
          </select>

          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="text"
            placeholder="Direccion"
          />
          <div className="flex border flex-col py-2 px-5  border-white/30 rounded transition text-white/80 ring ring-transparent focus-within:ring-frost">
            <span>Cantidad de pasos: {steps}</span>
            <input
              className=" focus:outline-none text-white placeholder:text-white/80"
              type="range"
              name=""
              id=""
              placeholder="Pasos"
              min={2}
              max={10}
              onChange={(e) => setSteps(Number(e.target.value))}
              step={1}
              value={steps}
            />
            <div></div>
          </div>
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="text"
            placeholder="Recompensa"
          />

          <div className="flex border flex-col py-2 px-5 gap-1 border-white/30 rounded transition text-white/80 ring ring-transparent focus-within:ring-frost">
            <span>Seleccione un Color</span>
            <div className="grid grid-cols-4 gap-6 justify-items-center items-center">
              {colors.map((c, i) => (
                <span
                  key={i}
                  onClick={() => setColorSelected(i)}
                  style={{ backgroundColor: c }}
                  className={`size-12 rounded-full ${
                    i == colorSelected
                      ? "ring-cosmic scale-105"
                      : "ring-transparent"
                  } ring-2 transition`}
                ></span>
              ))}
            </div>
          </div>

          <Link to={'/scan'} className="bg-cosmic text-white self-center w-fit px-10 py-2.5 font-Rubik text-xl rounded active:scale-90 transition">
            Crear Estampa
          </Link>
        </form>
      </section>
    </>
  );
}

export default Register;
