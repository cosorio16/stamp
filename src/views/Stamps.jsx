import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Stamp from "../components/Stamp";

function Stamps() {
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

  return (
    <>
      <Header />
      <section className="px-2 py-5 flex items-center flex-col gap-5 overflow-y-scroll max-h-120 stampsContainer">
        {colors.map((c, i) => (
          <Stamp key={i} bgColor={c} />
        ))}
      </section>
      <NavBottom />
    </>
  );
}

export default Stamps;
