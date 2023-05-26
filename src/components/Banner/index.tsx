import type { ReactNode } from 'react'
import styled from 'styled-components/macro'

const BannerStyled = styled.div<{ active?: boolean }>`
  position: static;
  border-width: 0 1px 1px 1px;
  border-color: white;
  background-color: #000000;
  border-style: solid;
  top: 0px;
  left: 0px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 0.5rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    padding: 0.5rem;
  `}
`

const Content = styled.div`
  color: white;
`

export default function Banner({ children }: { children: ReactNode }) {
  return (
    <>
      <BannerStyled>
        <Content>{children}</Content>
      </BannerStyled>
    </>
  )
}
