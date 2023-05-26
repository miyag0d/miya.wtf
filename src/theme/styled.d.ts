import type { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components/macro'

export type Color = string
export interface Colors {
  darkMode: boolean

  // base
  white: Color
  black: Color
  bgGreen: Color

  neutral0: Color
  neutral100: Color
  neutral200: Color
  neutral300: Color
  neutral500: Color
  neutral600: Color
  neutral700: Color
  neutral900: Color
}

declare module 'styled-components/macro' {
  export interface DefaultTheme extends Colors {
    padding: {
      global: {
        horizontal: {
          xs?: string
          sm?: string
          md?: string
          lg?: string
          xl?: string
        }
        vertical: {
          xs?: string
          sm?: string
          md?: string
          lg?: string
          xl?: string
        }
      }
    }

    // radius
    cardRadius: string
    pillRadius: string

    backdrop: FlattenSimpleInterpolation

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
