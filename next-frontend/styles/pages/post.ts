import styled from "styled-components"

export const PostContainer = styled.div`
  margin: 2rem 5vw 5rem;

  h1 {
    font-size: 2.5rem;
  }

  .content {
    font-size: 1.2rem;
  }

  .date {
    color: ${props => props.theme.colors.date};
    font-size: 1rem;
  }

  .return {
    font-size: 1rem;
    padding: 0.7rem 2rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: ${props => props.theme.colors.bar};
    margin-top: 4rem;
  }

  .return a {
    color: black;
    text-decoration: none;
  }

  .return:hover {
    box-shadow: 3px 3px 6px black;
  }

  .return a:hover {
    color: white;
  }
`