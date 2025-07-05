import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBottom from "../components/NavBottom";
import Ticket from "../components/Ticket";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import generateId from "../utils/generateId";

function Client() {
  let token = localStorage.getItem("token");
  let clientData = localStorage.getItem("userData");

  const [data, setData] = useState(JSON.parse(clientData) || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      if (!token) {
        const collectionRef = collection(db, "clients");
        const snapshot = await getDocs(collectionRef);
        const docs = snapshot.docs.map((doc) => doc.id);

        token = generateId();
        while (docs.includes(token)) {
          token = generateId();
        }

        localStorage.setItem("token", token);

        const clientData = {
          id: "",
          registed: false,
          user: "",
          name: "",
          email: "",
          phone: "",
          code: token,
          stamps: [],
          created: Date.now(),
        };
        await setDoc(doc(db, "clients", token), clientData);
        setData(clientData);
        localStorage.setItem("userData", JSON.stringify(clientData));
      }
      // else {
      //   const userRef = doc(db, "clients", token);
      //   const userSnap = await getDoc(userRef);

      //   setData(userSnap.data());
      // }
    };

    initialize();
  }, []);

  return (
    <>
      <Header />
      <section className="p-5 flex items-center justify-center flex-col gap-5 pb-32">
        <Ticket key={1} code={data.code} />
      </section>
      <NavBottom />
    </>
  );
}

export default Client;
