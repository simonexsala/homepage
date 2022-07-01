import { Container, Box, Heading, SimpleGrid, Divider, Badge } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Paragraph from "../components/paragraph"
import Layout from '../components/layouts/article'

// Create same size images
import thumbnailFED from '../public/images/works/quadro-macroeconomico/fed.png'
import thumbnailPEPE from '../public/images/works/pepe/pepe.png'
import thumbanilCONTROLLO from '../public/images/works/societa-controllo/soyjack-monkey.png'
import thumbnailGIUDIZIO from '../public/images/works/giorno-giudizio/markets.png'
import thumbnailFRONTIERA from '../public/images/works/nuova-frontiera/pain.png'

const Works = () => (
  <Layout title="Scritti">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} variant="section-title">
        Scritti
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem id="nuova-frontiera" title="Nuova frontiera" thumbnail={thumbnailFRONTIERA}>
            Il furto della sovranità individuale
            <br />
            <Badge>30 Giugno 2022</Badge>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="giorno-giudizio" title="Giorno del giudizio" thumbnail={thumbnailGIUDIZIO}>
            La caduta degli Stati Uniti
            <br></br>
            <Badge>6 Giugno 2022</Badge>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="societa-controllo" title="La società del controllo" thumbnail={thumbanilCONTROLLO}>
            L'invasione dello spazio personale
            <br></br>
            <Badge>8 Aprile 2022</Badge>
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

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
