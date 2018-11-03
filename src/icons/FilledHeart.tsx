// Generated from src/assets/FilledHeart.svg
import React, { PureComponent, SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  // prettier-ignore
  size?: string | number;
  // prettier-ignore
  fill?: string;
}

const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}

export class SvgFilledHeart extends PureComponent<Props, {}> {
  render() {
    const props = this.props
    const { size, fill } = props
    return (
      <svg
        {...props}
        preserveAspectRatio="xMidYMid meet"
        fontSize={size || 32}
        fill={fill || 'currentColor'}
        style={style}
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
      >
        <path d="M432.42 275.5L255.644 452.277 78.867 275.5c-48.815-48.816-48.815-127.961 0-176.777 48.816-48.815 127.961-48.815 176.777 0 48.815-48.815 127.961-48.815 176.776 0 48.816 48.816 48.816 127.961 0 176.777z" />
      </svg>
    )
  }
}