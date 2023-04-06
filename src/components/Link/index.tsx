import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'
type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconPositionLeft'
}
export function Link({ text, icon, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {text}
      {icon && icon}
    </LinkContainer>
  )
}
