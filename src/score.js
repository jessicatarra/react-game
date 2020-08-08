import React, { useContext } from 'react'
import styled from 'styled-components'
import { ScoreContext } from './App'

const ScoreStyle = styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: .5em;
    width: 80px;
    small {
        color: hsl(229, 64%, 46%);
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 1px;
    }
    p {
        color: hsl(229, 25%, 31%);
        font-size: 40px;
        margin: 0;
        font-weight: 700;
        letter-spacing: -1px;
        position: relative;
        left: -2.5px;
    }
    @media screen and (min-width: 768px) {
    padding: 10px 20px;
    small {
      font-size: 16px;
    }
    p {
      font-size: 60px;
    }
    }
`

export default function Score() {
    const { score } = useContext(ScoreContext)
    return (
        <ScoreStyle>
            <small>Score</small>
            <p>{score}</p>
        </ScoreStyle>
    )
}
