import React, { FC } from "react";
import "./Scoreboard.css";

interface Props {
  userScore: number;
  comScore: number;
}

export const Scoreboard: FC<Props> = ({ userScore, comScore }) => {
  return (
    <div className="scoreboardContainer">
      <div className="labelu scoreBoardLabel">User</div>
      <div className="labelc scoreBoardLabel"> Computer</div>
      <div className="scoreboard"></div>
      {userScore} : {comScore}
    </div>
  );
};
