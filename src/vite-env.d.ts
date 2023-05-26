/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />
declare module '*.svg' {
  import type { FunctionComponent, SVGProps } from 'react'

  export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>

  const src: string
  export default src
}

declare module '*.json' {
  const value: any
  export default value
}

interface Window {
  ethereum?: any
  toggleDevtools: undefined | (() => void)
}
