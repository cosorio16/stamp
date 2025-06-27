import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import UserIcon from "../icons/UserIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";

function Profile() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center gap-10 py-5">
        <div className="flex items-center w-full flex-col">
          <span className="rounded-full p-4 bg-white flex items-center justify-center text-carbon/80">
            <UserIcon sizes={40} />
          </span>
        </div>
        <div className="flex flex-col px-6 border-y py-8 border-white/10 gap-8 text-white relative">
          <button className="self-end font-bold absolute right-3 top-3">
            Editar
          </button>
          <div className="flex items-center gap-4">
            <div>
              <UserIcon sizes={30} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Nombre</span>
              <span className="font-medium font-IBM">Carlos Osorio</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
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
            <div>
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

      <NavBottom />
    </>
  );
}

export default Profile;
