import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="TILE">
      <Container>
        <Title>
          TITLE&nbsp;
          <Badge>YEAR</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>ZONA</Meta>
            <Link href="">
              LINK&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>AAA</Meta>
            <span>AAAA</span>
          </ListItem>
        </List>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Work