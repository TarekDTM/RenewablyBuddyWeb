
import React from 'react'
import { LoadCalculatorProps } from './types'
import CustomSlider from '../slider'

export default function LoadCalculator(props: LoadCalculatorProps) {




  return (
    <div> 
      <CustomSlider value={props.powerBill || [0] } onValueChange={props.onValueChange}  />

    </div>
  )
}
