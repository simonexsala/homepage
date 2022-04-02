import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/frammento'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Frammento = () => {
  return (
    <Layout title="Delle tarantole">
      <Container>
        <Title>
          Delle tarantole&nbsp;
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Friedrich Nietzsche</Meta>
            <span>Così parlò Zarathustra &nbsp;</span>
            <Meta>1885</Meta>
          </ListItem>
        </List>
        <Paragraph>
          https://it.wikisource.org/wiki/Cos%C3%AC_parl%C3%B2_Zarathustra/Parte_seconda/Delle_tarantole
          /// WRITE BASH SCRIPT PRENDE UN TXT E SU OGNI INVIO AGGIUNGE UN NUOVO PARAGRAFO
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Frammento