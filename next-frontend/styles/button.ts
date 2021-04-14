import styled from "styled-components"

export const BtnStyle = styled.button`
  font-size: 1.2rem;
  padding: 0.4rem 1.2rem;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${props => props.theme.colors.bar};
  margin-top: 1rem;
  cursor: pointer;

  :hover {
    color: white;
    box-shadow: 3px 3px 6px black;
  }

  a {
    color: black;
    text-decoration: none;
  }
`