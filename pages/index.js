import NextLink from 'next/link'
import { 
  Button, 
  SimpleGrid, 
  List, 
  Container, 
  Box, 
  Heading, 
  Divider, 
  useColorModeValue, 
  Link, 
  ListItem,
  ChakraProvider,
  useDisclosure,
  Img
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoBitcoin,
  IoMailOutline
} from "react-icons/io5"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'


import thumbnailFED from '../public/images/works/quadro-macroeconomico/fed.png'
import thumbnailPEPE from '../public/images/works/pepe/pepe.png'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} p={3} textAlign="center">
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Ciao, sono Simone
            </Heading>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Interessi
          </Heading>
          <Paragraph>
            Vivo con una curiosità violenta che danza senza sosta e mi trasporta verso gli straordinari frutti del pensiero. Al fianco di questa compagna fluttuo nell'intero dominio dell'ignoto, tra il mistico e lo straordinario, trovando sempre sorpresa in qualcosa di nuovo.   
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Scritti
          </Heading>
          <Paragraph>
            Questo sito è una raccolta di pensieri che ho adornato affinché fossero degni dell'occhio altrui. Non per atto di magnanimità verso il lettore oppure per vezzo personale, ma piuttosto per una questione di puro egoismo.
          </Paragraph>
          <Paragraph>
            Ritengo che scrivere sia il miglior metodo, talvolta l'unico praticabile, per costruire un pensiero raffinato perché solamente nel terribile istante in cui è messo di fronte alla propria incompetenza e ingenuità l'uomo vede un'apertura per conciliarsi con il mondo. Nell'audace atto della condivisione la natura intima di uno scritto muta, obbligando così l'autore a soddisfare, nel modo migliore possibile, le incompletezze del proprio lavoro, rinunciando così alla corruzione delle apparenze. In questo impegno, oltre alla non banalità del pensiero, si rende necessario uno sforzo verso le forme e l'armonia delle linee della composizione, due elementi che contrastano attivamente la pigrizia e l'indolenza umana.
           </Paragraph>
          <Paragraph>
            Ecco che dunque si delinea il perché di questo lavoro: in primo luogo per la mia persona, e solo successivamente per gli altri.          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
                &nbsp;Scritti
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3"variant="section-title">
            Scritti più recenti
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="/works/quadro-macroeconomico"
              title="Quadro macroeconomico"
              thumbnail={thumbnailFED}
            />
            <GridItem
              href="/works/pepe"
              title="Pepe e Wojak"
              thumbnail={thumbnailPEPE}
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Frammenti
          </Heading>
          <Paragraph>
            Una piccola libreria di estratti di valore provenienti da tutte le parti del mondo in cui mi sono imbattuto durante le mie ricerche, riportati senza aggiunte o commenti.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/frammenti">
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
                &nbsp;Frammenti
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Progetti
          </Heading>
          <Paragraph>
            Diversi progetti di natura prevalentemente tecnica su cui ho lavorato, con alcuni pensieri e osservazioni a riguardo.  
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
                &nbsp;Progetti
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3"variant="section-title">
            Online
          </Heading>
          <List textAlign="center">
            <Link href="https://twitter.com/simonexsala" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter />}
                />
            </Link>
            <Link href="https://github.com/simonexsala" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              />
            </Link>
            
            <Link href="https://instagram.com/simonexsala" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              />
            </Link>
            <Link href="mailto:simonexsala@protonmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMailOutline />}
              />
            </Link>
            <Button
              onClick={onOpen}
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoBitcoin />}
            />
            <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
              <ModalOverlay 
                bg='blackAlpha.200'
                backdropFilter='blur(10px)'
              />
              <ModalContent>
                <ModalHeader>Indirizzo Bitcoin</ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign="center" my={4}>
                  <Img
                    marginLeft="auto"
                    marginRight="auto"
                    title="Indirizzo Bitcoin"
                    alt=""
                    src='/images/bc1qgsaxy960e2ua8nek8k45wqgw9f39tmu53axrrx.png'
                    placeholder="blur"
                    loading="lazy"
                    objectFit='cover'
                  />
                  <br />
                  bc1qgsaxy960e2ua8nek8k45wqgw9f39tmu53axrrx
                </ModalBody>
              </ModalContent>
            </Modal>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
