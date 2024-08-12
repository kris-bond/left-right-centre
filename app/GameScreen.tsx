import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import useGameInitialise from './game/hooks/useGameInitialise';
import useGameUpdate from './game/hooks/useGameUpdate';
import { IPlayer } from './game/models/Player';

const GameScreen: React.FC<{ route: any }> = ({ route }) => {
  const { players: initialPlayers } = route.params;
  const { players, setPlayers, resetGame, gameOver, winner } =
    useGameInitialise(initialPlayers);
  const { currentPlayer, takeTurn, diceRolls, resetDiceRolls } = useGameUpdate(
    players,
    setPlayers
  );

  const handleReset = () => {
    if (!gameOver) {
      Alert.alert(
        'Confirm Reset',
        'Are you sure you want to reset the game?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Reset',
            onPress: () => {
              resetGame();
              resetDiceRolls();
            },
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    } else {
      resetGame();
      resetDiceRolls();
    }
  };

  return (
    <View style={styles.container}>
      {gameOver ? (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.winnerText}>{winner} is the winner!</Text>
          <Button title="Reset Game" onPress={handleReset} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.currentPlayerText}>
            Current Player: {currentPlayer.name}
          </Text>
          {diceRolls.length > 0 && (
            <View style={styles.diceRollContainer}>
              {diceRolls.map((roll, index) => (
                <Text key={index} style={styles.diceRollText}>
                  {roll}
                </Text>
              ))}
            </View>
          )}
          {players.map((player) => (
            <Text key={player.id} style={styles.playerText}>
              {player.name}: {player.tokens} tokens
            </Text>
          ))}
          <Button title="Take Turn" onPress={takeTurn} />
          <Button title="Reset Game" onPress={handleReset} />
        </View>
      )}
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
  gameOverContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  winnerText: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
  },
  diceRollContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  diceRollText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'white',
  },
});

export default GameScreen;
