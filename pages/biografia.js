import { Container, Box, Heading, SimpleGrid, Divider, Badge } from "@chakra-ui/react"
import Section from "../components/section"
import { BioYear, BioSection } from '../components/bio'
import Layout from '../components/layouts/article'

const Biografia = () => (
  <Layout title="Biografia">
    <Container>
    <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Biografia
    </Heading>

    <Section delay={0.1}>
      <BioSection>
        <BioYear>1999</BioYear>
          Nato a Milano
        </BioSection>
      </Section>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </Container>
  </Layout>
)

export default Biografia