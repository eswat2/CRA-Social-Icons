import React from 'react'
import styled from 'styled-components'
import { ColorRadioBtn } from './'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const ColorGroup = ({ className, colors, handleClick, currentValue }) => {
  return (
    <Wrapper className={className}>
      { colors.map((color) => {
        return <ColorRadioBtn handleClick={handleClick} color={color} currentValue={currentValue} />
      })}
    </Wrapper>
  )
}

export { ColorGroup }
export default ColorGroup
