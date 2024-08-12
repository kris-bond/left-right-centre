import { StyleSheet } from 'react-native';

export const Colors = {
  primary: '#FDFFFC', //white
  secondary: '#0C090D', //black
  background: '#FDFFFC', //white
  'background-dark': '161925', //light black
  textPrimary: '#0C090D', //black
  textSecondary: '#FDFFFC', //white
  green: '28965A',
  blue: '36558F',
  black: '0C090D',
};

export const FontSizes = {
  large: 24,
  medium: 18,
  small: 14,
};

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: FontSizes.medium,
  },
  headerText: {
    fontSize: FontSizes.large,
    color: Colors.textPrimary,
    fontWeight: 'bold',
  },
  // Add other common styles here
});
