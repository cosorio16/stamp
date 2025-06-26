import { QRCodeSVG } from "qrcode.react";

function Ticket() {
  const qrData = {
    user: "Carlos",
    user2: "Oso",
    date: Date.now(),
  };
  return (
    <div className="flex flex-col bg-cosmic rounded-t border border-white/20 shadow max-w-72 w-full">
      <div className="flex items-center justify-center py-16">
        <QRCodeSVG
          value={JSON.stringify(qrData)}
          size={200}
          level="M"
          fgColor="#fff"
          bgColor="#5454c5"
          marginSize={1}
        />
      </div>
      <div className="relative flex items-center justify-center font-IBM text-2xl font-medium text-white py-2 border-t-2 border-dashed border-carbon/50">
        <span>32JL-DJKJ</span>

        <span className="size-6 bg-[#353941] rounded-full absolute -left-3 -top-3"></span>
        <span className="size-6 bg-[#353941] rounded-full absolute -right-3 -top-3"></span>
      </div>
    </div>
  );
}

export default Ticket;
