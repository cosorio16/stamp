import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import Stamp from "../../components/Stamp";

function Panel() {
  return (
    <>
      <Header />
      <section className="px-2 py-3 flex flex-col gap-3 pb-20">
        <Stamp />
      </section>
      <PanelBottom />
    </>
  );
}

export default Panel;
