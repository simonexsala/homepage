import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"

// Thumbnails
//
import thumbnailPEPE from '../public/images/works/pepe/pepe.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} >
        Progetti
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid colums={[1,2,2]} gap={6}>
            <GridItem 
              title="Work in progress..." 
              thumbnail={thumbnailPEPE} 
              // href=""
            />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
