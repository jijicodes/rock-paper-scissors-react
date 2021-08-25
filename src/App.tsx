import React, { useState } from "react";
import "./App.css";
import { RPSSelection, winText } from "./components/RPSSelection/RPSSelection";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Buttons } from "./components/Buttons/Buttons";
import { Selection, whoWins } from "./utils/";

const prettySelectionNames: Selection[] = ["rock", "paper", "scissors"];

function randomComPick(): Selection {
  return prettySelectionNames[Math.floor(Math.random() * 3)];
}

function App() {
  const [selections, setSelections] = useState<
    | {
        user: undefined;
        computer: undefined;
      }
    | { user: Selection; computer: Selection }
  >({
    user: undefined,
    computer: undefined,
  });

  const [score, setScore] = useState({ user: 0, computer: 0 });
  return (
    <div className="App">
      <div className="title">Rock Paper Scissors</div>
      <div className="scoreBoardContainer">
        <Scoreboard userScore={score.user} comScore={score.computer} />
        <Buttons
          disabled={score.user >= 5 || score.computer >= 5}
          onSelection={(userSelection) => {
            const comPick = randomComPick();
            setSelections({ user: userSelection, computer: comPick });
            const result = whoWins(userSelection, comPick);
            console.log(result, userSelection, comPick);
            if (result !== "Tied") {
              setScore((prevScore) => {
                if (result === "Loss") {
                  return {
                    user: prevScore.user,
                    computer: prevScore.computer + 1,
                  };
                }
                return {
                  user: prevScore.user + 1,
                  computer: prevScore.computer,
                };
              });
            }
          }}
        />
        {selections.user ? (
          <RPSSelection
            userSelection={selections.user}
            comSelection={selections.computer}
          />
        ) : (
          <RPSSelection userSelection={undefined} comSelection={undefined} />
        )}
        {(score.computer >= 5 || score.user >= 5) && (
          <button
            onClick={() => {
              setScore({ user: 0, computer: 0 });
            }}
            className="reset"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
