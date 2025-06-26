import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";

import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import PinCodeIcon from "../../icons/PinCodeIcon";
import ScanIcon from "../../icons/ScanIcon";
import CloseIcon from "../../icons/CloseIcon";

function ScanQR() {
  const [pinCode, setPinCode] = useState(Array(8).fill(""));
  const [startScan, setStartScan] = useState(false);
  const [pinModal, setPinModal] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const inputRefs = useRef([]);

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const handleChange = (e, index) => {
    const newValues = [...pinCode];
    newValues[index] = e.target.value;
    setPinCode(newValues);

    index < 7 && e.target.value && inputRefs.current[index + 1].focus();
  };

  return (
    <>
      <Header />

      <section className="px-3 py-3 flex flex-col font-Rubik">
        <div className="flex items-center flex-col gap-5">
          <div
            onClick={() => setStartScan(true)}
            className="w-full border border-white/20 flex items-center  rounded-r text-white text-xl font-medium gap-3"
          >
            <div className="bg-cosmic size-20 flex items-center justify-center">
              <ScanIcon sizes={60} />
            </div>
            <span>Escanear QR</span>
          </div>

          <div
            className={`fixed inset-0 bg-carbon/90 z-30 flex flex-col gap-5 transition ${
              startScan ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setStartScan(false)}
              className={`ring-2 p-2 aspect-square rounded-full text-white/50 size-12 flex items-center justify-center self-end mr-5 mt-5 ${
                startScan ? "scale-100" : "scale-0"
              } transition`}
            >
              <CloseIcon sizes={30} />
            </button>
            <div
              className={`flex flex-col gap-3 items-center justify-center h-full bg-cosmic rounded-t-2xl ${
                startScan ? "translate-y-0" : "translate-y-full"
              } transition`}
            >
              <h1 className="text-3xl text-white uppercase font-semibold">
                Escaneando QR
              </h1>

              {startScan && (
                <QrReader
                  facingMode={"environment"}
                  delay={1000}
                  onError={handleError}
                  onScan={handleScan}
                  // chooseDeviceId={()=>"environment"}
                  style={{ width: "300px" }}
                />
              )}
            </div>
          </div>

          <div className="w-full flex items-center text-white/90">
            <span className="border grow"></span>
            <span className="px-2 text-2xl">O</span>
            <span className="border grow"></span>
          </div>

          <div
            onClick={() => setPinModal(true)}
            className="w-full border border-white/20 flex items-center  rounded-r text-white text-xl font-medium gap-3"
          >
            <div className="bg-cosmic size-20 flex items-center justify-center">
              <PinCodeIcon sizes={60} />
            </div>
            <span>Ingresar Pin</span>
          </div>

          <div
            className={`fixed inset-0 bg-carbon/90 z-30 flex flex-col gap-5 transition ${
              pinModal ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              onClick={() => setPinModal(false)}
              className={`ring-2 p-2 aspect-square rounded-full text-white/50 size-12 flex items-center justify-center self-end mr-5 mt-5 ${
                pinModal ? "scale-100" : "scale-0"
              } transition`}
            >
              <CloseIcon sizes={30} />
            </button>
            <div
              className={`flex flex-col gap-3 items-center justify-center h-full bg-cosmic rounded-t-2xl ${
                pinModal ? "translate-y-0" : "translate-y-full"
              } transition`}
            >
              <h1 className="text-3xl text-white uppercase font-semibold">
                Ingresar Pin
              </h1>
              <div className="flex items-center gap-2 p-1 text-white">
                {[...Array(8)].map((_, i) => (
                  <React.Fragment key={i}>
                    <input
                      ref={(el) => (inputRefs.current[i] = el)}
                      type="text"
                      value={pinCode[i]}
                      className="border-2 rounded border-white w-8 aspect-square text-center  focus:outline-none p-1"
                      onChange={(e) => handleChange(e, i)}
                      maxLength={1}
                    />
                    {i == 3 && <span className="text-4xl ">-</span>}
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
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default ScanQR;
