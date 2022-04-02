import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/frammento'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Frammento = () => {
  return (
    <Layout title="XXXXXXX">
      <Container>
        <Title>
          XXXXXXX&nbsp;
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>AUTORE</Meta>
            <span>LIBRO&nbsp;</span>
            <Meta>ANNO</Meta>
          </ListItem>
        </List>
        <Paragraph>
          YYYYYYYYYYYYYY
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Frammento