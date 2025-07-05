import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

// Configura tu Firebase
const firebaseConfig = {
    // ... tu configuración
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencia al documento del cliente
const docRef = doc(db, "nombreDeLaColeccion", "IDdelDocumentoCliente");

// Datos que quiere actualizar la tienda 2 para su stamp
const idStampActualizar = 2;
const nuevosDatosStamp = {
    color: "rojo",
    dates: [Date.now()],
    name: "Nombre tienda 2",
    gift: "Regalo tienda 2"
};

async function actualizarStampTienda() {
    try {
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            console.log("❌ Documento no existe");
            return;
        }

        const data = docSnap.data();
        const stamps = data.stamps || [];

        // Actualizar solo el stamp con idStamp 2
        const stampsActualizados = stamps.map(stamp => {
            if (stamp.idStamp === idStampActualizar) {
                return {
                    ...stamp,            // conserva otros campos si los hubiera
                    ...nuevosDatosStamp  // actualiza con los nuevos datos
                };
            }
            return stamp; // los demás stamps quedan igual
        });

        // Guardar el array actualizado en Firestore
        await updateDoc(docRef, { stamps: stampsActualizados });

        console.log("✅ Stamp tienda 2 actualizado correctamente");
    } catch (error) {
        console.error("❌ Error actualizando stamp:", error);
    }
}

actualizarStampTienda();