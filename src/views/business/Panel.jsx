import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import EyeIcon from "../../icons/EyeIcon";
import TrashIcon from "../../icons/TrashIcon";
import ChartLine from "../../components/charts/ChartLine";

function Panel() {
  return (
    <>
      <Header />
      <section className="px-2 py-3 flex flex-col pb-20 items-center gap-5 font-Rubik">
        <div className="w-full ring-2 ring-white/30 px-5 py-3 rounded flex justify-between items-center">
          <div>
            <span className="text-xl text-white">Mi Tarjeta</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full text-white/80">
              <EyeIcon sizes={25} />
            </button>
            <button className="p-2 rounded-full text-white/80">
              <TrashIcon sizes={25} />
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 justify-center ring-2 ring-white/30 text-white w-full p-4 rounded">
            <span className="text-sm">Clientes Totales</span>
            <span className="text-3xl grow">50</span>
            <span className="text-frost w-fit px-3 py-1 text-sm rounded-full bg-frost/10 self-end">
              +5%
            </span>
          </div>
          <div className="flex flex-col ring-2 ring-white/30 text-white w-full p-4 rounded">
            <span className="text-sm">Visitas Acumuladas</span>
            <span className="text-3xl grow">302</span>
            <span className="text-frost w-fit px-3 py-1 text-sm rounded-full bg-frost/10 self-end">
              +8%
            </span>
          </div>
        </div>
        <div className="w-full ring-2 h-48 p-1 ring-white/30 rounded flex flex-col">
          <span className="text-sm text-white px-3 py-1">
            Visitas Acumuladas
          </span>
          <ChartLine />
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default Panel;
