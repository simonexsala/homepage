import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/frammento'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Frammento = () => {
  return (
    <Layout title="La società del controllo">
      <Container>
        <Title>
          La società del controllo&nbsp;
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Gilles Deleuze</Meta>
            <span>L'autre journal&nbsp;</span>
            <Meta>1 maggio 1990</Meta>
          </ListItem>
        </List>
        <Paragraph>
          https://www.marxists.org/italiano/sezione/filosofia/deleuze/societa-controllo.htm        
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Frammento