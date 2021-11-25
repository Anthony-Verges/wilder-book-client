import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import axios from "axios";

const Wilder = ({
  name,
  city,
  skills,
  id,
  toggleShowSkillForm,
  // handleDelete,
  fetchData,
  setIsDelete,
  isDelete,
}: {
  name: string;
  city: string;
  skills: [];
  id: string;
  toggleShowSkillForm: () => void;
  // handleDelete: (id: string) => void;
  fetchData: () => void;
  setIsDelete: any;
  isDelete: any;
}): JSX.Element => {
  const [languages, setLanguages] = useState<any>([]);

  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/wilders/delete/${id}`
      );
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3
          style={{
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
            color: "#F76C6C",
          }}
        >
          Wild Skills
        </h3>
        <button
          style={{
            height: "2rem",
            color: "white",
            backgroundColor: "#F76C6C",
            outline: "none",
            border: "1px solid #F76C6C ",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            toggleShowSkillForm();
          }}
        >
          Add skill
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {languages.map(
          (skill: {
            _id: React.Key | null | undefined;
            title: string;
            votes: number;
          }) => {
            return (
              <Skills
                key={skill._id}
                skillsTitle={skill.title}
                skillsVote={skill.votes}
              />
            );
          }
        )}
      </div>
      <div style={{ textAlign: "center", paddingTop: "2rem" }}>
        <button
          style={{
            height: "2rem",
            color: "white",
            backgroundColor: "#F76C6C",
            outline: "none",
            border: "1px solid #F76C6C ",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
            setIsDelete(true);

            setTimeout(() => {
              setIsDelete(false);
            }, 3000);

            setTimeout(() => {
              fetchData();
            }, 3000);
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Wilder;
