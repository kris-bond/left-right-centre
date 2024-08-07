import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { IPlayer } from './game/models/Player';
import { PLAYER_INITIAL_TOKENS } from './game/constants';
import Slider from '@react-native-community/slider';

const SetupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [numPlayers, setNumPlayers] = useState(3);
  const [playerNames, setPlayerNames] = useState<string[]>(['Player 1', 'Player 2', 'Player 3']);

  const handlePlayerChange = (index: number, name: string) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = name;
    setPlayerNames(newPlayerNames);
  };

  const handleNumPlayersChange = (value: number) => {
    const number = value;
    setNumPlayers(number);

    const newPlayerNames = Array.from({ length: number }, (_, i) => playerNames[i] || `Player ${i + 1}`);
    setPlayerNames(newPlayerNames);
  };

  const startGame = () => {
    const players = playerNames.map((name, index) => ({
      id: index,
      name,
      tokens: PLAYER_INITIAL_TOKENS,
    }));
    navigation.navigate('GameScreen', { players });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Number of Players:</Text>
      <Text style={styles.label}>{numPlayers}</Text>
      <Slider
        style={styles.slider}
        minimumValue={3}
        maximumValue={10}
        step={1}
        value={numPlayers}
        onValueChange={handleNumPlayersChange}
      />
      {Array.from({ length: numPlayers }, (_, i) => (
        <View key={i} style={styles.playerInputContainer}>
          <Text style={styles.label}>Player {i + 1} Name:</Text>
          <TextInput
            style={styles.input}
            value={playerNames[i]}
            onChangeText={(text) => handlePlayerChange(i, text)}
          />
        </View>
      ))}
      <Button title="Start Game" onPress={startGame} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: 'white',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    color: 'white',
  },
  playerInputContainer: {
    marginBottom: 16,
  },
  slider: {
    width: 200,
    color: 'white'
  },
});

export default SetupScreen;
