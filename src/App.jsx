import { useState } from "react";
import { db } from "../firebaseConfig"; // Importar la instancia de Firebase

function App() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const shortenUrl = async () => {
    try {
      // Agregar la URL a la colección "urls" en Firestore
      const docRef = await db.collection("urls").add({
        originalUrl: url,
      });
      setShortenedUrl(window.location.href + "r/" + docRef.id); // URL corta basada en el ID del documento
    } catch (error) {
      console.error("Error al acortar la URL:", error);
    }
  };

  return (
    <div>
      <h1>Acortador de URL</h1>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder="Introduce la URL que deseas acortar"
      />
      <button onClick={shortenUrl}>Acortar</button>
      {shortenedUrl && (
        <p>
          URL acortada: <a href={shortenedUrl}>{shortenedUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
