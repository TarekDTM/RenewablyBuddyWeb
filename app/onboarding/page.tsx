"use client"
import Image from "next/image";
import { Box, Button, ButtonGroup, Center, Container, Flex, HStack, Input, SliderValueChangeDetails, Stack, Text } from "@chakra-ui/react"

import { PasswordInput, } from "../../components/ui/password-input";
import { useEffect, useState, } from "react";
import { useRouter } from "next/navigation";
import CardPicker from "../../components/ui/cardPicker";
import { CardProps } from "../../components/ui/cardPicker/types";
import { Location } from "../../helpers/globalTypes/types";
import LoadCalculator from "../../components/ui/loadCalculator";

export default function Home() {
    const [selectedCard, setSelectedCard] = useState<number>()
    const [currentStep, setCurrentStep] = useState<number>(1)
    const [powerBill, setPowerBill] = useState<number[]>([])
    const [error, setError] = useState<string>()
    const [location, setLocation] = useState<Location>()



    const handleSelectCard = (id: number) => {

        setSelectedCard(id)
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
                <Container className="bg-white " >

                    <Center height={"full"} display={"flex"} flexDirection={"column"} gapY={8} >
                        {currentStep === 1 &&
                            <Flex textAlign={'center'}  width={'1/2'} direction={'column'} height={'auto'} gapY={8} >
                                <div className="flex flex-col items-start">
                                    <Text >Location</Text>
                                    <Text fontSize={'2xl'}>{` What type of location do you have ?`}</Text>
                                </div>
                                <form className="w-full">
                                    <CardPicker cards={cards} onCardSelect={handleSelectCard} activeCard={selectedCard} />
                                </form>
                            </Flex>
                        }

                        {currentStep === 2 &&
                            <Flex textAlign={'center'}  width={'1/2'} direction={'column'} height={'auto'} gapY={"8"} >
                                <div className="flex flex-col items-start">
                                    <Text >Energy Usage
                                    </Text>
                                    <Text fontSize={'2xl'}>{`What's your average monthly electricity bill?`}</Text>
                                    <Text fontSize={'large'}>{`This helps us size the perfect solar system for your home.`}</Text>
                                </div>
                                <div className="flex flex-row self-center items-center">
                                    <Text fontSize={'6xl'}>{powerBill[0] * 25 || 0 }</Text>
                                    <Text className="self-end" fontSize={'2xl'}>/mo</Text>
                                    

                                </div>
                                <form className="w-full">
                                    <LoadCalculator powerBill={powerBill} onValueChange={(v) =>  setPowerBill(v.value)} />
                                </form>
                            </Flex>
                        }
                        <div className="flex flex-row gap-x-8">
                            <Button disabled={currentStep === 1 ? true : false} onClick={() => setCurrentStep((v) => v - 1)} >Back</Button>
                            <Button onClick={() => setCurrentStep((v) => v + 1)} >Next</Button>
                        </div>

                    </Center>
                </Container>

            </Flex>
        </Box>
    );
}
