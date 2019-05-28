import React from 'react'
import { FillWrapper, RadioBtn } from '.'

const ColorRadioBtn = ({className, handleClick, value, currentValue}) => {
  return (
    <FillWrapper fill={value}>
      <RadioBtn className={className} handleClick={handleClick} value={value} currentValue={currentValue} />
    </FillWrapper>
  )
}

export { ColorRadioBtn }
export default ColorRadioBtn
