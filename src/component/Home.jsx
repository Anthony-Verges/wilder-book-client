import Wilder from "./Wilder";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [wilders, setWilders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/wilders")
      .then((res) => {
        const wilders = res.data.wilderFind;

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
          justifyContent: "space-around",
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
        <Link style={{ textDecoration: "none" }} to="/formulaire">
          <h3
            style={{
              color: "white",
              cursor: "pointer",
            }}
          >
            Créer un nouveau Wilder
          </h3>
        </Link>
      </div>

      <h2 style={{ textAlign: "center", color: "#39424e" }}>Wilders</h2>

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
export default Home;
