import { Container, Box, Heading, SimpleGrid, Divider, Badge } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'

// Create same size images
import thumbnailFED from '../public/images/works/quadro-macroeconomico/fed.png'
import thumbnailPEPE from '../public/images/works/pepe/pepe.png'
import thumbanilCONTROLLO from '../public/images/works/nuova-frontiera/soyjack-monkey.png'

const Works = () => (
  <Layout title="Scritti">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Scritti
      </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
<<<<<<< Updated upstream
        <Section delay={0.1}>
          <WorkGridItem id="pepe" title="Pepe e Wojak" thumbnail={thumbnailPEPE}>
            Simboli dell'inconscio
            <br></br>
            <Badge>23 Marzo 2022</Badge>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="quadro-macroeconomico" title="Quadro macroeconomico" thumbnail={thumbnailFED}>
            Attraverso il passato per il futuro
            <br></br>
            <Badge>10 Febbraio 2022</Badge>
          </WorkGridItem>
        </Section>
=======
      <Section delay={0.1}>
        <WorkGridItem id="nuova-frontiera" title="La nuova frontiera della società di controllo" thumbnail={thumbanilCONTROLLO}>
          Il furto della sovranità individuale
          <br></br>
          <Badge>23 Marzo 2022</Badge>
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="pepe" title="Pepe e Wojak" thumbnail={thumbnailPEPE}>
          Simboli dell'inconscio
          <br></br>
          <Badge>23 Marzo 2022</Badge>
        </WorkGridItem>
      </Section>
      <Section delay={0.1}>
        <WorkGridItem id="quadro-macroeconomico" title="Quadro macroeconomico" thumbnail={thumbnailFED}>
          Attraverso il passato per il futuro
          <br></br>
          <Badge>10 Febbraio 2022</Badge>
        </WorkGridItem>
      </Section>
>>>>>>> Stashed changes
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
