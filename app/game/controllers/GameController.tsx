import Player from '../models/Player';
import { GAME_CONSTANTS } from '../constants';

class GameController {
  player: Player;

  constructor() {
    this.player = new Player('Player One', GAME_CONSTANTS.PLAYER_INITIAL_TOKENS);
  }

  startGame() {
    // Logic to start the game
  }

  updateGame() {
    // Logic to update the game state
  }
}

export default GameController;
