
"use client"
import Image from "next/image";
import { Box, Button, ButtonGroup, Center, Container, Field, Flex, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"

import { PasswordInput, } from "../../components/ui/password-input";
import { useState} from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const [password, setPassword] = useState<string>("")

    const router = useRouter()
const testRequest = ()=> {

}
    function submit() {
        if (password.length === 0) {
            return
        }
        router.push('/onboarding')
    }
    return (
        <Box className="h-full w-full flex flex-row">
            <Container width={"55%"} className="bg-white flex flex-col" paddingY={8}>
                <Box className="flex flex-row gap-x-4" marginBottom={'10%'} >
                    <Image src="https://picsum.photos/id/100/200/300" width={8} height={8} alt="Renewable buddy logo" />
                    <Text fontSize={'lg'} fontWeight={"bold"}>
                        Renewable buddy
                    </Text>
                </Box>
                <Box marginBottom={'4'} alignSelf={'start'}>
                    <Box >
                        <Text fontSize={"2xl"} fontWeight={"bold"}>
                            Save money
                        </Text>
                        <Text marginBottom={'4'} lineHeight={'normal'} fontSize={"2xl"} fontWeight={"bold"} >
                            Save the planet
                        </Text>
                        <Text>
                            Get your free personalized solar plan in under 5 minutes.
                        </Text>
                    </Box>

                </Box>
                <form action={submit}>
                    <Stack gapY={"8"} marginBottom={8}>
                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Field.Label>   </Field.Label>
                            <Input placeholder="Email" name="Email" />
                        </Field.Root>
                        <Field.Root  >

                            <Field.Label>Password</Field.Label>
                            <PasswordInput placeholder="Password" value={password} name="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Field.Root>
                        <ButtonGroup>
                            <Button rounded={'2xl'} width={'full'} disabled={password.length > 0 ? false : true} onClick={() => submit()} size={"lg"} variant={"solid"} colorPalette={"red"} >Login</Button>
                        </ButtonGroup>
                        <HStack>
                            <Separator flex="1" />
                            <Text fontSize={'sm'} fontWeight={'bold'} color={'darkgrey'} flexShrink="0">or continue with
                            </Text>
                            <Separator flex="1" />
                        </HStack>
                        <Box gapX={"2%"} className="w-full flex justify-between">
                            <Button rounded={'2xl'} variant={"solid"} width={"49%"} onClick={() => submit()} size={"lg"} colorPalette={"red"} >Google</Button>
                            <Button rounded={'2xl'} width={"49%"} variant={"solid"} onClick={() => submit()} size={"lg"} colorPalette={"white"} >Apple</Button>
                        </Box>
                    </Stack>
                </form>
                <Box className="self-center">
                    <Text>{`Don't have an account? `}
                        <Text as={'span'} className="hover:underline cursor-pointer">Create one free</Text></Text>
                </Box>
            </Container>
            <Container bgImage={'url(https://picsum.photos/id/100/200/300)'} bgRepeat={'no-repeat'} backgroundSize={'cover'} width={"45%"} className=" bg-['url(https://picsum.photos/id/100/200/300)']" >
            </Container>
        </Box>
    );
}
