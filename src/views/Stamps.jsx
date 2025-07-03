import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Stamp from "../components/Stamp";

function Stamps() {
  const dataExample = [
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    true,
  ];

  const data = {
    color: "#ff6900",
    dates: dataExample,
    name: "Food Nation",
    gift: "FREE CHESE BURGUER",
  };

  return (
    <>
      <Header />
      <section className="px-2 py-5 flex items-center flex-col gap-5 overflow-y-scroll max-h-120 stampsContainer">
        <Stamp
          bgColor={data.color}
          data={data.dates}
          gift={data.gift}
          name={data.name}
        />
      </section>
      <NavBottom />
    </>
  );
}

export default Stamps;
