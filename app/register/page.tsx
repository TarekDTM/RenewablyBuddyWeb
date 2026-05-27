"use client"
import Image from "next/image";
import { Box, Button, Container, Flex, HStack, Input } from "@chakra-ui/react"

import { PasswordInput, PasswordStrengthMeter } from "../../components/ui/password-input";
import { useState } from "react";

export default function Home() {

    
    const [password,setPassword] = useState<string>("")
    return (
        <Box height={"vh"}>

            <Flex height={"full"} justify={"space-between"}>
        <Container  className="bg-red-900" >
                <div>
                    <h1>LOGIN</h1>
                </div>
        </Container>
               <Container className="bg-black" >
                <div  >
                    <h1>LOGIN</h1>
                    <Input name="Email"  />
                    <PasswordInput value={password}  name="Password"  onChange={(e) => setPassword(e.target.value)}/>
                    <PasswordStrengthMeter value={password} />
                </div>
        </Container>
            </Flex>
        </Box>
    );
}
