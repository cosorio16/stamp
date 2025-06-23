import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Ticket from "../components/Ticket";
import Stamp from "../components/Stamp";

function Stamps() {
  return (
    <>
      <Header />
      <section className="p-5 flex items-center justify-center flex-col gap-5 pb-32">
        <Stamp />
        <Stamp />
        <Stamp />
      </section>
      <NavBottom />
    </>
  );
}

export default Stamps;
