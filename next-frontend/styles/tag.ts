import styled from "styled-components"

export const TagStyle = styled.div`
  height: 20px;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 15px;
  padding: 0.2rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.6rem;

  p {
    color: ${props => props.theme.colors.bar}
  }

`
