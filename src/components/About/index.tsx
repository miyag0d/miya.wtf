import styled from 'styled-components/macro'

import { Bar, MBox } from '@/theme/common'

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 0.5rem 1rem;
`

export default function About() {
  return (
    <MBox alt>
      <Bar>About Miya — ミヤについて</Bar>
      <p>
        Black Hearted Cyber Angel Baby Token is an experiment made by{' '}
        <a href="https://twitter.com/yadfarms" target="_blank" rel="noreferrer noopener">
          b
        </a>{' '}
        with art by{' '}
        <a href="https://twitter.com/Cambodius" target="_blank" rel="noreferrer noopener">
          Cambodius
        </a>{' '}
        and undying love for the{' '}
        <a href="https://remilia.org/" target="_blank" rel="noreferrer noopener">
          Remilia Collective
        </a>{' '}
        and{' '}
        <a href="https://radbro.xyz/" target="_blank" rel="noreferrer noopener">
          Radbro Webring
        </a>
        .
      </p>
      <p>
        View the{' '}
        <a
          href="https://dexscreener.com/ethereum/0xa358491CA72B793ddf21cF46C7289CC6e0ce9e5A"
          target="_blank"
          rel="noreferrer noopener"
        >
          Dexscreener
        </a>{' '}
        or read about the{' '}
        <a
          href="https://mirror.xyz/miyagod.eth/uTOKYVagY-xxcguLn8nW8AwvNsaKaXf6PyOo-cggYTI"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inspiration
        </a>
        .
      </p>
      <hr />
      <FlexContainer>
        <a target="_blank" rel="noreferrer noopener">
          Telegram
        </a>
        |
        <a
          href="https://etherscan.io/address/0xa358491ca72b793ddf21cf46c7289cc6e0ce9e5a"
          target="_blank"
          rel="noreferrer noopener"
        >
          Contract
        </a>
      </FlexContainer>
    </MBox>
  )
}
