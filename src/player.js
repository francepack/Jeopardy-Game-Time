class Player {
  constructor(name, score = 0, active = false, wager, playerNum){
    this.name = name;
    this.score = score;
    this.active = active;
    this.wager = wager;
    this.playerNum = playerNum;
  };

  updateScore(resultScore) {
    this.score += resultScore;
  };

  wagerRange() {
    //Minimum is 5, Max is the highest of either players current score or highest available clue value
  };
}


export default Player;
