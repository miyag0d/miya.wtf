import '@rainbow-me/rainbowkit/styles.css'

import type { Theme } from '@rainbow-me/rainbowkit'
import { connectorsForWallets, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import merge from 'lodash.merge'
import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

import QueryProvider from './context/QueryProvider'
import Router from './Router'
import ThemeProvider, { ThemedGlobalStyle } from './theme'

const { chains, provider } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0]! }),
    }),
  ],
  { pollingInterval: 10_000, stallTimeout: 5000 }
)

const readTheme = merge(lightTheme(), {
  fonts: {
    body: '',
  },
  radii: {
    actionButton: '12px',
    connectButton: '12px',
    menuButton: '12px',
    modal: '12px',
    modalMobile: '12px',
  },
  shadows: {
    connectButton: '0',
    dialog: '0',
    profileDetailsAction: '0',
    selectedOption: '0',
    selectedWallet: '0',
    walletLogo: '0',
  },
} as Theme)

const walletConfig = {
  appName: 'miya.wtf',
  chains,
}

const recommendedConnectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet(walletConfig),
      rabbyWallet(walletConfig),
      coinbaseWallet(walletConfig),
      injectedWallet(walletConfig),
    ],
  },
  {
    groupName: 'Other wallets',
    wallets: [rainbowWallet(walletConfig), walletConnectWallet(walletConfig)],
  },
])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: recommendedConnectors,
  provider,
})

export default function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={readTheme}>
          <QueryProvider>
            <ThemeProvider>
              <ThemedGlobalStyle />
              <Router />
            </ThemeProvider>
          </QueryProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}
