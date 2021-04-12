import styled from "styled-components"

export const HomeContainer = styled.div`
  margin: 2rem 5vw 5rem;
`

export const PostFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const PostStyle = styled.div`
  border: 1px solid black;
  width: 400px;
  border-radius: 7px;
  margin-bottom: 4rem;
  padding-top: 0.8rem;

  a {
    color: ${props => props.theme.colors.hover1};
    text-decoration: none;
  }

  h1 {
    font-size: 1.8rem;
  }

  .date {
    color: ${props => props.theme.colors.date};
    font-size: 0.8rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .info {
    padding: 0rem 1rem 0rem;
    margin-top: -1rem;
  }

  .tags, .tag-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .tag-container {
    width: 300px;
  }

  .tags a {
    color: black;
  }
`
