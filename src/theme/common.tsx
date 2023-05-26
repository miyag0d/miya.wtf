import styled from 'styled-components/macro'

const MBox = styled.div<{ alt?: boolean }>`
  text-align: center;
  border: 1px solid purple;
  background-color: ${({ theme, alt }) => (alt ? theme.bgGreen : theme.white)};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin:1rem;
  `}
`

const Bar = styled.div`
  background: #d97ada;
  color: white;
  font-family: 'Ã£Æ’â€™Ã£Æ’Â©Ã£â€šÂ®Ã£Æ’Å½Ã¨Â§â€™Ã£â€šÂ´ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka,
    'Ã£Æ’Â¡Ã£â€šÂ¤Ã£Æ’ÂªÃ£â€šÂª', Meiryo, 'MS PÃ£â€šÂ´Ã£â€šÂ·Ã£Æ’Æ’Ã£â€šÂ¯', 'MS PGothic', farial, helvetica, clean,
    sans-serif;
`

const BoxContent = styled.div`
  padding: 0.5rem;
`

const BorderContainer = styled.div`
  border: 1px solid white;
  padding: 1rem;
  font-style: italic;
  text-align: center;
`

export { Bar, BorderContainer, BoxContent, MBox }
