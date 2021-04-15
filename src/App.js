import Wilder from "./component/Wilder";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [wilders, setWilders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/wilders")
      .then((res) => {
        const wilders = res.data.wilderFind;

        // console.log(wilders);
        setWilders(wilders);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#F76C6C",
          height: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          Wilder Books
        </h1>
      </div>
      <h2 style={{ textAlign: "center" }}>Wilders</h2>
      {loading ? (
        <div>
          <h1>Chargement...</h1>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "wrap",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder._id}
                name={wilder.name}
                city={wilder.city}
                skills={wilder.skills}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
