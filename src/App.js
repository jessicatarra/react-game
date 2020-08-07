import React from 'react';
import './App.css';
import Header from './header' 
import styled from 'styled-components'
import Wrapper from './wrapper'

const AppStyled = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  background: #111f43;
  min-height: 100vh;
  padding: 2em;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))
  body {
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
