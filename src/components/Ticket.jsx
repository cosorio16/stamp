import { QRCodeSVG } from "qrcode.react";
import React from "react";

function Ticket({ code }) {
  return (
    <div className="flex flex-col bg-cosmic rounded-t border border-white/20 shadow max-w-72 w-full">
      <div className="flex items-center justify-center py-16">
        <QRCodeSVG
          value={code}
          size={200}
          level="L"
          fgColor="#fff"
          bgColor="#5454c5"
          marginSize={1}
        />
      </div>
      <div className="relative flex items-center justify-center font-IBM text-2xl font-medium text-white py-2 border-t-2 border-dashed border-carbon/50 uppercase">
        {code && (
          <span>
            {code.split("").map((c, i) => (
              <React.Fragment key={i}>
                {i == 3 ? `${c + "-"}` : `${c}`}
              </React.Fragment>
            ))}
          </span>
        )}

        <span className="size-6 bg-night rounded-full absolute -left-3 -top-3"></span>
        <span className="size-6 bg-night rounded-full absolute -right-3 -top-3"></span>
      </div>
    </div>
  );
}

export default Ticket;
