import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import ChartContainer from './components/ChartContainer';
import Nav from './components/Nav';
import GlobalStyle from './global.styles';


const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Nav />
    <ChartContainer />
  </ThemeProvider>
)

export default App