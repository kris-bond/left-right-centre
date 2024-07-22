class Player {
    name: string;
    tokens: number;

    constructor(name: string, tokens: number){
        this.name = name;
        this.tokens = tokens;
    }

    addTokens(amount: number){
        this.tokens += amount;
    }

    removeTokens(amount: number){
        this.tokens -= amount;
    }
}

export default Player;