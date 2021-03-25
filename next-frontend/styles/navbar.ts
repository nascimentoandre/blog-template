import styled from "styled-components"

export const NavbarFlexbox = styled.nav`
  border-bottom: 1px solid black;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.bar};

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.colors.hover1}
  }

  .options {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }

  #searchBar {
    border-radius: 5px;
    border: 0;
  }
`