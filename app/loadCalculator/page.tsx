"use client"
import Image from "next/image";
import { Box, Button, Container, Flex, HStack, Input } from "@chakra-ui/react"

import { PasswordInput, PasswordStrengthMeter } from "../../components/ui/password-input";
import { useState } from "react";
import CategoryItem from "./components/CategoryItem";
import LoadItem from "./components/LoadItem";
import SelectedLoadItem from "./components/selectedLoadItem";

export default function Home() {

    
    return (
        <Box height={"vh"}>

        <Container  className="bg-white" >
                <div className="flex-col justify-between h-full ">
                    <Box className="flex flex-row w-1/2 gap-x-4 overflow-x-scroll">
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    <CategoryItem   img="https://picsum.photos/id/100/200/300" name="Kitchen"/>
                    </Box>
                    <Box className="flex flex-row justify-between flex-wrap w-1/2">
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>
                    <LoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"/>

                    </Box>
                    <SelectedLoadItem img="https://picsum.photos/id/100/200/300" name="fridge" description="approximately 400W"  />
                </div>
        </Container>
               <Container className="bg-black" >
                <div  >
                    <h1>Total Load</h1>
                </div>
        </Container>
         </Box>
    );
}
