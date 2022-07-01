import React, { useState } from 'react';
import Start from './start'
import Funcs from './funcs'
import Result from './result'
/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 'start',
      data: {
        typeCount: 0,
        missCount: 0,
        typeTime: 0,
        //cpm: 0,
        accuracy: 0,
      }
    }
  }

  startGame = () => {
    this.setState({
      window: 'play'
    })
  }

  resetGame = () => {
    this.setState({
      window: 'start'
    })
  }

  getData = (resultData) => {
    this.setState({
      window: 'result',
      data: {
        typeCount: resultData.typeCount,
        missCount: resultData.missCount,
        typeTime: resultData.typeTime,
        //cpm: resultData.cpm,
        accuracy: resultData.accuracy,
      }
    })
  }

  render() {
    const current_window = this.state.window;
    if (current_window === 'start') {
      return (<Start startGame={this.startGame} />)
    } else if (current_window === 'play') {
      return (<Type setResult={this.getData}/>)
    } else if (current_window === 'result') {
      const resultData = this.state.data;
      return (<Result data={resultData} startGame={this.resetGame}/>)
    }
  }
};*/

const Game = () => {
  const [window, setWindow] = useState('start');
  const [datas, setData] = useState(
    {
      typeCount: 0,
      missCount: 0,
      typeTime: 0,
      //cpm: 0,
      accuracy: 0,
    }
  );
  const startGame = () => {
    setWindow('play');
  };
  const resetGame = () => {
    setWindow('start');
  }
  type resultData = {
    typeCount: number,
    missCount: number,
    typeTime: number,
    accuracy: number,
  }
  const getData = (resultData:resultData) => {
    setWindow('result');
    setData(
      {
        typeCount: resultData.typeCount,
        missCount: resultData.missCount,
        typeTime: resultData.typeTime,
        //cpm: resultData.cpm,
        accuracy: resultData.accuracy,
      }
    );
  }
  if (window === 'start') {
    return (<Start startGame={startGame} />);
  } else if (window === 'play') {
    return (<Funcs setResult={getData}/>);
  } else if (window === 'result') {
    return (<Result data={datas} resetGame={resetGame}/>)
  }
}

export default Game;