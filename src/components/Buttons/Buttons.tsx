import React, { FC } from "react";
import "./Buttons.css";
import { Selection } from "../../utils/";

interface Props {
  disabled?: boolean;
  onSelection: (userSelection: Selection) => void;
}

export const Buttons: FC<Props> = ({ onSelection, disabled }) => {
  return (
    <div className="rpsImages">
      <button
        disabled={disabled}
        onClick={() => {
          onSelection("rock");
        }}
      >
        <img src="/rock.png" alt="rock" width="100" height="100" />
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          onSelection("paper");
        }}
      >
        <img src="/paper.png" alt="paper" width="100" height="100" />
      </button>
      <button
        disabled={disabled}
        onClick={() => {
          onSelection("scissors");
        }}
      >
        <img src="/scissors.png" alt="scissors" width="100" height="100" />
      </button>
    </div>
  );
};
