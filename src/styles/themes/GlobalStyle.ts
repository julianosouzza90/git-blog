import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  font-size: 62.5%;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus{
    outline:0;
}
body{
  background: ${(props) => props.theme['base-background']};
  font-family: 'Nunito', sans-serif;
  font-size: 1.6rem;
  padding-bottom:40px;
}
  `
