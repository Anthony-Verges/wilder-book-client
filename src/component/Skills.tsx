import React from "react";
import { useState } from "react";

const Skills = ({
  skillsTitle,
  skillsVote,
}: {
  skillsTitle: string;
  skillsVote: number;
}): JSX.Element => {
  const [voteSkill, setVoteSkill] = useState(skillsVote);

  const handleClickVote = () => {
    return setVoteSkill(voteSkill + 1);
  };
  return (
    <div
      className="skills"
      style={{
        border: "2px solid #F76C6C",
        width: "6rem",
        height: "2rem",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {skillsTitle}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#39424e",
          borderRadius: "2px",
          width: "2rem",
          color: "#F76C6C",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.preventDefault();
          handleClickVote();
        }}
      >
        {voteSkill}
      </div>
    </div>
  );
};

export default Skills;
