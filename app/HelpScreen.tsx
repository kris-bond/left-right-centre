import { View, Text, Button, StyleSheet } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How To Play</Text>
      <Text style={styles.helpText}>
        Each player begins with 3 tokens. Players take turns rolling dice equal
        to the number of tokens they have (up to three die). The die can land
        on; 'L' (left), 'R' (right), 'C' (centre) or '·'
      </Text>
      <Text style={styles.helpText}>
        The player who rolls the dice passes their tokens in the direction they
        rolled, where centre means the tokens are taken out of the game and '·'
        means the player keeps their token.
      </Text>
      <Text style={styles.helpText}>
        The last player with tokens is the winner.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  helpText: {
    color: 'black',
  },
});
