import { useState } from 'react';
import { IPlayer } from '../models/Player';
import { DICE_SIDES } from '../constants';

const useGameLogic = (
  players: IPlayer[],
  setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>
) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceRolls, setDiceRolls] = useState<string[]>([]);

  const findNextPlayerWithChips = (startIndex: number) => {
    for (let i = 0; i < players.length; i++) {
      const index = (startIndex + i) % players.length;
      if (players[index].tokens > 0) {
        return index;
      }
    }
    return -1; //no players with chips
  };

  const rollDice = () => {
    const numDice = Math.min(players[currentPlayerIndex].tokens, 3);
    const rolls = Array.from(
      { length: numDice },
      () => DICE_SIDES[Math.floor(Math.random() * DICE_SIDES.length)]
    );
    return rolls;
  };

  const takeTurn = () => {
    const rolls = rollDice();
    setDiceRolls(rolls);
    const newPlayers = [...players];

    rolls.forEach((roll) => {
      if (roll === 'L') {
        newPlayers[currentPlayerIndex].tokens--;
        newPlayers[(currentPlayerIndex + 1) % newPlayers.length].tokens++;
      } else if (roll === 'R') {
        newPlayers[currentPlayerIndex].tokens--;
        newPlayers[
          (currentPlayerIndex - 1 + newPlayers.length) % newPlayers.length
        ].tokens++;
      } else if (roll === 'C') {
        newPlayers[currentPlayerIndex].tokens--;
      }
    });

    setPlayers(newPlayers);

    let nextPlayerIndex = findNextPlayerWithChips(currentPlayerIndex + 1);
    if (nextPlayerIndex === -1) {
      //no players with chips
      nextPlayerIndex = findNextPlayerWithChips(0);
    }
    setCurrentPlayerIndex(nextPlayerIndex);
  };

  return {
    currentPlayer: players[currentPlayerIndex],
    takeTurn,
    diceRolls,
  };
};

export default useGameLogic;
