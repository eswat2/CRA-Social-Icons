import React from 'react'
import { FillWrapper, RadioBtn } from '.'

const ColorRadioBtn = ({className, handleClick, color, currentValue}) => {
  return (
    <FillWrapper fill={color.value} title={color.name}>
      <RadioBtn className={className} handleClick={handleClick} value={color.value} currentValue={currentValue} />
    </FillWrapper>
  )
}

export { ColorRadioBtn }
export default ColorRadioBtn
