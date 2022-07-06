/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'

const Start: React.FC<{ startGame: any }> = ({ startGame }) => {
  return (
    <div css={body}>
      <div css={wrapper}>
        <Typography variant="h6" component="div" sx={{ m: 2 }}>Let's typing</Typography>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={startGame}>
          start
        </Button>
      </div>
    </div>
  )
}

export default Start;

const body = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`

const wrapper = css`
  background: white;
  width: 80%;
  height: 50vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`