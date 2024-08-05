import { useState, useEffect } from 'react';
import { IPlayer } from '../models/Player';

import { PLAYER_INITIAL_TOKENS } from '../constants'

const useGameInitialise = (initialPlayers: IPlayer[]) => {
  const [players, setPlayers] = useState<IPlayer[]>(() => initialPlayers.map(player => ({ ...player })));

  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    checkGameOver();
  }, [players]);

  const checkGameOver = () => {
    const playersWithTokens = players.filter(player => player.tokens > 0);
    if(playersWithTokens.length === 1) {
      setWinner(playersWithTokens[0].name);
      setGameOver(true);
    }
  }

  const resetGame = () => {
    setPlayers(initialPlayers.map(player => ({ ...player })));
    setGameOver(false);
    setWinner('');
  }

  return {
    players,
    setPlayers,
    resetGame,
    gameOver,
    winner,
  };
};

export default useGameInitialise;
