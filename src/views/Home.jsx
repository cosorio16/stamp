import { Link } from "react-router";
import Header from "../components/Header";
import Arrow from "../icons/Arrow";
import QrIcon from "../icons/QrIcon";

function Home() {
  return (
    <div className="font-Rubik">
      <Header />
      <section className="px-5 flex flex-col py-6 gap-4">
        <h1 className="text-2xl">Selecciona tu rol</h1>

        <Link
          to={"/client"}
          className="border border-carbon/15 h-20 flex items-center gap-3 pr-2 "
        >
          <div className="p-3 bg-cosmic text-white aspect-square flex items-center justify-center h-20">
            <span className="">
              <QrIcon sizes={40} />
            </span>
          </div>
          <div className="grow">
            <h1 className="text-xl">Soy Cliente</h1>
            <p>Genera tu QR gratis</p>
          </div>
          <span className="rounded-full bg-carbon/10 aspect-square p-3">
            <Arrow sizes={25} />
          </span>
        </Link>

        <Link className="border border-carbon/15 h-20 flex items-center gap-3 pr-2">
          <div className="p-3 bg-cosmic text-white aspect-square flex items-center justify-center h-20">
            <span className="">
              <QrIcon sizes={40} />
            </span>
          </div>
          <div className="grow">
            <h1 className="text-xl">Soy Dueño</h1>
            <p>Registrate en segundos</p>
          </div>
          <span className="rounded-full bg-carbon/10 aspect-square p-3">
            <Arrow sizes={25} />
          </span>
        </Link>
      </section>
    </div>
  );
}

export default Home;
