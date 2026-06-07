import Image from 'next/image'
import React from 'react'
import { Item } from '../../types'
import { Box, Text } from '@chakra-ui/react'

export default function CategoryItem(props : Item) {
  return (
    <Box borderWidth={"thin"} rounded={"2xl"}  backgroundColor={'forestgreen'} width={'8%'}  borderColor={"border"} textAlign={'center'}  padding={""}>
        <Text fontSize={'sm'} >{props.name}</Text>
    </Box>
  )
}
