import styled from 'styled-components/macro'

import { approved } from '@/constants/approved'
import { Bar, MBox } from '@/theme/common'

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  p {
    text-align: justify;
    margin: 0.5rem 1rem !important;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding:1rem;
  `}
`

const GalleryContainer = styled.div<{ active?: boolean }>`
  display: grid;
  justify-items: auto;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.5rem;
  width: auto;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const GalleryItem = styled.a`
  text-decoration: none !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  img {
    margin: 0;
    border: 1px solid #777;
    height: auto;
    width: auto;
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`

const Description = styled.p`
  text-align: center !important;
  font-size: smaller;
  width: 80%;
  max-height: 100%;
  color: #d97ada;
  padding: 0.5rem;
`

export default function ApprovedCollections() {
  return (
    <Wrapper>
      <MBox>
        <Bar>
          <h2>Approved Collections</h2>
        </Bar>
        <GalleryContainer>
          {approved.map((item, index) => (
            <GalleryItem key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} />
              <Description>{item.name}</Description>
            </GalleryItem>
          ))}
        </GalleryContainer>
        <hr />
        <p>
          There is functionality to add collections to the approved list and will likely be utilized for NFTs that have
          been adopted by the greater Remilia diaspora.
        </p>
        <p>*Holding only an `Oh... I see by shirosamaa` NFT will not get you access</p>
      </MBox>
    </Wrapper>
  )
}
