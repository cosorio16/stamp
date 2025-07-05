import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import TicketIcon from "../../icons/TicketIcon";
import generateId from "../../utils/generateId";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Register() {
  let token = localStorage.getItem("businessToken");
  let businessData = localStorage.getItem("businessData");

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const [businessName, setBusinessName] = useState("");
  const [kindOfWork, setKindOfWork] = useState("");
  const [direction, setDirection] = useState("");
  const [steps, setSteps] = useState(2);
  const [reward, setReward] = useState("");
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

  const handleSubmitData = async () => {
    const collectionRef = collection(db, "business");
    const snapshot = await getDocs(collectionRef);
    const docs = snapshot.docs.map((doc) => doc.id);

    token = generateId();
    while (docs.includes(token)) {
      token = generateId();
    }

    localStorage.setItem("businessToken", token);

    const businessData = {
      id: token,
      stamp: {
        steps,
        reward,
        color: colors[colorSelected],
      },
      created: Date.now(),
      clients: [],
      name: businessName,
      kindOfWork,
      direction,
      mail: "",
      phone: "",
      link: "",
    };
    await setDoc(doc(db, "business", token), businessData);
    localStorage.setItem("businessData", JSON.stringify(businessData));
    navigate("/scan");
  };

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

        <div className="flex flex-col w-full gap-2.5">
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition capitalize"
            type="text"
            placeholder="Nombre del Negocio"
            value={businessName}
            maxLength={25}
            onChange={(e) => setBusinessName(e.target.value)}
          />

          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition capitalize"
            type="text"
            placeholder="Rubro"
            value={kindOfWork}
            onChange={(e) => setKindOfWork(e.target.value)}
          />

          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition"
            type="text"
            placeholder="Direccion"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          />
          <div className="flex border flex-col py-2.5 px-5  border-white/30 rounded transition text-white/80 ring ring-transparent focus-within:ring-frost">
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
          </div>
          <input
            className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition"
            type="text"
            placeholder="Recompensa"
            value={reward}
            maxLength={40}
            onChange={(e) => setReward(e.target.value)}
          />

          <div className="flex border flex-col py-2.5 px-5 gap-2 border-white/30 rounded transition text-white/80 ring ring-transparent focus-within:ring-frost">
            <span>Seleccione un Color</span>
            <div className="grid grid-cols-8 gap-2 justify-items-center items-center">
              {colors.map((c, i) => (
                <span
                  key={i}
                  onClick={() => setColorSelected(i)}
                  style={{ backgroundColor: c }}
                  className={`size-8 rounded-full ${
                    i == colorSelected
                      ? "ring-white scale-105"
                      : "ring-transparent"
                  } ring-2 transition`}
                ></span>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleSubmitData()}
            className={`bg-cosmic text-white self-center w-72 text-center px-10 py-2.5 font-Rubik text-xl rounded active:scale-90 transition ${
              businessName.trim() != "" &&
              direction.trim() != "" &&
              kindOfWork.trim() != "" &&
              reward.trim() != ""
                ? "scale-100"
                : "scale-0 pointer-events-none"
            }`}
          >
            Crear Estampa
          </button>
        </div>
      </section>
    </>
  );
}

export default Register;
