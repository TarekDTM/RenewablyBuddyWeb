import { Box, Flex, Image, Text } from '@chakra-ui/react'
import {CardProps} from './types'
import React from 'react'

export default function Card(props: CardProps) {

    const {
        description,
        imageSrc,
        type,
        title,
        onClick
    } = props
    return (
        <Box  className=' bg-black active:z-10 shadow-2xl' onClick={onClick}>
            <Flex direction={"column"}>
                <Image alt={type} src={imageSrc} />
                <Text>{title}</Text>
                <Text>{description}</Text>
            </Flex>
        </Box>
    )
}
