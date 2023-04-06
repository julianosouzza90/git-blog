import * as React from 'react'

interface LoaderProps {
  type: string
  active?: boolean
  size?: number
  innerClassName?: string
  color?: string
  sizeUnit?: string
  className?: string
  style?: React.CSSProperties
}

declare const Loader: React.FC<LoaderProps>

export default Loader
