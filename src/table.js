import React, { useState } from 'react'
import styled from 'styled-components'
import Token from './token'


const TableStyled = styled.div`
    display: grid;
    grid-template-columns: 130px 130px;
    justify-content: center; 
    justify-items: center;
    grid-gap: 70px;
    margin: 2em 0;
    position: relative;
    & div:nth-of-type(3) {
        grid-column: span 2;
    }
    .triangle {
        display: ${({ playing }) => !playing ? 'block' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: url(./images/bg-triangle.svg) no-repeat center; 
    }
`

export default function Table() {
    const [playing, setPlaying] = useState(false)
    const [pick, setPick] = useState('')
    function onClick(name) {
        setPlaying(true)
        setPick(name)
    }
    return (
        <TableStyled  playing={playing}>
            <span className="triangle"></span>
            {
                !playing ? (
                    <>
                        <Token name="rock" onClick={onClick} />
                        <Token name="scissors" onClick={onClick} />
                        <Token name="paper" onClick={onClick} />  
                    </>
                ) : (
                        <>
                            <div>
                                <Token name={pick} onClick={onClick} />   
                                <p> Your Picked</p>
                            </div>
                            <div>
                                <p>The house picked</p>
                            </div>
                        </>
                )
            }
   
        </TableStyled>
    )
}
