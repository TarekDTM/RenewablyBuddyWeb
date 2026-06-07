import Image from 'next/image'
import React from 'react'
import { Item, SelectedItem } from '../../types'
import { Text } from '@chakra-ui/react'

export default function SelectedLoadItem(props : SelectedItem) {
  return (
    <div>
      {  props.img &&  <Image width={24} height={24 } alt="Kitchen appliances" src={props.img}/> }
        <Text>{props.name}</Text>
        <div>
          <Text>{props.count}</Text>
        </div>
    </div>
  )
}
