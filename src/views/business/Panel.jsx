import { Link } from "react-router";
import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";
import Stamp from "../../components/Stamp";
import PlusIcon from "../../icons/PlusIcon";

function Panel() {
  return (
    <>
      <Header />
      <section className="px-2 py-3 flex flex-col pb-20 items-center gap-5">
        <Link
          to={"/register"}
          className="ring-2 p-2 aspect-square rounded-full text-white/50 size-12 flex items-center justify-center"
        >
          <PlusIcon sizes={30} />
        </Link>
        <Stamp />
      </section>
      <PanelBottom />
    </>
  );
}

export default Panel;
