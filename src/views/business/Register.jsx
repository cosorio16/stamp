import Header from "../../components/Header";
import TicketIcon from "../../icons/TicketIcon";
function Register() {
  return (
    <>
      <Header />
      <section className="px-5 flex flex-col gap-5 font-Rubik py-1">
        <h1 className="text-white text-2xl flex items-center gap-1">
          <span>
            <TicketIcon sizes={30} />
          </span>
          Configure su Estampa
        </h1>
        <form action="" className="flex flex-col w-full gap-2.5">
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="text"
            placeholder="Nombre"
          />

          <select className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition" name="" id="">
            <option value="">Rubro</option>
            <option value=""></option>
            <option value=""></option>
          </select>

          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="text"
            placeholder="Direccion"
          />
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="range"
            name=""
            id=""
            placeholder="Pasos"
          />
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition"
            type="text"
            placeholder="Recompensa"
          />
          <input
            type="color"
            name=""
            id=""
            placeholder="Color"
          />
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white/20 placeholder:text-white/80 py-2 px-5 rounded transition"
            type="file"
            name=""
            id=""
            disabled
            placeholder="Logo del negocio"
          />
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white/20 placeholder:text-white/80 py-2 px-5 rounded transition"
            type="file"
            name=""
            id=""
            disabled
            placeholder="Imagen de portada"
          />

          <button className="bg-cosmic text-white self-center w-fit px-10 py-2.5 font-Rubik text-xl rounded active:scale-90 transition">
            Crear Estampa
          </button>
        </form>
      </section>
    </>
  );
}

export default Register;
