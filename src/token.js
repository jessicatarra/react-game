import React from 'react'
import styled, { keyframes } from 'styled-components'

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
    transform: rotateY(360deg) scale(1.1);
  }
`

const TokenStyled = styled.div`
    width: 130px;
    height: 125px;
    padding: ${({ name }) => (name === 'default') ? '16px' : '0'};
    border: 15px solid ${(props) => props.color.base};
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    box-shadow: 0 5px 0px ${(props) => props.color.border};
    position: relative;
    z-index: 2;
    cursor: pointer;
    ${({ isShadowAnimated }) => isShadowAnimated && 'box-shadow: 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.04), 0 0 0 0px rgba(255,255,255,.02);'}
    animation: 1s ${({ isShadowAnimated }) => isShadowAnimated ? shadow : ''} forwards;
    &:active {
        transform: scale(.9);
    }
    .box {
        background: ${({ name }) => (name === 'default') ? '#122343' : 'white'};
        box-shadow: 0 -4px 0 ${({ name }) => (name === 'default') ? 'transparent' : '#BABFD4'}; 
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 768px) {
    width: 200px;
    height: 195px;
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
    },
    default: {
        base: 'transparent',
        border : 'transparent'
    }
}

export default function Token({ name = 'default', onClick, isShadowAnimated = false }){
    function handleClick() {
        if (onClick) {
            onClick(name)
        }
    }
    const color = colors[name]
    return (
        <TokenStyled color={color} onClick={handleClick} name={name} isShadowAnimated={isShadowAnimated}>
            <div className="box">
             <img src={`./images/icon-${name}.svg`}alt="" />   
            </div>
        </TokenStyled>
    )
}
