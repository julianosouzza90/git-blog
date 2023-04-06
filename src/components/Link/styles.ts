import styled, { css } from 'styled-components'

interface LinkContainerProps {
  variant?: 'iconPositionLeft'
}

export const LinkContainer = styled.a<LinkContainerProps>`
  display: flex;
  gap: 0.8rem;

  color: ${(props) => props.theme.blue};
  text-decoration: none;
  font-size: ${(props) => props.theme['font-link']};
  font-weight: bold;
  ${(props) =>
    props.variant &&
    css`
      flex-direction: row-reverse;
    `}
`
