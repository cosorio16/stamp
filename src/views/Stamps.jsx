import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Stamp from "../components/Stamp";

function Stamps() {
  return (
    <>
      <Header />
      <section className="px-2 py-5 flex items-center justify-center flex-col gap-5 pb-32">
        <Stamp />
      </section>
      <NavBottom />
    </>
  );
}

export default Stamps;
