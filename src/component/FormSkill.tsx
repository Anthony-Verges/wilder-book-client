import { useState } from "react";
import axios from "axios";

const FormSkill = ({
  name,
  // update,
  id,
  skill,
}: {
  name: string;
  id: string;
  skill: {}[];
  // update: (id: string, skill: string, votes: number) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [votes, setVotes] = useState<any>(0);

  const updateCardSkill = (id: string, skill: string, votes: number) => {
    try {
      axios.put(`http://localhost:5000/api/wilders/${id}`, {
        skills: [{ title: skill, votes: votes }],
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
          marginBottom: "5rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // updateCardSkill({ id, skill, votes });
          // update({ id, skill, votes });
        }}
      >
        {/* <h2 style={{ color: "white", textAlign: "center" }}>For {name}</h2> */}
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
          Compétence :
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
          placeholder="Entre une compétence"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
          Votes :
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
          placeholder="Entre un nombre de votes"
          value={votes}
          onChange={(e) => {
            setVotes(e.target.value);
          }}
        />
        {/* {error !== "" && <div style={{ color: "red" }}>{error}</div>} */}
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
          Ajouter skill
        </button>
      </form>
    </div>
  );
};

export default FormSkill;
