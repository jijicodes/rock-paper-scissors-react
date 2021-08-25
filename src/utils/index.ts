export type Selection = "rock" | "paper" | "scissors";

export const whoWins = (
  user: Selection,
  com: Selection
): "Win" | "Loss" | "Tied" => {
  if (user === com) {
    return "Tied";
  } else if (
    (user === "rock" && com === "scissors") ||
    (user === "scissors" && com === "paper") ||
    (user === "paper" && com === "rock")
  ) {
    return "Win";
  } else {
    return "Loss";
  }
};
