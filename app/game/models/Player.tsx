export interface IPlayer {
    id: number;
    name: string;
    tokens: number;
}

class Player {
    id: number;
    name: string;
    tokens: number;

    constructor(id: number, name: string, tokens: number){
        this.id = id;
        this.name = name;
        this.tokens = tokens;
    }

}

export default Player;