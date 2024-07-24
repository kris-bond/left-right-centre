import { useState } from 'react';
import { IPlayer } from '../models/Player';

import { PLAYER_INITIAL_TOKENS } from '../constants'

const useGameInitialisation = () => {
  const [players, setPlayers] = useState<IPlayer[]>(
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      name: `Player ${i + 1}`,
      tokens: PLAYER_INITIAL_TOKENS,
    }))
  );

  const resetGame = () => {
    setPlayers(
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        name: `Player ${i + 1}`,
        tokens: PLAYER_INITIAL_TOKENS,
      }))
    );
  };

  return {
    players,
    setPlayers,
    resetGame,
  };
};

export default useGameInitialisation;
