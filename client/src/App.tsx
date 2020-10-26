import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Chart from './components/Chart';
import Nav from './components/Nav';
import GlobalStyle from './global.styles';


const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Nav />
    <Chart />
  </ThemeProvider>
)

export default App