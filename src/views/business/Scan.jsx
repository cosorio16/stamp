import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";

import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import Stamp from "../../components/Stamp";
import PinCodeIcon from "../../icons/PinCodeIcon";
import ScanIcon from "../../icons/ScanIcon";
import QrIcon from "../../icons/QrIcon";
import CloseIcon from "../../icons/CloseIcon";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function Scan() {
  const inputRefs = useRef([]);

  const token = localStorage.getItem("businessToken");
  const businessData = JSON.parse(localStorage.getItem("businessData"));

  const [pinCode, setPinCode] = useState(Array(8).fill(""));
  const [startScan, setStartScan] = useState(false);
  const [pinModal, setPinModal] = useState(false);
  const [userData, setUserData] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [qrData, setQrData] = useState("");
  const [clientData, setClientData] = useState(null);

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    // console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      // console.log(`loaded >>>`, scanData);
      setQrData(scanData);
      setStartScan(false);
      setLoadingScan(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleChange = (e, index) => {
    const key = e.key;
    console.log(key);

    if (key == key.match(/[a-z]/i) || (key >= "0" && key <= "9")) {
      const newValues = [...pinCode];
      newValues[index] = key;
      setPinCode(newValues);
      index < 7 && e.key && inputRefs.current[index + 1].focus();
    } else if (key == "Backspace") {
      const newValues = [...pinCode];

      if (newValues[index] == "") {
        newValues[index - 1] = "";
        setPinCode(newValues);
        index > 0 && e.key && inputRefs.current[index - 1].focus();
      } else {
        newValues[index] = "";
        setPinCode(newValues);
        index > 0 && e.key && inputRefs.current[index].focus();
      }
    } else {
      e.preventDefault();
    }
  };

  const handleSubmitData = async (id) => {
    try {
      const userRef = doc(db, "clients", id);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        console.log("Datos encontrados:", userDoc.data());
        setClientData(userDoc.data());
        setUserData(true);
      } else {
        console.log("Documento no encontrado para id:", id);
        setClientData(null);
        setUserData(false);
      }
    } catch (error) {
      console.error("Error al obtener datos de Firestore:", error);
      setClientData(null);
      setUserData(false);
    }
  };

  useEffect(() => {
    if (qrData) {
      handleSubmitData(qrData);
    }
    console.log(qrData);
  }, [qrData]);

  console.log(clientData);

  return (
    <>
      <Header />

      <section className="px-3 py-3 flex flex-col font-Rubik">
        <div className="flex items-center flex-col gap-3 relative">
          <div className="grow w-full border border-cosmic px-3 py-8 bg-cosmic/10 rounded-xl flex items-center justify-center">
            <div
              onClick={() => setStartScan(!startScan)}
              className="relative w-[300px] aspect-square flex items-center justify-center"
            >
              <div className="">
                {startScan ? (
                  <QrReader
                    facingMode={"environment"}
                    delay={1000}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "300px" }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-cosmic">
                      <QrIcon sizes={40} />
                    </span>
                    <span className="text-white text-xl">Escanear QR</span>
                  </div>
                )}
              </div>
              <div className="absolute border-4 border-white/80 size-12 top-0 left-0 border-r-0 border-b-0"></div>
              <div className="absolute border-4 border-white/80 size-12 right-0 top-0 border-l-0 border-b-0"></div>
              <div className="absolute border-4 border-white/80 size-12 bottom-0 left-0 border-t-0 border-r-0"></div>
              <div className="absolute border-4 border-white/80 size-12 right-0 bottom-0 border-t-0 border-l-0"></div>
            </div>
          </div>

          <div className="flex items-center text-white/90 w-full">
            <span className="border grow"></span>
            <span className="px-2 text-2xl">O</span>
            <span className="border grow"></span>
          </div>

          <button
            onClick={() => setPinModal(true)}
            className="bg-cosmic text-white rounded-full w-full py-3 text-xl"
          >
            Ingrear Pin Manual
          </button>

          {/* pin modal */}
          <div
            className={`fixed inset-0 max-w-2xl w-full md:left-1/2 md:-translate-x-1/2 bg-night z-30 flex flex-col gap-5 transition ${
              pinModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setPinModal(false)}
              className={`ring-2 p-2 aspect-square rounded-full text-white/90 size-12 flex items-center justify-center self-end mr-5 mt-5 ${
                pinModal ? "scale-100" : "scale-0"
              } transition`}
            >
              <CloseIcon sizes={30} />
            </button>
            <div
              className={`flex flex-col gap-3 items-center justify-center h-full bg-cosmic md:p-5 rounded-t-2xl ${
                pinModal ? "translate-y-0" : "translate-y-full"
              } transition`}
            >
              <h1 className="text-3xl text-white uppercase font-medium">
                Ingresar Pin
              </h1>
              <div className="grid grid-cols-9 gap-1 p-1 text-white">
                {[...Array(8)].map((_, i) => (
                  <React.Fragment key={i}>
                    <input
                      ref={(el) => (inputRefs.current[i] = el)}
                      type="text"
                      value={pinCode[i]}
                      className="border-2 rounded border-white/60 w-full justify-items-center items-center aspect-square text-center focus:outline-none p-1 focus:border-white uppercase font-IBM font-bold transition"
                      onKeyDown={(e) => handleChange(e, i)}
                      maxLength={1}
                      onChange={() => {}}
                    />
                    {i == 3 && <span className="text-4xl text-center">-</span>}
                  </React.Fragment>
                ))}
              </div>

              <button
                onClick={() => setPinModal(false)}
                className={`font-semibold border border-white px-8 py-2 rounded text-white text-xl active:scale-90 transition ${
                  pinCode[7] == "" || pinCode[7] == undefined
                    ? "scale-0"
                    : "scale-100"
                }`}
              >
                Continuar
              </button>
            </div>
          </div>

          {/* data scanned */}
          <div
            className={`fixed inset-0 max-w-2xl w-full md:left-1/2 md:-translate-x-1/2 bg-night z-30 flex flex-col gap-5 transition ${
              userData ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setUserData(false)}
              className={`ring-2 p-2 aspect-square rounded-full text-white/90 size-12 flex items-center justify-center self-end mr-5 mt-5 ${
                userData ? "scale-100" : "scale-0"
              } transition`}
            >
              <CloseIcon sizes={30} />
            </button>

            <div
              className={`flex flex-col gap-6 items-center py-10 h-full md:p-5 px-1 ${
                userData ? "translate-y-0" : "translate-y-full"
              } transition`}
            >
              <input
                type="text"
                value={clientData?.name !== "" ? clientData?.name : "Cliente"}
                className="border-b text-center border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2.5 px-5 rounded transition w-full text-3xl font-black"
              />

              <div className="w-full flex items-center justify-center">
                <Stamp
                  bgColor={businessData.stamp.color}
                  steps={businessData.stamp.steps}
                  forced
                />
              </div>
              <button
                onClick={() => setPinModal(false)}
                className={`bg-cosmic px-12 py-3 rounded text-white text-xl active:scale-90 transition mt-8`}
              >
                Agregar Visita
              </button>
            </div>
          </div>
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default Scan;

// rounded-tl-lg
// rounded-tr-lg
// rounded-bl-lg
// rounded-br-lg
