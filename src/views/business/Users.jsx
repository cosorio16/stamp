import Header from "../../components/Header";
import PanelBottom from "../../components/PanelBottom";

function Users() {
  const users = [
    {
      name: "Carlos Osorio",
      stamps: "1",
      stampRewardQuantity: "10",
      lastVisit: "24/Junio",
      rewards: "",
    },
  ];

  return (
    <>
      <Header />
      <section className="flex flex-col gap-5 px-3 py-5 font-Rubik">
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar"
          className="border border-white/30 focus:outline-none ring ring-transparent focus:ring-frost text-white placeholder:text-white/80 py-2 px-5 rounded transition capitalize"
        />

        <div>
          {users.map((u, i) => (
            <div
              key={i}
              className="flex border p-5 items-center gap-3 bg-white/10 rounded border-white/30 text-white"
            >
              <span className="bg-cosmic text-white text-3xl uppercase aspect-square flex items-center justify-center rounded-full w-16">
                {u.name[0]}
              </span>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-xl">{u.name}</span>
                <div className="flex items-center justify-between">
                  <span>Estampas:</span>
                  <span>
                    {u.stamps}/{u.stampRewardQuantity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  Ultima Visita:
                  <span>{u.lastVisit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <PanelBottom />
    </>
  );
}

export default Users;
