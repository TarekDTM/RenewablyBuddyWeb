import { SliderValueChangeDetails } from "@chakra-ui/react";

export interface LoadCalculatorProps {
  powerBill? : number[],
  onValueChange: (v: SliderValueChangeDetails) => void

}

interface LoadItem {
    name: string,
    avgLoad: number,
    loadTime: number,
}