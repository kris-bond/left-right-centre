import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useGameInitialise from './game/hooks/useGameInitialise';
import useGameUpdate from './game/hooks/useGameUpdate';

const game: React.FC = () => {
  const { players, setPlayers, resetGame } = useGameInitialise();
  const { currentPlayer, takeTurn } = useGameUpdate(players, setPlayers);

  return (
    <View style={styles.container}>
      {players.map((player) => (
        <Text key={player.id} style={styles.playerText}>
          {player.name}: {player.tokens} tokens
        </Text>
      ))}
      <Text style={styles.currentPlayerText}>Current Player: {currentPlayer.name}</Text>
      <Button title="Take Turn" onPress={takeTurn} />
      <Button title="Reset Game" onPress={resetGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  playerText: {
    fontSize: 18,
    margin: 4,
    color: 'white',
  },
  currentPlayerText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
    color: 'white',
  },
});

export default game;
