
import React, { useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/react';

type Props = {
  position: number,
  vocab: String,
  translation: String,
  checkValue: any,
}

const Type: React.FC<Props> = (props) => {
  const keepFocus = useRef<HTMLInputElement>(null);
  return (
    <div css={[wrapper, background]}>
      <input css={hideForm} autoFocus //<- Focus on rendering.
        value={
          props.vocab.slice(0, props.position) + ' ' +
          props.vocab.slice(props.position)
        }
        ref={keepFocus}
        onChange={props.checkValue}
        onBlur={() => {
          keepFocus.current?.focus();
        }}
      />
      <div css={textbox}>
        <span css={[text, typed]}>
          {props.vocab.slice(0, props.position)}
        </span>
        <span> </span>
        <span css={[text, waiting]}>
          {props.vocab.slice(props.position)}
        </span>
      </div>
      <div>
        <p>{props.translation}</p>
      </div>
    </div>
  )
}

const background = css`
    background: white;
`

const typed = css`
    color: black;
`

const waiting = css`
    color: #aaaaaa;
`

const hideForm = css`
    color: transparent;
    background: transparent;
    border: none;
    &:focus {
        outline: none;
    }
`

const textbox = css`
    padding: 1rem;
`

const text = css`
    font-size: 100px;
    display: inline;
`

const wrapper = css`
    width: 80%;
    text-align: center;
`

export default Type;