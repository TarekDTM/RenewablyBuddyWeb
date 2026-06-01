"use client"
import Image from "next/image";
import { Box, Button, ButtonGroup, Center, Container, Flex, Input, Stack, Text } from "@chakra-ui/react"

import { PasswordInput, } from "../../components/ui/password-input";
import { useState, form } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [password, setPassword] = useState<string>("")

    const router = useRouter()

    function submit() {
        if (password.length === 0) {
            return
        }
        router.push('/onboarding')
    }
    return (
        <Box height={"vh"}>

            <Flex height={"full"} justify={"space-between"}>
                <Container className="bg-white" >
                    <Center  height={"full"}>
                       <Flex width={'1/2'} direction={'column'} >
                        <Text >LOGIN</Text>
                        <form className="w-full">
                            <Stack gapY={"8"}>

                                <Input placeholder="Email" name="Email" />
                                <PasswordInput placeholder="Password" value={password} name="Password" onChange={(e) => setPassword(e.target.value)} />
                                <ButtonGroup>
                                    <Button disabled={password.length > 0 ? false: true} onClick={() => submit()} size={"xl"} variant={"solid"} colorPalette={"red"} >Login</Button>
                                </ButtonGroup>
                            </Stack>
                        </form>
                       </Flex>
                    </Center>
                </Container>
                <Container className="bg-red-900" >
                    <h1>LOGIN</h1>
                </Container>
            </Flex>
        </Box>
    );
}
