import NextLink from 'next/link'
import {
  Button,
  SimpleGrid,
  List,
  Container,
  Box,
  Heading,
  Link,
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

import thumbnailA from '../public/images/works/nuova-frontiera/pain.png'
import thumbnailB from '../public/images/works/giorno-giudizio/markets.png'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }} p={3} textAlign="center">
          <Box flexGrow={1}>
            <Heading as="h1" variant="page-title">
              Simone Sala
            </Heading>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Interessi
          </Heading>
          <Paragraph>
            La virtù più intima del linguaggio non è celata nelle sue proprietà espressive, la sua massima sofisticazione piuttosto sta nella capacità di annientare tutte le forme viziose e di autoinganno, spesso tutelate dalla complicità dell'ombra, che logorano lo spirito e soffocano la personalità. Rincorrendo verso la conquista della consapevolezza nelle realtà della vita e raccogliendo le saette che un giorno gli permetteranno di illuminare frammenti del dominio dell'ignoto, l'uomo sperimenta meraviglie e atrocità, e solo rinunciando alla domesticazione e sprigionando la propria energia nel tentativo di mappare questo mondo tenebroso trova sollievo.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Scritti
          </Heading>
          <Paragraph>
            Questo lavoro consiste in un raccolta di pensieri, attraverso anche ciò che li hanno stimolati, a cui ho dedicato attenzioni affinché fossero degni dell'occhio altrui. Non per vezzo personale o come atto di magnanimità verso il lettore, ma per una questione di egoismo puro: scrivere è il metodo infallibile, e spesso l'unico praticabile, per costruire un pensiero raffinato. Posto di fronte alla mia stessa incompetenza e ingenuità, nel terribile istante di consapevolezza di una mancanza, vedo un'apertura per conciliarmi con il mondo anziché fuggire nelle ombre.
          </Paragraph>
          <Paragraph>
            Nell'audace atto della condivisione la natura intima di uno pensiero muta, obbligando l'architetto a soddisfare, nel modo migliore possibile, le proprie incompletezze e incongruenze, rinunciando nel processo alla corruzione delle apparenze. Oltre la ricerca di motivi, si rende necessario uno sforzo purificatorio mirato a sintetizzare armonia con le forme e le linee della composizione, un impegno che contrasta attivamente la pigrizia e l'indolenza umana.
          </Paragraph>
          <Paragraph>
            Ecco che dunque si delinea il perché di questo lavoro: uno sforzo espansivo della mia personalità che in qualche modo potrà fare anche da insignificante radiazione cosmica nelle vite altrui.
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
          <Heading as="h3" variant="section-title">
            Scritti più recenti
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="/works/nuova-frontiera"
              title="Nuova frontiera"
              thumbnail={thumbnailA}
            />
            <GridItem
              href="/works/giorno-giudizio"
              title="Giorno del giudizio"
              thumbnail={thumbnailB}
            />
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Frammenti
          </Heading>
          <Paragraph>
            Una piccola libreria di frammenti di provenienza mista raccolti in un unico posto perché hanno stimolato pensieri o emozioni durante le mie ricerche.
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
            Progetti di natura prevalentemente tecnica che ho creato.
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
          <Heading as="h3" variant="section-title">
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
