import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/api/wilders", {
        name,
        city,
      });
      console.log(result);
      if (result.data.success) {
        setError("");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <div>
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
          Ajouter un nouveau Wilder
        </h1>
      </div>

      <form
        style={{
          border: "1px solid#39424e",
          borderRadius: "10px",
          margin: "auto",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginTop: "5rem",
          backgroundColor: "#39424e",
          paddingBottom: "2rem",
          paddingTop: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <label
          style={{
            textAlign: "left",
            width: "50%",
            margin: "auto",
            marginBottom: "1rem",
            color: "white",
          }}
          htmlFor="name-input"
        >
          Prénom :
        </label>
        <input
          style={{
            textAlign: "center",
            width: "50%",
            height: "1.5rem",
            margin: "auto",
            marginBottom: "1rem",
            border: "1px solid #F76C6C",
            outline: "none",
          }}
          id="name-input"
          type="text"
          placeholder="Entre le Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          style={{
            textAlign: "left",
            width: "50%",
            margin: "auto",
            marginBottom: "1rem",
            color: "white",
          }}
          htmlFor="city-input"
        >
          Ville :
        </label>
        <input
          style={{
            textAlign: "center",
            width: "50%",
            height: "1.5rem",
            margin: "auto",
            marginBottom: "1rem",
            border: "1px solid #F76C6C",
            outline: "none",
          }}
          id="city-input"
          type="text"
          placeholder="Entre la ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error !== "" && <div style={{ color: "red" }}>{error}</div>}
        <button
          style={{
            textAlign: "center",
            width: "50%",
            height: "2rem",
            margin: "auto",
            marginBottom: "1rem",
            marginTop: "2.5rem",
            color: "white",
            backgroundColor: "#F76C6C",
            outline: "none",
            border: "1px solid #F76C6C ",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Form;
