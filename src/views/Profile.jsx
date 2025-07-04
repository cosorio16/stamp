import { useState } from "react";
import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import UserIcon from "../icons/UserIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import AlertIcon from "../icons/AlertIcon";

function Profile() {
  const [editing, setEditing] = useState(false);

  const userDataProfile = {
    configured: false,
    user: "Carlos Osorio",
    email: "osoriocardona0000@gmail.com",
    phone: "573206852825",
  };

  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center gap-10 py-5">
        {userDataProfile.configured && (
          <>
            <div className="flex items-center w-full flex-col">
              <span className="rounded-full p-4 bg-white flex items-center justify-center text-frost">
                <UserIcon sizes={40} />
              </span>
            </div>
            <div className="flex flex-col px-6 border-y py-8 border-white/10 gap-8 text-white relative">
              <button className="self-end font-bold absolute right-3 top-3">
                Editar
              </button>
              <div className="flex items-center gap-4">
                <div className="text-frost">
                  <UserIcon sizes={30} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Nombre</span>
                  <span className="font-medium font-IBM">
                    {userDataProfile.user}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-frost">
                  <MailIcon sizes={30} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Correo</span>
                  <span className="font-medium font-IBM">
                    {userDataProfile.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-frost">
                  <PhoneIcon sizes={30} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">Telefono</span>
                  <span className="font-medium font-IBM">
                    {userDataProfile.phone}
                  </span>
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
          </>
        )}

        {!userDataProfile.configured && (
          <div className="text-white px-2 py-3 flex flex-col gap-5">
            <div className="border flex flex-col gap-2 items-center justify-center py-4 px-8 bg-cosmic/10 border-cosmic rounded-lg">
              <span>
                <AlertIcon sizes={30} />
              </span>
              <p>
                Guarda tu información para no perderla y poder acceder desde
                cualquier dispositivo.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <input
                className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition w-full"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition w-full"
                type="text"
                placeholder="Telefono"
              />
              <input
                className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition w-full"
                type="text"
                placeholder="Correo"
                required
              />
              <input
                className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition w-full"
                type="password"
                placeholder="Contraseña"
                required
              />

              <button className="bg-cosmic text-white self-center w-44 text-center px-10 py-2.5 font-Rubik text-lg rounded active:scale-90 transition mt-3">
                Guardar
              </button>
            </div>
          </div>
        )}
      </div>

      <NavBottom />
    </>
  );
}

export default Profile;
