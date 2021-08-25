import React, { FC } from "react";
import "./RPSSelection.css";
import { Selection, whoWins } from "../../utils/";

type Props =
  | { comSelection: undefined; userSelection: undefined }
  | {
      comSelection: Selection;
      userSelection: Selection;
    };

const prettySelectionNames: Record<Selection, string> = {
  rock: "Rock",
  paper: "Paper",
  scissors: "Scissors",
};

export const winText = (user: Selection, com: Selection) => {
  const prettyUserSeletion = prettySelectionNames[user];
  const prettyCompSeletion = prettySelectionNames[com];
  const whoWon = whoWins(user, com);
  const winOrLoss =
    whoWon === "Win" ? "beats" : whoWon === "Loss" ? "lost" : "tied";
  const endingText =
    whoWon === "Tied"
      ? "You are tied 😏"
      : whoWon === "Loss"
      ? "You lost 🤮"
      : "You win ✌️";

  return `${prettyUserSeletion} ${winOrLoss} ${prettyCompSeletion}. ${endingText}`;
};

export const RPSSelection: FC<Props> = ({ userSelection, comSelection }) => {
  return (
    <div>
      {!userSelection || !comSelection ? (
        <></>
      ) : (
        <div className="statusMsg">{winText(userSelection, comSelection)}</div>
      )}
    </div>
  );
};
