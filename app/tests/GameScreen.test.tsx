import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import GameScreen from '../GameScreen';
import { IPlayer } from '../game/models/Player';

// Mock hooks
jest.mock('../game/hooks/useGameInitialise', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    players: [{ id: '1', name: 'Player 1', tokens: 3 }],
    setPlayers: jest.fn(),
    resetGame: jest.fn(),
    gameOver: false,
    winner: '',
  })),
}));

jest.mock('../game/hooks/useGameUpdate', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    currentPlayer: { id: '1', name: 'Player 1', tokens: 3 },
    takeTurn: jest.fn(),
    diceRolls: ['L', 'R', 'C'],
  })),
}));

describe('GameScreen', () => {
  const initialPlayers: IPlayer[] = [{ id: 1, name: 'Player 1', tokens: 3 }];

  it('renders correctly', () => {
    const { getByText } = render(
      <GameScreen route={{ params: { players: initialPlayers } }} />
    );

    // Check if title is rendered
    expect(getByText('Player 1: 3 tokens')).toBeTruthy();
    expect(getByText('Current Player: Player 1')).toBeTruthy();
  });

  /*
  it('handles take turn button press', () => {
    const { getByText } = render(
      <GameScreen route={{ params: { players: initialPlayers } }} />
    );

    
    // Mock implementation of takeTurn
    const takeTurn = jest.fn();
    (
      require('../game/hooks/useGameUpdate').default as jest.Mock
    ).mockImplementation(() => ({
      currentPlayer: { id: 1, name: 'Player 1', tokens: 3 },
      takeTurn,
      diceRolls: ['L', 'R', 'C'],
    }));

    fireEvent.press(getByText('Take Turn'));

    expect(takeTurn).toHaveBeenCalled();
  });

  it('handles reset game button press', () => {
    const { getByText } = render(
      <GameScreen route={{ params: { players: initialPlayers } }} />
    );

    // Mock implementation of resetGame
    const resetGame = jest.fn();
    (
      require('../game/hooks/useGameInitialise').default as jest.Mock
    ).mockImplementation(() => ({
      players: [{ id: 1, name: 'Player 1', tokens: 3 }],
      setPlayers: jest.fn(),
      resetGame,
      gameOver: false,
      winner: '',
    }));

    fireEvent.press(getByText('Reset Game'));

    expect(resetGame).toHaveBeenCalled();
  });
  */
});
