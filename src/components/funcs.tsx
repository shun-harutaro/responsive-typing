/** @jsx jsx */
import React, { useState } from 'react';
import {jsx, css, keyframes} from '@emotion/react'
import Vocab from '../vocab.json'
import Type from './type'
import { format } from 'path';

type Props = {
  setResult: any,

}

const Funcs: React.FC<Props> = (props) => {
  const [param, setParam] = useState(
    {
      vocab: Vocab[0].th,
      count: 0,
      translation: Vocab[0].en,
      position: 0,
      typeCount: 0,
      missCount: 0,
      startTime: 0,
    }
  )
  const setTime = () => {
    setParam({ ...param, startTime: Date.now() });
  }
  const getVocab = (count:number) => {
    const next = {
      vocab: Vocab[count].th,
      translation: Vocab[count].en,
    };
    return next;
  }
  const cssMistake = () => {
    background = css`
      animation: ${miss}, 0.5s;
      animation-fill-mode: forwards;
    `
    setTimeout(() => {
      background = css`
        background: lightgray;
      `
    }, 1);
  }
  const ms2min = (msTime: number) => {
    const min = Math.floor(msTime / 60000);
    const mm = ('00' + min).slice(-2);
    const ms = ('0000' + (msTime % 60000)).slice(-5);
    const formatTime = `${mm}:${ms.slice(0, 2)}.${ms.slice(2, 5)}`;
    return formatTime;
  } 
  const calcAccuracy = (type:number, miss:number) => {
    const correct = type - miss;
    const rate = Math.floor(correct / type * 100);
    return rate;
  } 
  const finish = () => {
    const finishTime = Date.now();
    const typeCount = param.typeCount;
    const missCount = param.missCount;
    const typeTime = finishTime - param.startTime;
    const formatTime = ms2min(typeTime);
    const accuracy = calcAccuracy(typeCount, missCount) + '%';
    const resultData = {
      typeTime: formatTime,
      typeCount: typeCount,
      missCount: missCount,
      accuracy: accuracy,
    }
    props.setResult(resultData);
  }
  const checkValue = (event:any) => {
    const value = event.target.value;
    const c = value.charAt(value.length - 1);
    let vocab = param.vocab;
    let translation = param.translation;
    let position = param.position;
    let count = param.count;
    let typeCount = param.typeCount + 1;
    let missCount = param.missCount;

    if (c === vocab[position]) {
      console.log("correct")
      position += 1;
    } else {
      cssMistake();
      missCount += 1;
      console.log("incorrct")
    }
    if (vocab.length === position) {
      if (count === Vocab.length - 1) {
        finish();
        return false;
      }
      count += 1;
      const next = getVocab(count);
      vocab = next.vocab;
      translation = next.translation
      position = 0;
    }
    setParam({
      ...param,
      vocab: vocab,
      count: count,
      translation: translation,
      position: position,
      missCount: missCount,
      typeCount: typeCount,
    });
  }

  const data = {
    vocab: param.vocab,
    position: param.position,
    translation: param.translation,
    checkValue: checkValue,
  };

  return (
    <div css={[body, background]}>
      <Type {...data} />
    </div>
  )
}


const body = css`
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const miss = keyframes`
  100% {
    background: #f003;
  }
`

let background = css`
  background: lightgray;
`

export default Funcs;