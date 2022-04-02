import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/frammento'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Frammento = () => {
  return (
    <Layout title="Mattini grigi">
      <Container>
        <Title>
        I mattini grigi della tolleranza&nbsp;
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Michel Foucault</Meta>
            <span>Le Monde &nbsp;</span>
            <Meta>23 marzo 1977</Meta>
          </ListItem>
        </List>
        <Paragraph>
        https://www.chartasporca.it/i-mattini-grigi-della-tolleranza-foucault-rilegge-comizi-damore-di-pasolini/        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Frammento