import React from 'react'
import styled from 'styled-components'

const TokenStyled = styled.div`
    width: 130px;
    height: 125px;
    border: 15px solid ${(props) => props.color.base};
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    background: white;
    z-index: 2;
    box-shadow: 0 5px 0px ${(props) => props.color.border};
    cursor: pointer;
    &:active {
        transform: scale(.9);
    }
    .box {
        box-shadow: 0 -4px 0px ${(props) => props.color.border};  
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const colors = {
    paper: {
        base: 'hsl(230, 89%, 62%)',
        border :'hsl(230, 89%, 65%)'
    },
    rock: {
        base: 'hsl(349, 71%, 52%)',
        border :'hsl(349, 70%, 56%)'
    },
    scissors: {
        base: 'hsl(39, 89%, 49%)',
        border : 'hsl(40, 84%, 53%)'
    }
}

export default function Token({ name }) {
    return (
        <TokenStyled color={colors[name]}>
            <div className="box">
             <img src={`./images/icon-${name}.svg`}alt="" />   
            </div>
        </TokenStyled>
    )
}
