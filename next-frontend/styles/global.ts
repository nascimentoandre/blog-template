import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: "Spartan", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    overflow-y: auto;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
   font-family: "Roboto Slab", sans-serif; 
  }

  .button:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`
