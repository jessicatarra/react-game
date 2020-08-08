import React, { createContext, useState }  from 'react';
import './App.css';
import Header from './header' 
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'
import Rules from './rules'

export const ScoreContext = createContext()

const AppStyled = styled.main`
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  color: white;
  font-family: 'Barlow Semi Condensed', sans-serif;
  .app-content {
    padding: 2em;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

function App() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={
      {score,
      setScore}
    }>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />         
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
    
  );
}

export default App;
