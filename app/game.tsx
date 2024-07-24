// app/components/TurnBasedGameComponent.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import useGameInitialise from './game/hooks/useGameInitialise';
import useGameUpdate from './game/hooks/useGameUpdate';
import { IPlayer } from './game/models/Player';

const game: React.FC = () => {
  const { players, setPlayers, resetGame } = useGameInitialise();
  const { currentPlayer, takeTurn } = useGameUpdate(players, setPlayers);

  return (
    <View>
      {players.map((player: IPlayer, index: number) => (
        <Text key={index}>{player.name} Health: {player.tokens}</Text>
      ))}
      <Text>Current Player: {currentPlayer.name}</Text>
      <Button title="Roll" onPress={() => takeTurn(10)} />
      <Button title="Reset Game" onPress={resetGame} />
    </View>
  );
};

export default game;
