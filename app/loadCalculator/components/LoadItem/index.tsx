import Image from 'next/image'
import React from 'react'
import { Item } from '../../types'
import { Box, Text } from '@chakra-ui/react'

export default function LoadItem(props : Item) {
  return (
    <Box className='flex flex-col justify-between items-center' borderWidth={'thin'} width={'15%'} borderColor={"border"} >

      {  props.img &&  <Image width={24} height={24} alt="Toaster 4kw" src={props.img}/> }
        <Text fontSize={'xl'}>{props.name}</Text>
    </Box>
  )
}
