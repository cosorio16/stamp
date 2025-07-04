import { Link } from "react-router";
import Header from "../components/Header";
import Arrow from "../icons/Arrow";
import QrIcon from "../icons/QrIcon";
import UserIcon from "../icons/UserIcon";
import ScanIcon from "../icons/ScanIcon";

function Home() {
  return (
    <div className="font-Rubik">
      <Header />
      <section className="px-3 flex flex-col py-6 gap-4 text-carbon">
        <h1 className="text-2xl text-white">Tengo Cuenta</h1>

        <Link
          to={"/login"}
          className="h-22 flex items-center bg-white/10 text-white"
        >
          <div className="p-3 bg-cosmic text-white aspect-square flex items-center justify-center h-22">
            <span className="">
              <UserIcon sizes={40} />
            </span>
          </div>
          <div className="grow h-full flex flex-col justify-center pl-3">
            <h1 className="text-lg font-medium">Ingresar</h1>
            <p className="text-sm">Iniciar sesion</p>
          </div>
          {/* <span className="rounded-full bg-carbon/10 aspect-square p-3">
            <Arrow sizes={25} />
          </span> */}
        </Link>

        <div className="flex items-center text-white/90">
          <span className="border grow"></span>
          <span className="px-2 text-2xl">O</span>
          <span className="border grow"></span>
        </div>

        <h1 className="text-2xl text-white">Selecciona tu rol</h1>

        <Link
          to={"/client"}
          className="h-22 flex items-center bg-white/10 text-white"
        >
          <div className="p-3 bg-cosmic text-white aspect-square flex items-center justify-center h-22">
            <span className="">
              <QrIcon sizes={40} />
            </span>
          </div>
          <div className="grow h-full flex flex-col justify-center pl-3">
            <h1 className="text-lg font-medium">Soy Cliente</h1>
            <p className="text-sm">Genera tu QR gratis</p>
          </div>
          {/* <span className="rounded-full bg-carbon/10 aspect-square p-3">
            <Arrow sizes={25} />
          </span> */}
        </Link>

        <Link
          to={"/register"}
          className="h-22 flex items-center bg-white/10 text-white"
        >
          <div className="p-3 bg-cosmic text-white aspect-square flex items-center justify-center h-22">
            <span className="">
              <ScanIcon sizes={40} />
            </span>
          </div>
          <div className="grow h-full flex flex-col justify-center pl-3">
            <h1 className="text-lg font-medium">Soy Dueño</h1>
            <p className="text-sm">Registrate en segundos</p>
          </div>
          {/* <span className="rounded-full bg-carbon/10 aspect-square p-3">
            <Arrow sizes={25} />
          </span> */}
        </Link>
      </section>
    </div>
  );
}

export default Home;
