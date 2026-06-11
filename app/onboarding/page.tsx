"use client"
import Image from "next/image";
import { Box, Button, ButtonGroup, Center, Container, Flex, HStack, Input, Stack, Text } from "@chakra-ui/react"

import { PasswordInput, } from "../../components/ui/password-input";
import { useEffect, useState, } from "react";
import { useRouter } from "next/navigation";
import CardPicker from "../../components/ui/cardPicker";
import { CardProps } from "../../components/ui/cardPicker/types";
import { Location } from "../../helpers/globalTypes/types";

export default function Home() {
    const [selectedCard, setSelectedCard] = useState<number>()
    const [error, setError] = useState<string>()
    const [location, setLocation] = useState<Location>()
    useEffect(() => {
        console.log(location)


    }, [location])


    const handleSelectCard = (id: number) => {

        setSelectedCard(id)
        console.log("🚀 ~ handleSelectCard ~ id:", selectedCard)
    }
    const cards = [
        {
            imageSrc: "https://picsum.photos/id/100/200/300",
            title: "Residential",
            description: 'For villas,apartment and family homes',
            type: "Residential"
        },
        {
            imageSrc: "https://picsum.photos/id/100/200/300",
            title: "Farm",
            description: 'For agriculture,cattle and desert farms',
            type: "Residential"
        },
    ]
    const router = useRouter()
    const navigateToLoadCalculator = () => {
        router.push('loadCalculator')
    }

    const askForLocationPermisson = () => {
        if (!navigator.geolocation) {
            setError("Geolocation is no supported or permission denied")
            return
        }
        navigator.geolocation.getCurrentPosition((p) => {
            console.log(p);
            setLocation({
                lat: p.coords.latitude,
                lng: p.coords.longitude,
            })
        }, (err) => setError(err.message), {
            enableHighAccuracy: true,
            timeout: 10000,
        })
    }


    return (
        <Box height={"vh"}>

            <Flex height={"full"} justify={"space-between"}>
                <Container className="bg-white" >
                    <Center height={"full"}>
                        <Flex textAlign={'center'} width={'1/2'} direction={'column'} justifyContent={'space-between'} height={'1/2'} >
                            <Text >OnBoarding</Text>
                            <Text> What type of location do you have ?</Text>
                            <form className="w-full">
                                <CardPicker cards={cards} onCardSelect={handleSelectCard} activeCard={selectedCard} />
                            </form>
                            <Button onClick={navigateToLoadCalculator} >Next</Button>
                        </Flex>
                    </Center>
                </Container>

            </Flex>
        </Box>
    );
}
