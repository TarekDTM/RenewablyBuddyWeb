import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#ecfdf5" },
          100: { value: "#d1fae5" },
          200: { value: "#a7f3d0" },
          300: { value: "#6ee7b7" },
          400: { value: "#34d399" },
          500: { value: "#10b981" },
          600: { value: "#059669" },
          700: { value: "#047857" },
          800: { value: "#065f46" },
          900: { value: "#064e3b" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "app.background": {
          value: { _light: "#f8fafc", _dark: "#0f172a" },
        },
        "app.surface": {
          value: { _light: "#ffffff", _dark: "#1e293b" },
        },
        "app.foreground": {
          value: { _light: "#0f172a", _dark: "#f8fafc" },
        },
        "app.muted": {
          value: { _light: "#475569", _dark: "#cbd5e1" },
        },
        "app.border": {
          value: { _light: "#e2e8f0", _dark: "#334155" },
        },
      },
    },
  },
})
