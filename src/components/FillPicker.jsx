import React from 'react'
import styled from 'styled-components'
import { colors } from '../utils'
import { FillWrapper, ColorGroup } from './'

const Wrapper = styled.div``

const keys = Object.keys(colors)
const colorValues = keys.map((key) => { return colors[key] })
const defaultFill = colorValues[0]

const FillPicker = ({ className, children }) => {
  const [ fill, setFill ] = React.useState(defaultFill)
  const handleClick = (color) => {
    setFill(color)
  }
  return (
    <Wrapper className={className}>
      <ColorGroup handleClick={handleClick} colors={colorValues} currentValue={fill} />
      <FillWrapper fill={fill} className={className}>{children}</FillWrapper>
    </Wrapper>
  )
}

export { FillPicker }
export default FillPicker
