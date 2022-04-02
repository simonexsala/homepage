import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const ServerError = () => {
  return (
    <Container>
      <Heading as="h1">500 </Heading>
      <Text>Server-side error occurred</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Homepage</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default ServerError