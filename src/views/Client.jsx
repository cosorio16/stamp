import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Ticket from "../components/Ticket";
import Stamp from "../components/Stamp";

function Client() {
  return (
    <>
      <Header />
      <section className="p-5 flex items-center justify-center flex-col gap-5 pb-32">
        <Ticket />
      </section>
      <NavBottom />
    </>
  );
}

export default Client;
