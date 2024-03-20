import firebase from "firebase/app";
import "firebase/firestore"; // Asegúrate de importar los módulos que necesites
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAFcqLgI0JeaXD7glHRFmBKIMZU27TNyd8",
  authDomain: "url-shortcut-3a2bd.firebaseapp.com",
  projectId: "url-shortcut-3a2bd",
  storageBucket: "url-shortcut-3a2bd.appspot.com",
  messagingSenderId: "933705432322",
  appId: "1:933705432322:web:9ae2a1210a1ed89c08161b",
  measurementId: "G-R21MJQB3JW",
};

// Inicializar Firebase
// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

// Exportar Firebase para usarlo en otros archivos
export const db = firebase.firestore();
