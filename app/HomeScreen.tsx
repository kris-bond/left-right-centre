import React from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Left, Right, Centre</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title="Start Game"
          onPress={() => navigation.navigate('SetupScreen')}
        />
        <Button
          title="Help"
          onPress={() => navigation.navigate('HelpScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
});

export default HomeScreen;
