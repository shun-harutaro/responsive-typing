/** @jsx jsx */
import React from 'react';
import {jsx, css} from '@emotion/react'
import  Button  from '@mui/material/Button';
import BasicTable from './BasicTable';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  resetGame: any,
  data: object,
}

const Result: React.FC<Props> = (props) => {
  return (
    <div css={body}>
        <div css={wrapper}>
          <Typography variant="h6" component="div" sx={{ m: 2 }}>Result</Typography>
          <Grid container >
            <BasicTable data={props.data} />
          </Grid>
          <Button 
            sx={{ m: 2 }}
            onClick={props.resetGame}
            variant='contained'>
              one more
          </Button>
        </div>
      </div>
  )
}

const body = css`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`

const wrapper = css`
  background: white;
  width: 50%;
  text-align: center;
`

export default Result;