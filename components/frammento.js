import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Head from 'next/head'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/frammenti">
      <Link>Frammenti</Link>
    </NextLink>

    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>

    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const FrammentoImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mt={4} mb={2} />
)

export const Meta = ( {children} ) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)