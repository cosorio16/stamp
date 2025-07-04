import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import UserIcon from "../../icons/UserIcon";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import LocationIcon from "../../icons/LocationIcon";
import { useState } from "react";

function Business() {
  const [editing, setEditing] = useState(false);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center gap-6 py-5 pb-32">
        <div className="flex items-center w-full flex-col">
          <span className="rounded-full p-4 bg-white flex items-center justify-center text-frost">
            <UserIcon sizes={40} />
          </span>
        </div>
        <div className="flex flex-col px-6 border-y py-8 border-white/10 gap-5 text-white relative">
          <button className="self-end font-bold absolute right-3 top-3">
            Editar
          </button>
          <div className="flex items-center gap-4">
            <div className="text-frost">
              <UserIcon sizes={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Nombre del Negocio</span>
              <span className="font-medium font-IBM">Osorio Frontend</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-frost">
              <LocationIcon sizes={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Direccion</span>
              <span className="font-medium font-IBM">55 LIBERTY ST</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-frost">
              <MailIcon sizes={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Correo</span>
              <span className="font-medium font-IBM">
                osoriocardona0000@gmail.com
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-frost">
              <PhoneIcon sizes={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Telefono</span>
              <span className="font-medium font-IBM">3206852825</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 px-2">
          <button className="text-white ring-2 ring-white/60 rounded py-3 font-medium active:scale-90 transition">
            Eliminar Cuenta
          </button>
          <button className="text-white ring-2 ring-white/60 rounded py-3 font-medium active:scale-90 transition">
            Cerrar Sesion
          </button>
        </div>
      </div>
      <PanelBottom />
    </>
  );
}

export default Business;
