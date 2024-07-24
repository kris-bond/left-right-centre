import { useState } from 'react';
import { IPlayer } from '../models/Player';

const useGameUpdate = (players: IPlayer[], setPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>) => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const takeTurn = (damage: number) => {
    const newPlayers = [...players];
    const opponentIndex = (currentPlayerIndex + 1) % newPlayers.length;
    newPlayers[opponentIndex].removeTokens(damage);
    setPlayers(newPlayers);
    setCurrentPlayerIndex(opponentIndex);
  };

  return {
    currentPlayer: players[currentPlayerIndex],
    takeTurn,
  };
};

export default useGameUpdate;
