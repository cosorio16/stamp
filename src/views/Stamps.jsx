import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Stamp from "../components/Stamp";
import { Link } from "react-router";
import QrIcon from "../icons/QrIcon";
import { db } from "../firebase/firebase";
import { doc, collection, getDoc, onSnapshot } from "firebase/firestore";

function Stamps() {
  let token = localStorage.getItem("token");
  let clientData = JSON.parse(localStorage.getItem("userData"));

  const [data, setData] = useState(clientData || []);

  useEffect(() => {
    const userRef = doc(db, "clients", token);

    const unsubscribe = onSnapshot(userRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setData(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        console.log("El documento no existe.");
      }
    });

    return () => unsubscribe();
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <section className="px-2 py-5 flex items-center flex-col gap-5 overflow-y-scroll max-h-120 stampsContainer font-Rubik">
        {data?.stamps ? (
          <>
            {data.stamps.map((s, i) => (
              <Stamp
                key={i}
                bgColor={s.color}
                gift={s.gift}
                name={s.name}
                steps={s.steps}
                data={s.dates}
              />
            ))}
          </>
        ) : (
          <div className="flex flex-col gap-5 items-center">
            <p className="border py-5 px-8 text-lg text-white border-cosmic rounded bg-cosmic/10 flex flex-col">
              ¡Aún no tienes tarjetas activas! <br /> No te preocupes, esto
              puede pasar. <br /> Puedes actualizar la página o volver a mostrar
              tu código QR para intentarlo de nuevo.
            </p>
            <Link
              to={"/client"}
              className="px-8 py-2 rounded bg-cosmic text-white flex items-center gap-2 font-medium"
            >
              <QrIcon sizes={25} />
              Ver Mi Codigo QR
            </Link>
          </div>
        )}
      </section>
      <NavBottom />
    </>
  );
}

export default Stamps;
