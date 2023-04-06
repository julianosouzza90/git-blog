import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  background: ${(props) => props.theme['base-post']};
  text-decoration: none;
  padding: 3.2rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid transparent;
  margin-bottom: 1rem;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    strong {
      font-size: ${(props) => props.theme['font-title-m']};
      color: ${(props) => props.theme['base-title']};
      flex: 1;
    }
    span {
      font-size: ${(props) => props.theme['font-text-s']};
      color: ${(props) => props.theme['base-span']};
    }
  }
  p {
    font-size: ${(props) => props.theme['font-text-m']};
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
    transition: all 0.2s;
  }
`
