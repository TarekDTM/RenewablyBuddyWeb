"use client"

import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export interface ColorModeProviderProps extends React.PropsWithChildren {}

const ColorModeContext = React.createContext<UseColorModeReturn>({
  colorMode: "light",
  setColorMode: () => undefined,
  toggleColorMode: () => undefined,
})

export function ColorModeProvider(props: ColorModeProviderProps) {
  const [colorMode, setColorModeState] = React.useState<ColorMode>("light")

  const setColorMode = React.useCallback((mode: ColorMode) => {
    setColorModeState(mode)
    document.documentElement.classList.toggle("dark", mode === "dark")
    document.documentElement.classList.toggle("light", mode === "light")
    window.localStorage.setItem("renewablebuddy-color-mode", mode)
  }, [])

  React.useEffect(() => {
    const savedMode = window.localStorage.getItem("renewablebuddy-color-mode")
    const initialMode: ColorMode = savedMode === "dark" || savedMode === "light"
      ? savedMode
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

    document.documentElement.classList.toggle("dark", initialMode === "dark")
    document.documentElement.classList.toggle("light", initialMode === "light")
    setColorModeState(initialMode)
  }, [])

  const value = React.useMemo<UseColorModeReturn>(
    () => ({
      colorMode,
      setColorMode,
      toggleColorMode: () => setColorMode(colorMode === "dark" ? "light" : "dark"),
    }),
    [colorMode, setColorMode],
  )

  return (
    <ColorModeContext.Provider value={value}>
      {props.children}
    </ColorModeContext.Provider>
  )
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  return React.useContext(ColorModeContext)
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="bg"
        display="contents"
        className="chakra-theme light"
        colorPalette="white"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  },
)
