import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/frammento'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Frammento = () => {
  return (
    <Layout title="Mentalità primitiva">
      <Container>
        <Title>
          La mentalità primitiva&nbsp;
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Carl Gustav Jung</Meta>
            <span>Gli archetipi e l'inconscio collettivo &nbsp;</span>
            <Meta>1977</Meta>
          </ListItem>
        </List>
        <Paragraph>
          https://apidimandeville.blogspot.com/2016/09/la-mentalita-primitiva-coscienza.html          /// WRITE BASH SCRIPT PRENDE UN TXT E SU OGNI INVIO AGGIUNGE UN NUOVO PARAGRAFO
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Frammento