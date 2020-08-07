import React from 'react';
import './App.css';
import Header from './header' 
import styled from 'styled-components'
import Wrapper from './wrapper'
import Table from './table'
import Rules from './rules'

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  color: white;
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
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
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />         
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
