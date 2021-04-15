import { useEffect, useState } from "react";
import Skills from "./Skills";

const Wilder = ({ name, city, skills }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setLanguages(skills);
  }, [languages, skills]);

  return (
    <div
      className="card"
      style={{
        border: "1px solid #39424e",
        borderRadius: "5px",
        marginRight: "2rem",
        marginLeft: "2rem",
        marginBottom: "2rem",
        boxShadow: "1px 1px 7px #39424e",
        width: "300px",
        paddingBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          marginRight: "10%",
          marginLeft: "10%",
        }}
      >
        <img
          src="/assets/avatar.png"
          alt={name}
          style={{
            width: "250px",
            marginTop: "2rem",
            border: "3px solid #F76C6C",
            borderRadius: "5px",
          }}
        />
      </div>
      <h3
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          color: "#F76C6C",
        }}
      >
        {name}
      </h3>
      <h4
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          color: "#39424e",
        }}
      >
        from {city}
      </h4>
      <p
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          textAlign: "justify",
        }}
      >
        Insérer de texte Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Fugit placeat obcaecati cupiditate laboriosam pariatur quis,
        quibusdam odio, hic facere, vel quas ratione. Numquam officia iure
        quisquam nemo cupiditate eveniet vitae!
      </p>
      <h3
        style={{
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          color: "#F76C6C",
        }}
      >
        Wild Skills
      </h3>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {languages.map((skill) => {
          return (
            <Skills
              key={skill._id}
              skillsTitle={skill.title}
              skillsVote={skill.votes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wilder;
