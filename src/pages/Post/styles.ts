import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
`
export const PostContent = styled.div`
  padding: 4rem 3.2rem;
  line-height: 2.6rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => props.theme.blue};
  }
  p {
    color: ${(props) => props.theme['base-text']};
    line-height: 2.9rem;
    font-size: ${(props) => props.theme['font-text-m']};
    margin-bottom: 2rem;
  }
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }
`
