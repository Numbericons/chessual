import React from 'react';
// import Deck from './deck';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { aiMode: true };
  }

  // newHand() {
  //   let deck = new Deck();
  //   const boardArr = this.dealBoard(deck);
  //   const playerArr = this.playerArr(deck);
  //   let stacks = this.state.playerStacks || this.playerStacks();
  //   stacks = this.takeBets(stacks);

  //   this.setState({
  //     deck: deck,
  //     boardCards: boardArr,
  //     playerCards: playerArr,
  //     stacks: stacks,
  //     showTotal: false,
  //     bet: 500,
  //     resolve: false,
  //     currentPlayer: playerArr.length - 1
  //   })
  // }

  resolveHand() {
    let cards = this.state.boardCards;
    let total = Calc.handTotal(cards)
    let ace = this.hasAce(cards);


    while (total < 17 || (total === 17 && ace)) {
      const card = this.state.deck.draw(true);
      cards.push(card);
      total = Calc.handTotal(cards);
      if (card.rank === "A") ace = true;
    }

    this.setState({ boardCards: cards });
  }

  playBtns(players) {
    let currHand = this.state.playerCards[this.state.playerCards.length - 1];
    const split = <button className="btn" onClick={this.split}>SPLIT</button>;
    // const split = Calc.cardVal(currHand[0]) === Calc.cardVal(currHand[1]) ? <button className="btn" onClick={this.split}>SPLIT</button> : "";

    // if (players[this.state.currentPlayer].props.total === 21)

    if (this.state.resolve || players[this.state.currentPlayer].props.total > 20) {
      return this.resetRender();
    } else {
      return (
        <div className="buttons">
          <button className="btn" onClick={this.hitPlayer}>HIT</button>
          <button className="btn" onClick={this.double}>DOUBLE</button>
          <button className="btn" onClick={this.stand}>STAND</button>
          {split}
          <button className="btn" onClick={this.aiHand}>BASIC</button>
          <button className="btn" onClick={this.newHand}>NEW</button>
        </div>
      )
    }
  }

  resetRender() {
    return (
      <div className="reset">
        <button className="btn" onClick={this.newHand}>NEW GAME</button>
      </div>
    )
  }

  newRender() {
    return (
      <div className="new">
        <button className="new-btn" onClick={this.newHand}>NEW GAME</button>
      </div>
    )
  }

  btnInterface(players) {
    if (players) return this.playBtns(players);
    return this.newRender();
  }

  render() {
    let players, board, balance;
    // if (this.state.playerCards) players = this.showPlayers();
    // if (this.state.boardCards) board = this.showBoard();
    const buttonInt = this.btnInterface(players);

    return (
      <div className="border">
        <div className="table">
          <div className="table-head">
            <h1 className="table-head-title">React Jack</h1>
            <h4>Player Balance: ${balance}</h4>
            <div className='board'>
              {board}
            </div>
          </div>
          {buttonInt}
        </div>
      </div>
    )
  }
}