import React from 'react'
import styled from 'styled-components'
import Score from './score.js'

const HeaderStyled = styled.div`
    border: 3px solid rgba(255,255,255, .29);
    color: white;
    padding: 12px 12px 12px 23px;
    border-radius: .5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 21px;
        text-transform: uppercase;
        line-height: 16px;
        font-weight: 700;
        margin: 0;
    }
    @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 36px;
      line-height: .9;
    }
  }
`

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Rock <br />Paper <br />Scissors</h1>
            <Score />
        </HeaderStyled>
    )
}
