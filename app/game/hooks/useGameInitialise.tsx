import { useState } from 'react';
import { IPlayer } from '../models/Player';

import { PLAYER_INITIAL_TOKENS } from '../constants'

const useGameInitialise = (initialPlayers: IPlayer[]) => {
const [players, setPlayers] = useState<IPlayer[]>(initialPlayers);

const resetGame = () => {
  setPlayers(
    initialPlayers.map((player) => ({
      ...player,
      chips: PLAYER_INITIAL_TOKENS,
    }))
  );
  console.log('Game reset:', players);
};

  return {
    players,
    setPlayers,
    resetGame,
  };
};

export default useGameInitialise;
