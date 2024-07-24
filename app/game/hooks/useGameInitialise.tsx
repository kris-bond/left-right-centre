import { useState } from 'react';
import Player, { IPlayer } from '../models/Player';

import { GAME_CONSTANTS } from '../constants'

const useGameInitialisation = () => {
  const [players, setPlayers] = useState<IPlayer[]>([
    new Player('Player 1', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
    new Player('Player 2', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
    new Player('Player 3', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
  ]);

  const resetGame = () => {
    setPlayers([
      new Player('Player 1', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
      new Player('Player 2', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
      new Player('Player 3', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS),
    ]);
  };

  return {
    players,
    setPlayers,
    resetGame,
  };
};

export default useGameInitialisation;
