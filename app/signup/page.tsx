"use client"

import Image from "next/image";
import { Box, Button, ButtonGroup, Container, Field, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"

import { PasswordInput, } from "../../components/ui/password-input";
import { signup } from "../../helpers/auth/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupForm, signupSchema } from "../../helpers/auth/schema";
import { useYupValidationResolver } from "../../hooks/api/useYupValidation";
import { SubmitEventHandler } from "react";
import { getQueryClient } from "../get-query-client";
import { useMutation } from "@tanstack/react-query";

export default function SignUp() {


    const resolver = useYupValidationResolver(signupSchema)
    const { register, handleSubmit } = useForm<SignupForm>({ resolver })
    const mutation = useMutation({
        mutationKey: ["User"],
        mutationFn: async (data: SignupForm) => await signup(data)


    })
    const handleEmailSubmit: SubmitHandler<SignupForm> = async (data) => {
        const formattedData = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        try {
            mutation.mutate(formattedData)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Box className="h-full w-full flex flex-row">
            <Container width={"50%"} className=" flex flex-col" margin="0" padding={'0'} paddingY={8}>
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
                <form onSubmit={handleSubmit(handleEmailSubmit)}>
                    <Stack gapY={"8"} marginBottom={8}>
                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input placeholder="name"  {...register('name')} />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input placeholder="email"  {...register('email')} />
                        </Field.Root>

                        <Field.Root >
                            <Field.Label>Password</Field.Label>
                            <PasswordInput placeholder="password"  {...register('password')} />
                        </Field.Root>

                        <Field.Root >
                            <Field.Label>Confirm password</Field.Label>
                            <PasswordInput placeholder="Confirm password"  {...register('confirmPassword')} />
                        </Field.Root>

                        <ButtonGroup>
                            <Button type="submit" rounded={'2xl'} width={'full'} size={"lg"} variant={"solid"} colorPalette={"red"} >Login</Button>
                        </ButtonGroup>
                    </Stack>
                        <HStack>
                            <Separator flex="1" />
                            <Text fontSize={'sm'} fontWeight={'bold'} color={'darkgrey'} flexShrink="0">or continue with
                            </Text>
                            <Separator flex="1" />
                        </HStack>
                        <Box gapX={"2%"} className="w-full flex justify-between">
                            <Button type="submit" rounded={'2xl'} variant={"solid"} width={"49%"} onClick={() => console.log("google")} size={"lg"} colorPalette={"red"} >Google</Button>
                            <Button type="submit" rounded={'2xl'} width={"49%"} variant={"solid"} onClick={() => console.log("Apple")} size={"lg"} colorPalette={"white"} >Apple</Button>
                        </Box>
                </form>
                <Box className="self-center">
                    <Text>{`Don't have an account? `}
                    <Text as={'span'} className="hover:underline cursor-pointer">Create one free</Text></Text>
                </Box>
            </Container>
            <Container width={"50%"} margin="0" padding={'0'} bgImage={'url(https://picsum.photos/id/100/200/300)'} bgRepeat={'no-repeat'} backgroundSize={'cover'} width={"45%"} className=" bg-['url(https://picsum.photos/id/100/200/300)']" >
            </Container>
        </Box>
    );
}
