import React from 'react'
import styled from 'styled-components'

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
    }
    p {
        color: hsl(229, 25%, 31%);
        font-size: 40px;
        margin: 0;
        font-weight: 700;
        letter-spacing: -5px;
        position: relative;
        left: -2.5px;
    }
`

export default function Score() {
    return (
        <ScoreStyle>
            <small>Score</small>
            <p>12</p>
        </ScoreStyle>
    )
}
