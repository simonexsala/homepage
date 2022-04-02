import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import { FrammentoGridItem } from "../components/grid-item"

import nietzsche from '../public/images/frammenti/nietzsche.png'
import jung from '../public/images/frammenti/jung.png'
import foucault from '../public/images/frammenti/foucault.png'
import deleuze from '../public/images/frammenti/deleuze.png'

const Frammenti = () => (
  <Layout title="Frammenti">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4} >
        Frammenti
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section delay={0.1}>
            <FrammentoGridItem id="delle-tarantole" title="Delle tarantole" thumbnail={nietzsche}>
              Friedrich Nietzsche
            <br></br>
            </FrammentoGridItem>
          </Section>
          <Section delay={0.1}>
            <FrammentoGridItem id="mentalita-primitiva" title="La mentalità primitiva" thumbnail={jung}>
              Carl Gustav Jung
              <br></br>
            </FrammentoGridItem>
          </Section>

          <Section delay={0.2}>
            <FrammentoGridItem id="mattini-grigi" title="Della tolleranza" thumbnail={foucault}>
              Michel Foucault
              <br></br>
            </FrammentoGridItem>
          </Section>
          <Section delay={0.2}>
            <FrammentoGridItem id="societa-controllo" title="La società del controllo" thumbnail={deleuze}>
              Gilles Deleuze
              <br></br>
            </FrammentoGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Frammenti
