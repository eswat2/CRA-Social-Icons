import React from 'react'
import { RadioButtonCheckedIcon, RadioButtonUncheckedIcon } from './icons'

const RadioBtn = ({className, handleClick, value, currentValue}) => {
  const flag = value === currentValue
  const Icon = flag ? RadioButtonCheckedIcon : RadioButtonUncheckedIcon
  const generateClickHandler = (value) => {
    return () => {
      handleClick(value)
    }
  }
  return (
    <Icon className={className} onClick={generateClickHandler(value)} />
  )
}

export { RadioBtn }
export default RadioBtn
