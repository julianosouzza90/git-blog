import styled from 'styled-components'

export const PostHeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  padding: 3.2rem;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  h3 {
    font-size: ${(props) => props.theme['font-title-l']};
    color: ${(props) => props.theme['base-title']};
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
    margin-top: 0.8rem;
    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`
