import React from "react";
import Wilder from "./Wilder";
import FormSkill from "./FormSkill";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export type dataProps = {
  _id: string;
  name: string;
  city: string;
  skills: any;
  isDelete: any;
  //  skillsProps[];
};

export type skillsProps = {
  title: string;
  votes: number;
};

function Home(): JSX.Element {
  const [wilders, setWilders] = useState<dataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const fetchData = async () => {
    try {
      const response: any = await axios.get(
        "http://localhost:5000/api/wilders"
      );
      console.log("response", response.data.result);
      setWilders(response.data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleShowSkillForm = () => {
    setShowSkillForm(!showSkillForm);
  };

  // const updateCardSkill = (id: string, skill: string, votes: number) => {
  //   try {
  //     axios.put(`http://localhost:5000/api/wilders/${id}`, {
  //       skills: [{ title: skill, votes: votes }],
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
        <>
          {isDelete ? (
            <div
              style={{
                backgroundColor: "green",
                width: "8rem",
                height: "4rem",
                margin: "auto",
              }}
            >
              <h3 style={{ color: "white" }}>Wilder Deleted</h3>
            </div>
          ) : (
            ""
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {wilders.map((wilder) => {
              return (
                <Wilder
                  key={wilder._id}
                  id={wilder._id}
                  name={wilder.name}
                  city={wilder.city}
                  skills={wilder.skills}
                  toggleShowSkillForm={toggleShowSkillForm}
                  // handleDelete={handleDelete}
                  fetchData={fetchData}
                  setIsDelete={setIsDelete}
                  isDelete={isDelete}
                />
              );
            })}
          </div>
        </>
      )}

      {showSkillForm && (
        <div className="form-skill">
          <FormSkill
            name={""}
            id={""}
            skill={[]}
            // update={function (id: string, skill: string, votes: number): void {
            //   throw new Error("Function not implemented.");
            // }}
          />
          {/* update={updateCardSkill} */}
        </div>
      )}
    </div>
  );
}
export default Home;
