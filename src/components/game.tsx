import React, { useState } from 'react';
import Start from './start'
import Funcs from './funcs'
import Result from './result'

const Game:React.FC = () => {
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