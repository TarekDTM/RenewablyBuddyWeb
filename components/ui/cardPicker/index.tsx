import React from 'react'
import { CardPickerProps } from './types';
import { Box, Flex } from '@chakra-ui/react';
import Card from './card';

export default function CardPicker({ cards, onCardSelect, activeCard }: CardPickerProps) {



    return (
        <Box >
            <Flex direction={"row"} justifyContent={"space-between"} gapX={"8"}>
                {
                    cards.map((card, idx) => (
                        <Card active={activeCard === idx ? true : false}
                            onclick={() => onCardSelect(idx)}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            type={card.type}
                            description={card.description}
                            key={idx} />
                    ))
                }

            </Flex>
        </Box>
    )
}
