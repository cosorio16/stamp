import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import PinCodeIcon from "../../icons/PinCodeIcon";
import ScanIcon from "../../icons/ScanIcon";

function ScanQR() {
  return (
    <>
      <Header />
      <section className="px-3 py-3 flex flex-col font-Rubik">
        <div className="flex items-center flex-col gap-5">
          <div className="w-full border border-white/20 flex items-center  rounded-r text-white text-xl font-medium gap-3">
            <div className="bg-cosmic size-20 flex items-center justify-center">
              <ScanIcon sizes={60} />
            </div>
            <span>Escanear QR</span>
          </div>

          <div className="w-full flex items-center text-white/90">
            <span className="border grow"></span>
            <span className="px-2 text-2xl">O</span>
            <span className="border grow"></span>
          </div>

          <div className="w-full border border-white/20 flex items-center  rounded-r text-white text-xl font-medium gap-3">
            <div className="bg-cosmic size-20 flex items-center justify-center">
              <PinCodeIcon sizes={60} />
            </div>
            <span>Ingresar Pin</span>
          </div>
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default ScanQR;
