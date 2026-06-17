
import React from 'react'
import { LoadCalculatorProps } from './types'

export default function LoadCalculator(props: LoadCalculatorProps) {




  return (
    <div>
      <Slider value={[props.powerBill ? props.powerBill :0]} onValueChange={(v) => props.setPowerBill(v)} />

    </div>
  )
}
