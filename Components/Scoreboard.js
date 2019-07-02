import React, { Component } from 'react';
import styled from '@emotion/styled';
import ScoreBoardAnimate from '../Components/assets.js/scoreBoardAnimate';

const ScoreBoard = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: repeat(5, auto);
  font-family: sans-serif;

  .Players{
    width: 100%;
    display: block;
    margin: 0 auto;
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;

    .Player1{
      font-size: 20px;
      display: grid;
      grid-template-columns: 50% 50%;
      align-self: center;
      align-items: center;
      text-align: center;
      grid-column-start: 1;
      grid-column-end: 3;

    }
    button{
      grid-column-start: 1;
      grid-column-end: 3;
      width: 150px; 
      height: 30px;
      margin: 0 auto;
      border-radius: 14px;
    }
  }
  
  .title{
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
  }

  .name{
    margin: 0;
    min-height: 40px;
    font-size: 30px;
    grid-row-start: 1;
    grid-row-end: 2;
  }

	.team1, .team2 {
		grid-column-start: 0;
		width: 100%;
		text-align: center;
    grid-row-start: 2;

    .score{
      font-weight: bold;
      font-family: sans-serif;
      font-size: 100px;
      margin-top: 10px;
      margin-bottom: 30px;
    }
		.scoreButtons {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 19.5%);
      grid-template-rows: repeat(3, 80px);
      grid-gap: 3px;
      margin-bottom: 40px;

      .Team1Score, .Team2Score{
        padding: 0;
        grid-column-start: 2;
        grid-column-end: 5;
        font-size: 36px;
      }
		}
	}
`;

const RemoveScore = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: background-repeat(3,100px);
  
  h3{
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  button{
    width: 120px;
    height: 40px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
  .scoreDeduction{
    width: 60px;
    height: 40px;
  }

  .teamSelected{
    background-color: #2c3965;
    color: white;
  }
`;

const ResetButton = styled.button`
  font-family: sans-serif;
  height: 40px;
  width: 120px;
  display: block;
  margin: 0 auto;
  font-size: 20px;
  margin-bottom: 30px;
`;

const Stats = styled.div`
  margin-top: 20px; 
  font-family: sans-serif;

  
`;

const PlayerStats = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;

  @media(max-width: 450px){
    grid-template-columns: 100%;
  }
`;

const Head2Head = styled.div`
  text-align: center;
`;

const TeamOne = 'TeamOneScore';
const TeamTwo = 'TeamTwoScore';

function ScoreAnimate(TEAM) {
  document.getElementById(TEAM).classList.add('bucket');
  setTimeout(() => {
    document.getElementById(TEAM).classList.remove('bucket');
  }, 1500);
}

class Scoreboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      P1NAME: 'Player 1',
      P2NAME: 'Player 2',
      P1SCORE: 0,
      P2SCORE: 0,
      MODE: 'view',
    }
  }

  TeamOne3 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 3 });
    ScoreAnimate(TeamOne);
  }
  TeamOne2 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 2 });
    ScoreAnimate(TeamOne);
  }
  TeamOne1 = () => {
    this.setState({ P1SCORE: this.state.P1SCORE + 1 });
    ScoreAnimate(TeamOne);
  }
  TeamTwo3 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 3 });
    ScoreAnimate(TeamTwo);
  }
  TeamTwo2 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 2 });
    ScoreAnimate(TeamTwo);
  }
  TeamTwo1 = () => {
    this.setState({ P2SCORE: this.state.P2SCORE + 1 });
    ScoreAnimate(TeamTwo);
  }

  Reset = () => {
    this.setState({
      P1NAME: 'Player 1',
      P2NAME: 'Player 2',
      P1SCORE: 0,
      P2SCORE: 0,
    })
  }

  render() {
    return (
      <>
        <ScoreBoardAnimate>
          <ScoreBoard>

            <div className="team1">
              <h3 className="name">{this.state.P1NAME}</h3>
              <ScoreBoardAnimate className="score" id="TeamOneScore"> {this.state.P1SCORE} </ScoreBoardAnimate>

              <div className="scoreButtons">
                <button className="Team1Score" type="button" onClick={this.TeamOne3}>3</button>
                <button className="Team1Score" type="button" onClick={this.TeamOne2}>2</button>
                <button className="Team1Score" type="button" onClick={this.TeamOne1}>1</button>
              </div>
            </div>

            <div className="team2">
              <h3 className="name">{this.state.P2NAME}</h3>
              <ScoreBoardAnimate className="score" id="TeamTwoScore"> {this.state.P2SCORE} </ScoreBoardAnimate>

              <div className="scoreButtons">
                <button className="Team2Score" type="button" onClick={this.TeamTwo3}>3</button>
                <button className="Team2Score" type="button" onClick={this.TeamTwo2}>2</button>
                <button className="Team2Score" type="button" onClick={this.TeamTwo1}>1</button>
              </div>
            </div>

          </ScoreBoard>
        </ScoreBoardAnimate>

        <ResetButton type="button" onClick={this.Reset}>Reset</ResetButton>
      </>
    );
  }
}

export default Scoreboard;
