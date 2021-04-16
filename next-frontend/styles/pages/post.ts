import styled from "styled-components"

export const PostContainer = styled.div`
  margin: 2rem 5vw 5rem;

  h1 {
    font-size: 2.5rem;
  }

  .date {
    color: ${props => props.theme.colors.date};
    font-size: 1rem;
  }
`