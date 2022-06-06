import { Container, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Quote from '../../components/quote'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Giorno del giudizio">
      <Container>
        <Title>
          Giorno del giudizio&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Sociale</Meta>
            <Meta>6 Giugno 2022</Meta>
          </ListItem>
        </List>

        <Paragraph>
          Gli Stati Uniti hanno visto i loro bilanci in rosso alla chiusura di ogni esercizio dal 1970 ad oggi, fatta eccezione per quattro anni dal 1998 al 2001.
        </Paragraph>
        <WorkImage src="/images/works/giorno-giudizio/fed-budget.jpeg" alt="Budget Federale" />
        <br />
        <Paragraph>
          Il profitto di quei quattro anni sarebbe a malapena sufficiente a coprire le spese fatte solo nei primi sei mesi del 2022.
          Com'è dunque possibile la sussistenza di un paese in queste condizioni?
        </Paragraph>
        <Paragraph>
          L'intero sistema fiscale statunitense si fonda sulla creazione di moneta a debito.
          La spesa e il debito del paese, dal 1971 e in maniera più repentina nel 2008 e 2020, hanno visto un incremento finanziato dalla zecca della Riserva Federale.
        </Paragraph>
        <Paragraph>
          L'aumento del rifornimento circolante di moneta è la prima causa dell'inflazione che si manifesta nel tempo nei mercati. L'intera discussione in materia si è fatta viva e protagonista nei media a seguito del conflitto Ucraino, ma tanti avevano già avvisato e sapevano delle conseguenze dell'espansione monetaria; la narrazione dei media e dei politici occidntali è costruita affinché vengano affidate tutte le disfatte economiche ad un singolo comune nemico, riducendo le responsabilità vere a nullità.
        </Paragraph>
        <WorkImage src="/images/works/giorno-giudizio/fed-m1.jpeg" alt="Espansione monetaria" />
        <br />
        <Paragraph>
          L'intero movimento che ha reclutato tra i vari paesi l'intera Europa ha come comandante e capo indiscusso gli Stati Uniti, e così è da decine e decine di anni.
          L'egemonia di cui hanno goduto fin'ora li ha visti capaci di definire le modalità d'azione in qualsiasi dominio, da quello economico e finanziario, a quello militare, politico e monetario.
        </Paragraph>
        <Paragraph>
          Il dollaro americano si è cimentato bastione del commercio mondiale dopo la vittoria indiscussa del 1945, e attraverso i furti mondiali effettuati per finanziare la guerra in Vietnam che ha fatto scattare la riforma del 1971 è prosperato fino ad oggi.
          Ovunque nazioni, banche, hedge fund e individui custodiscono dollari americani come asset supremo, in grado di sopravvivere a qualsiasi sfortuna nei mercati.
        </Paragraph>
        <Paragraph>
          Quando Powell accende la stampante sta dunque rubando a nome degli Stati Uniti a chiunque possegga anche un solo dollaro, e anche chiunque non ne abbia perché tutto il mondo è stato cresciuto dipendente assoluto della moneta americana e della minaccia militare e coercizione violenta che sfrutta malvagiamente per mantenere questo controllo.
        </Paragraph>
        <Paragraph>
          Il veleno si è oramai insinuato nel profondo e ha corrotto il tessuto della società.
          È troppo tardi e non esiste modo per sanificare il mondo da questo male.
        </Paragraph>
        <Paragraph>
          Se fosse un attore qualunque, il governo statunitense sarebbe già in tribunale per bancarotta.
          Per sua fortuna gli è stato concesso astutamente di dettare le regole del gioco e cambiarle a seconda della sua volontà. Sia in ambito militare e politico, dove gli Stati Uniti si rendono paladini della giustizia ed esportatori di democrazia combattendo qualsiasi forma di crimine e torto umano (come in Yemen, o quando hanno fatto di tutto per salvaguardare la libertà del popolo uigure in Cina), sia in ambito finanziario e monetario dove possono decidere di ripagare la propria controparte con una versione di meno valore rispetto a ciò con cui avevano contratto il debito.
        </Paragraph>
        <Paragraph>
          Il debito pubblico USA si aggira attorno ai 90 trilioni di dollari, mentre le passività non finanziate sono 170 trilioni.
          L'unico modo in cui il governo può operare e finanziare le proprie azioni è creando nuova moneta dall'etere; diventa sempre più apparente la natura da schema Ponzi del sistema monetario a cui è stato permesso di crescere dall'avidità anziché da ciò che viene sempre definita ingenuamente "l'impossibilità di una crescita perpetua".
          Non è quello il problema.
          L'intero fenomeno inflazionistico è impossibile da contenere e destinato a rendersi ancora più prevalente.
        </Paragraph>
        <Paragraph>
          La miseria e la poverta generalizzata sono forse lo scenario auspicato per la conquista di un potere di controllo ancora superiore.
        </Paragraph>
        La più grande economia, il più grande paese (e se il sarcasmo, come qualche riga sopra, non fosse evidente ci tengo a sottolinearlo) è al disfacimento.
        Gli Stati Uniti sono sopravvissuti alla caduta 2008 in una stanza di ospedale attaccati a dieci macchinari diversi.
        Non sono coscienti, ma non sono morti.
        Non sono morti perché la loro morte equivarrebbe ad ammettere il fallimento di cinquanta e più anni di teorie e la decadenza della prosperità e dell'autorità e dell'eccellenza occidentale.
        Il modello statunitense per il mondo ha fallito e sperimenteremo di prima mano il prototipo mandarino.
        <Paragraph>
          Ancora più terribile, pazzo per il controllo e la sorveglianza.
        </Paragraph>
        <br />
        <Quote>The end of democracy and the defeat of the American Revolution will occurr when government falls into the hands of lending institutions and moneyed incorporations.</Quote> &nbsp;— Thomas Jefferson
      </Container>
    </Layout>
  )
}

export default Work
