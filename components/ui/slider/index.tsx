import { HStack, Slider, SliderValueChangeDetails } from "@chakra-ui/react"

interface sliderProps {
  value: number[]
  onValueChange: (v: SliderValueChangeDetails) => void

}

export default function CustomSlider(props: sliderProps) {
  return (
    <Slider.Root maxW="full" size="lg" value={props.value} onValueChange={props.onValueChange} defaultValue={[40]}>
     
      <Slider.Control>
        <Slider.Track fill={"red"}>
          <Slider.Range />
          <Slider.Marker value={props.value[0]} />
        </Slider.Track>
        <Slider.Thumbs rounded="l1" />

      </Slider.Control>
    </Slider.Root>
  )
}