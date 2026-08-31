"use client"

import Image from "next/image";
import { Box, Button, ButtonGroup, Container, Field, HStack, Input, Separator, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

import { PasswordInput, } from "../../components/ui/password-input";
import { signup } from "../../helpers/auth/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupForm, signupSchema } from "../../helpers/auth/schema";
import { useYupValidationResolver } from "../../hooks/api/useYupValidation";
import { APIErrorResponse } from "../../network/reponses";
import { useMutation } from "@tanstack/react-query";

export default function SignUp() {


    const resolver = useYupValidationResolver(signupSchema)
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({ resolver, mode: "onChange" });
    const { data, isError, error ,mutate} = useMutation({
        mutationKey: ["User"],
        mutationFn: async (data: SignupForm) => {
            const response = await signup(data)

            if ("error" in response) {
                throw response
            }

            return response
        },
        onSuccess: (data) => {
            console.log("User created successfully", data)
        },
        onError: (error: APIErrorResponse<Partial<SignupForm>>) => {
            if (error.error && typeof error.error === "object") {
                return error.error
            }
            return error.error
        }
    })

    const handleEmailSubmit: SubmitHandler<SignupForm> = async (data) => {
        const formattedData = {
            name: data.name,
            email: data.email,
            password: data.password,
        }
        mutate(formattedData)
    }

    return (
        <div className="flex flex-row w-full h-full">
            <Container width={"50%"} className=" flex flex-col justify-evenly" margin="0" paddingY={8}>
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
                        {
                            errors.name?.message && <Text color={"red"} fontSize={"sm"}>{errors.name.message}</Text>
                        }
                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input placeholder="email"  {...register('email')} />
                        </Field.Root>
                        {
                            errors.email?.message && <Text color={"red"} fontSize={"sm"}>{errors.email.message}</Text>
                        }
                        <Field.Root >
                            <Field.Label>Password</Field.Label>
                            <PasswordInput placeholder="password"  {...register('password')} />
                        </Field.Root>
                        {
                            errors.password?.message && <Text color={"red"} fontSize={"sm"}>{errors.password.message}</Text>
                        }
                        <Field.Root >
                            <Field.Label>Confirm password</Field.Label>
                            <PasswordInput placeholder="Confirm password"  {...register('confirmPassword')} />
                        </Field.Root>
                        {
                            errors.confirmPassword?.message && <Text color={"red"} fontSize={"sm"}>{errors.confirmPassword.message}</Text>
                        }

                        {
                            data && <Text fontSize={"sm"}>Account created successfully!</Text>
                        }
                    
                        {error?.error && Object.values(error.error || {}).map((errorMessage, index) => (
                            <Text key={index} color={"red"} fontSize={"sm"}>
                                {errorMessage}
                            </Text>
                        ))}
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
                        <Text as={'span'} className="hover:underline text-blue-600 cursor-pointer">Create one free</Text></Text>
                </Box>
            </Container>
            <Container width={"50%"} margin="0" padding={'0'} bgImage={'url(https://picsum.photos/id/100/200/300)'} bgRepeat={'no-repeat'} backgroundSize={'cover'} className=" bg-['url(https://picsum.photos/id/100/200/300)']" >
            </Container>
        </div>
    );
}
