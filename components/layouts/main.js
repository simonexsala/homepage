import Head from 'next/head' 
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Simone Sala's homepage" />
        <meta name="author" content="Simone Sala" />
        <link rel="shortcut icon" href="/cloud.png" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@simonexsala" />
        <meta name="twitter:creator" content="@simonexsala" />
        <meta name="twitter:image" content="/cloud.png" />
        <meta property="og:site_name" content="Simones Sala's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cloud.png" />  
        <title> Simone Sala - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
