import React from 'react'
import styled from 'styled-components'
import Token from './token'


const TableStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center; 
    justify-items: center;
    grid-gap: 55px;
    margin: 2em 0;
    position: relative;
    & div:nth-of-type(3) {
        grid-column: span 2;
    }
    .triangle {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: url(../images/bg-triangle.svg) no-repeat center; 
    }
`

export default function Table() {
    return (
        <TableStyled>
            <span className="triangle"></span>
            <Token name="rock" />
            <Token name="scissors"/>
            <Token name="paper" />                
        </TableStyled>
    )
}
