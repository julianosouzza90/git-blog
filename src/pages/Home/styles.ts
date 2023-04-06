import styled from 'styled-components'

export const HomeContainer = styled.div``
export const PostsContainer = styled.section`
  display: grid;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
  }
  .notfound {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
    font-size: ${(props) => props.theme['font-title-l']};
  }
`
