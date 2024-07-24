import { useState } from 'react';
import { IPlayer } from '../models/Player';
import { DICE_SIDES } from '../constants';

const useGameLogic = (players: IPlayer[], setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const rollDice = () => {
    const numDice = Math.min(players[currentPlayerIndex].tokens, 3);
    const rolls = Array.from({ length: numDice }, () => DICE_SIDES[Math.floor(Math.random() * DICE_SIDES.length)]);
    return rolls;
  };

  const takeTurn = () => {
    const rolls = rollDice();
    const newPlayers = [...players];

    rolls.forEach(roll => {
      if (roll === 'L') {
        newPlayers[currentPlayerIndex].tokens--;
        newPlayers[(currentPlayerIndex + 1) % newPlayers.length].tokens++;
      } else if (roll === 'R') {
        newPlayers[currentPlayerIndex].tokens--;
        newPlayers[(currentPlayerIndex - 1 + newPlayers.length) % newPlayers.length].tokens++;
      } else if (roll === 'C') {
        newPlayers[currentPlayerIndex].tokens--;
      }
    });

    setPlayers(newPlayers);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % newPlayers.length);
  };

  return {
    currentPlayer: players[currentPlayerIndex],
    takeTurn,
  };
};

export default useGameLogic;
