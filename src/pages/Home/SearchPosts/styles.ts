import styled from 'styled-components'

export const SearchPostsContainer = styled.form`
  margin-top: 7.2rem;
  margin-bottom: 4.8rem;
  input {
    width: 100%;
    padding: 1.2rem;
    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    font-size: ${(props) => props.theme['font-text-m']};
    color: ${(props) => props.theme['base-text']};
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
      font-size: ${(props) => props.theme['font-text-m']};
    }
    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2rem;

    h3 {
      font-size: ${(props) => props.theme['font-title-s']};
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: bold;
    }
    span {
      font-size: ${(props) => props.theme['font-text-s']};
      color: ${(props) => props.theme['base-span']};
    }
  }
`
