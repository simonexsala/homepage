import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.3} fontSize="sm" my={6}>
      &copy; {new Date().getFullYear()} Simone Sala. <br></br> Sul modello di <a href="https://www.craftz.dog/">Takuya Matsuyama</a>.
    </Box>
  )
}

export default Footer