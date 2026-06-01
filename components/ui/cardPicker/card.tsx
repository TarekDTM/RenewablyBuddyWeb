import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { CardProps } from './types'
import React from 'react'

export default function Card(props: CardProps) {

    const {
        description,
        imageSrc,
        active,
        type,
        title,
        onclick,
    } = props
    return (
        <Box onClick={onclick} className={` ${active === true ? 'bg-[#065F46] shadow-2xl' : 'bg-white'} rounded-2xl p-12 border-8 border-red-700 border-solid w-3/4  hover:cursor-pointer `} >
            <Flex gapY={'8'} padding={'8'} alignItems={'center'} textAlign={'center'} direction={"column"}justifyContent={'space-between'}>
                
                <Image alt={type} width={'8'} height={'8'} src={imageSrc} />
                <Text fontSize={'xl'}>{title}</Text>
                <Text fontSize={'sm'}>{description}</Text>
            </Flex>
        </Box>
    )
}
