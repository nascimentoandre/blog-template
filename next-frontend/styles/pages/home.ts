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
  height: 450px;
  border-radius: 7px;
  margin-bottom: 4rem;

  a {
    color: ${props => props.theme.colors.hover1};
    text-decoration: none;
  }

  .info {
    padding: 0rem 1rem 0rem;
    margin-top: -1rem;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .tags a {
    color: black;
  }
`