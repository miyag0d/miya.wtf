import MiladyGif from 'assets/milady.gif'
import styled from 'styled-components/macro'

import { Bar, MBox } from '@/theme/common'

const Wrapper = styled.div`
  padding: 0.5rem 1rem;
`

const ImageContainer = styled.div`
  padding: 1rem;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem 0.5rem 1rem;
`

const Content = styled.div`
  padding: 1rem;
`

export default function MiladyBox() {
  return (
    <Wrapper>
      <MBox>
        <Bar>
          <h2>Milady Maker Collection</h2>
        </Bar>
        <ImageContainer>
          <img src={MiladyGif} width={320} height={400} alt="Milady Maker" />
        </ImageContainer>
        <Content>
          <a href="https://pro.opensea.io/collection/milady" rel="noopener noreferrer" target="_blank">
            You can view and trade the Milady collection on the secondary market at OpenSea Pro.
          </a>
        </Content>
        <hr />
        <FlexContainer>
          <a href="https://discord.gg/milady" rel="noopener noreferrer" target="_blank">
            Milady Village Community Discord
          </a>
          |
          <a href="https://twitter.com/MiladyMaker" rel="noopener noreferrer" target="_blank">
            Milady Maker Official Twitter
          </a>
        </FlexContainer>
      </MBox>
    </Wrapper>
  )
}
