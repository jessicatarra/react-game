import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Token from './token'
import { WhiteButton }from './button'
import { ScoreContext } from './App'


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
    .in-game {
        text-align: center;
        text-transform: uppercase;
        font-size: .8em;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .results{
        text-align: center;
        text-transform: uppercase;
        font-weight: 700;
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

const elements = [
    'paper',
    'scissors',
    'rock',
]

function Table() {
    const { score, setScore } = useContext(ScoreContext)
    const [results, setResults] = useState('')
    const [housePick, setHousePick] = useState('default')
    const [playing, setPlaying] = useState(false)
    const [pick, setPick] = useState('')
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function launchHousePick() {
        return new Promise ((resolve, reject) => {
            let pick
            const interval = setInterval(() => {
                pick = elements[getRandomInt(0,3)]
                setHousePick(pick)
            }, 75)
            setTimeout(() => {
                clearInterval(interval)
                resolve(pick)
            },2000)
        })
    }
    async function onClick(name) {
        setPlaying(true)
        setPick(name)
        const house = await launchHousePick()
        const results = playWithIa(name, house)
        setResults(results)
        if (results === 'win') {
            setScore(score + 1)
        }
    }



    function playWithIa(pick, housePick) {
        
        if (housePick === pick) {
            return 'draw'
        }
        if (pick === 'paper') {
            if (housePick === 'scissors') {
                return 'lose'
            }
            if (housePick === 'rock') {
                return 'win'
            }
        }
        if (pick === 'scissors') {
            if (housePick === 'paper') {
                return 'win'
            }
            if (housePick === 'rock') {
                return 'lose'
            }
        }
        if (pick === 'rock') {
            if (housePick === 'paper') {
                return 'lose'
            }
            if (housePick === 'scissors') {
                return 'win'
            }
        }
    } 
    function handleTryAgainClick() {
        setPlaying(false)
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
                            <div className="in-game">
                                <Token name={pick} />   
                                <p> Your Picked</p>
                            </div>
                            <div className="in-game">
                                <Token name = {housePick}/> 
                                <p>The house picked</p>
                            </ div>
                            <div className="results">
                                <h2>You {results}</h2>
                                <WhiteButton onClick={handleTryAgainClick}>
                                    Try Again
                                </WhiteButton>
                            </div>
                        </>
                )
            }
   
        </TableStyled>
    )
}

export default Table
