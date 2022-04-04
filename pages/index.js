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
            Conquistando consapevolezza delle realtà della vita attraverso una curiosità violenta ho deciso di impegnarmi nella ricerca della luce nei confini dell'intero dominio dell'ignoto, tra il mistico, lo straordinario e l'atroce. Ogni giorno dedico energia nel tentativo di muovere un nuovo passo verso la mappatura di questo mondo tenebroso; una missione che mi seppellirà.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Scritti
          </Heading>
          <Paragraph>
            Questo lavoro consiste in un raccolta di pensieri, attraverso anche ciò che li hanno stimolati, che ho adornato affinché fossero degni dell'occhio altrui. Non per atto di magnanimità verso il lettore o per vezzo personale, ma piuttosto per una questione di egoismo puro. Scrivere, per me, è il miglior metodo, spesso l'unico praticabile, per costruire un pensiero raffinato. Nel terribile istante in cui sono messo di fronte alla mia incompetenza e ingenuità vedo un'apertura per conciliarmi con il mondo.
          </Paragraph>
          <Paragraph>
            Nell'audace atto della condivisione la natura intima di uno scritto muta, obbligando così l'autore a soddisfare, nel modo migliore possibile, le incompletezze del proprio pensiero, rinunciando così alla corruzione delle apparenze. In questo impegno, oltre alla ricercatezza delle figure e delle vicende, si rende necessario uno sforzo purificatorio che faccia tendere le forme e le linee della composizione verso l'armonia, un elemento che contrasta attivamente la pigrizia, l'indolenza e la corruzione umana.
          </Paragraph>
          <Paragraph>
            Ecco che dunque si delinea il perché di questo lavoro: uno sforzo espansivo della mia personalità che in qualche modo andrà anche a fare da radiazione cosmica di fondo nelle vite di altri.
          </Paragraph>

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
                    src='/images/bc1qmgccwpdhf324lzyh7d4n30zcnp269u4jv7cnd0.png'
                    placeholder="blur"
                    loading="lazy"
                    objectFit='cover'
                  />
                  <br />
                  bc1qmgccwpdhf324lzyh7d4n30zcnp269u4jv7cnd0
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
