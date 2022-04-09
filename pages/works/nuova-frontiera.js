import { Container, SimpleGrid, Divider, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Quote from '../../components/quote'

const Work = () => {
  return (
    <Layout title="La nuova frontiera del controllo">
      <Container>
        <Title>
          La nuova frontiera del controllo&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Sociale</Meta>
            <Meta>12 Aprile 2022</Meta>
          </ListItem>
        </List>

        <Heading as="h2" fontSize={18} textAlign="center">
          La nuova frontiera della società di controllo
        </Heading>
        <Heading as="h3" fontSize={16} textAlign="center">
          Il furto della sovranità individuale
        </Heading>

        <SimpleGrid columns={[1,1,1]} gap={6}>
          <WorkImage src="/images/works/nuova-frontiera/pod.png" alt="pod-life" />
        </SimpleGrid>
        <br></br>

        <Heading as="h3" fontSize={18}>
          La genesi del nuovo assetto sociale
        </Heading>
        <Paragraph>
          Nel suo "poscritto sulle società di controllo", Gilles Delueze introduce il concetto di società di controllo, un sistema che rappresenta l'evoluzione sociale di ciò che Michel Foucault, nel suo lavoro filosofico, aveva definito come società disciplinari e di sovranità. In origine, durante il periodo feudale, le società erano organizzate secondo un modello di sovranità, dove la legge coincideva con la volontà del sovrano; qualunque crimine era trattato come se fosse un attacco al re, una trasgressione rispetto alla sua volontà. Per questo motivo le condanne era un atto di vendetta, esercitata dal popolo in nome del sovrano, e si concentravano in modalità d'esecuzione strettamente fisica, tra la tortura, la mutilazione e l'omicidio. Con l'abbandono di questo modello e l'avvento della modernità vera e propria si è passati all'adozione di un nuovo ordine sociale, quello disciplinare, la cui essenza, esercitata in tutte le distinte dimensioni della vita, dalla famiglia alla prigione, passando per la scuola, l'ospedale e la fabbrica, accompagnava l'uomo definendolo in funzione di questi grandi ambienti di reclusione.
        </Paragraph>
        <Paragraph>
          Lo strumento più potente a disposizione della società di controllo consiste nella possibilità di osservazione continua del comportamento individuale. La nuova acquisita facoltà permette di sottoporre chiunque a diretta osservazione, tramite telecamere o altri mezzi informatici, e così muta l'intera attitudine del soggetto regolando le più fondamentali reazioni umane.
        </Paragraph>
        <Paragraph>
          La giustificazione per la nascita di questo nuovo sistema, in Foucault, sta nel fatto che questo tipo di società sia in grado di esercitare il potere con più efficacia rispetto all'evoluzione precedente. Se prima un ladro si sarebbe visto la mano recisa, nel nuovo ordine, sottoposto all'idea di sorveglianza perpetua, il ladro avrebbe regolato il proprio comportamento e non avrebbe mai rubato in primo luogo.
        </Paragraph>
        <Paragraph>
          Oltre a ciò, nella società di sovranità era chiaro chi fosse il rappresentante del potere, il sovrano, un singolo uomo con i propri emissari portatori della volontà reale, e dunque era reso triviale identificare chi fosse il responsabile di un'eventuale miseria. Mentre la società di disciplina offre una protezione superiore dalle rivolte e rivoluzioni: la distribuzione del potere permette di nascondere i veri responsabili delle condizioni sociali, schermando la loro identità attraverso uffici e istituzioni, una scatola nera che non rivela mai chi la componga e lavori al proprio interno. Così facendo vengono introdotte le modalità secondo le quali l'uomo possa venire sottomessom, senza che lui stesso sappia di chi sia lo stivale asfissiante.
        </Paragraph>
        <Paragraph>
          Nell'esecuzione del castigo, nella società di sovranità era più semplice empatizzare con la dannazione del condannato; nella seviziazione il cittadino era reso consapevole e capace di provare solidarietà nella sofferenza. Nonostante questo, le torture erano pubbliche perché era nell'interesse del sovrano che lo fossero, erano il mezzo per cui il popolo potesse vedere la manifestazione di potenza del'ordine del regno e per questo lo rispettasse. Nella società disciplinare, invece, questo modello viene sovvertito completamente, la condanna non è più punitiva ma di riformazione, non più fisica e visibilmente violenta ma diviene reclusione e penitenziario. I luoghi non sono più pubblici ma vengono nascosti, tenuti privati, in locazioni remote e, nei casi peggiori, assolutamente inaccessibili (Camp Delta a Guantanamo Bay, Alcatraz, e altri di cui non conosceremo mai l'esistenza).
        </Paragraph>
        <Paragraph>
          Foucault riassume così le fondamentali differenze: le società di sovranità tassano la produzione e regnano sulla morte; le società di disciplina organizzano la produzione e amministrano la vita.
        </Paragraph>
        <Paragraph>
          Nella società feudale, il vassallo lavorava il terreno posseduto dal feudatario, consegnando lui, al temrmine della produzione, quanto era stato pattuito. Finché era in grado di soddisfare le richieste del padrone, avrebbe potuto organizzare le modalità e i tempi delle propie fatiche secondo i suoi desideri; il padrone così non organizzava la produzione, semplicemente la tassava. In maniera diversa, invece, nella società disciplinare, le modalità e le tempistiche del lavoro sono pianificate da un amministratore: l'uniforme e la condotta, l'orario di inizo e fine giornata, la durata della pausa, erano tutte decretate dall'alto.
        </Paragraph>
        <Paragraph>
          In secondo luogo, il sovrano, nella propria società, aveva controllo della morte, decidendo chi fosse destinato a perire e in quali modalità, secondo la propria legge. L'evoluzione disciplinare di questo aspetto ha visto il coinvolgimento delle tecniche di manipolazione della vita, fin dalla nascita, tramite lo studio della popolazione e l'imposizione di limiti nella riproduzione (la politica del singolo figlio cinese dal 1980 al 2016). Il prototipo dell'ambiente disciplinare è delineato a pieno, secondo Deleuze, nella concezione ideale della fabbrica: "concentrare; suddividere nello spazio; ordinare nel tempo; comporre nello spazio-tempo una forza produttiva il cui risultato deve essere superiore alla somma delle forze elementari". Scuole, fabbriche, ospedali e prigioni agivano tutti secondo una precisa adesione alla tabella di marcia entro le mura che tracciavano il confine del loro potere.
        </Paragraph>
        <Paragraph>
          Con la conoscenza sommaria della natura dei precedenti ordini sociali, si può trattare ciò che Deleuze nel 1990 ha chiamato società di controllo, ossia la trasformazione a cui siamo soggetti nel frammento storico odierno, un processo che comunque mantiene tracce inevitabili dell'eredità disciplinare che ancora non ha abbandonato la vita contemporanea.
        </Paragraph>
        <Paragraph>
          L'aspetto fondamentale vede conferita alla società di controllo la possibilità di esercitare il proprio potere anche al di fuori dei luoghi della vita che dominavano il modello sociale precedente, la scuola, la fabbrica, l'oratorio, ecc. Il nuovo prototipo abbandona la mera dimensione materiale e si insinua nell'intera sfera d'esistenza umana. Il modello economico della predominanza degli strumenti informatici consiste nel fornire un servizio estorcendo, spesso con pratiche immorali e radicate nella zona grigia della legge, una mole notevole di dati dall'utente. L'assioma aziendale muta dunque dal puntare alla creazione di un servizio eccezionale, largamente desiderato e per questo acquistato, al produrre qualcosa di gratuito, che soddisfi le più ampie richieste, in modo che possa attirare capitale umano da schiavizzare e vendere dal più largo bacino demografico.
        </Paragraph>
        <Paragraph>
          In un paradigma sociale, erroneamente attribuito in largo alla tirannia, in cui il potere viene esercitato disciplinarmente, verranno ristrette e tagliate le modalità di comunicazione e di utilizzo delle infrastrutture. Le manifestazioni di questo potere consistono nel negare l'accesso a Google e a tutti gli altri servizi informatici, censurare libri, e recludere in spazi limitati per monitorare, osservare e gestire le azioni degli individui.
        </Paragraph>
        <Paragraph>
          La drastica differenza nell'approccio della società di controllo, invece, è situato nell'accomodare e appoggiare l'utilizzo di qualsiasi infrastruttura, fisica, come i collegamenti aerei, oltre a quella digitale, tramite una falsità velata; una modalità ben più subdola. Sfruttando i canali offerti l'uomo contribuisce all'incremento degli strumenti dediti al controllo di se stesso. Il controllo non si concilia con la reclusione, ma piuttosto si articola nell'espansione della mobilità, come l'autostrada moltiplica le possiblità di controllo. All'uomo è concessa la possibilità di circolare infinitamente rimanendo sempre e comunque perfettamente controllato. Le nuove modalità di controllo non sono percepite in alcun modo, a livello superficiale, come modalità di controllo, ma piuttosto come un esercizio della propria intoccabile e onniscente libertà. Si presenta con i suoi modi seduttivi come una nuova conquista per l'uomo, non più rinchiuso e incatenato, ma meraviglioso uccello capace di spiccare il volo verso sinuosi lidi; ragion per cui la nuova deriva sociale è così pericolosa e efficace. Usando la carta bancaria, comprando un biglietto aereo, attendendo uno spettacolo o possedendo qualsiasi immobile, tutte manifestazioni dell'assoluta volontà individuale, l'uomo contribuisce al migliorare ed espandere la robustezza e i tentacoli dei meccanismi di controllo. Conferendo questa sommità di potere, nell'istante in cui venga determinato un valicamento delle norme istituzionali da parte di un individuo, il nuovo potere permetterà di agire, in assoluta tutela di un arbitrario bene comune, eliminando le possibilità di azione dell'individuo, tramite sanzioni o proibizioni, il tutto a distanza. Con l'avanzare del tempo l'uomo è sempre più sottomesso a strumenti rispetto a cui non ha alcun tipo di controllo e volontà, architettati nell'oscurità e comandati da entità, corporazioni e governi, che hanno il proprio interesse al di sopra di tutto. Ovviamente questo non è l'unico utilizzo delle infrastrutture, ma sono autoevidenti le sfumature della questione, e come qualcosa di apparente positività e ineluttabile progresso nasconda un lato recondito temibile e con applicazioni malevole.
        </Paragraph>
        <Paragraph>
          La nuova frontiera della società di controllo attraverso l'abbattimento dei confini fisici e la nuova estensione planetaria, oltre alla manipolazione dei flussi di informazione, ha avuto degli impatti destabilizzanti sugli ambienti di reclusione tradizionali. Nella previsione di Deleuze, la scuola, il luogo di lavoro, la prigione, ecc. piuttosto che essere distinti come nella società disciplinare, saranno amalgamati in un'etità unica che raccolga le sfaccettature di ognuno dei suoi componenti, costringendo l'uomo ad articolare la propria esistenza in tutti questi luoghi contemporaneamente.
        </Paragraph>
        <br />
        <Quote>
          Come l'impresa rimpiazza la fabbrica, la formazione permanente tende a rimpiazzare la scuola ed il controllo continuo a prendere il posto dell'esame. Questo è il sistema più sicuro per legare la scuola all'impresa. Nelle società disciplinari non si finiva mai di ricominciare (dalla scuola alla caserma, dalla caserma alla fabbrica), mentre nelle società del controllo non si è mai finito con nulla, in quanto l'impresa, la formazione, il servizio sono gli stati metastabili e coesistenti di una stessa modulazione, come di un deformatore universale.
        </Quote>
        &nbsp;— Gilles Deleuze, 1990
        <br /><br />
        <Paragraph>
          Nella società disciplinare, data la caratteristica tangibile dell'esistenza di una dimensione di reclusione, l'uomo era consapevole della condanna e della liberazione quando varcava la soglia di una di queste istituzioni. Ma questo lusso non è concesso nel nuovo paradigma di controllo, dove le linee di confine si fanno sempre più sottili e talvolta sublimano per intero.
        </Paragraph>
        <Paragraph>
          Nei postumi dell'avvento della pandemia questa realtà si è concretizzata, se prima esisteva una distinzione tra ambienti e i tempi della vita, dopo la dimora individuale è diventata un flusso indistinguibile di impegni scolastici, lavorativi, sociali ed è anche diventata il luogo in cui fare acquisti al supermercato. Sembrerebbe libertà di azione, fare qualsiasi cosa in qualsiasi momento, ma è fondamentale notare come amalgamare tutte le sfaccettature della vita diffonda responsabilità perpetua nell'intero spettro della vita, rimuovendo ogni sembianza di una tregua. Liberati dalla reclusione degli spazi di lavoro o di scuola, gli oneri della vita sono liberi di perseguitare l'uomo in ogni angolo del tempo e del mondo.
        </Paragraph>
        <br />
        <Quote>
          Ciò che conta è che noi siamo all'inizio di qualcosa. Nel regime delle prigioni: la ricerca di pene "sostitutive" almeno per la piccola delinquenza, l'utilizzo di collari elettronici che impongono al condannato di rimanere a casa in certe ore. Nel regime dell'istruzione: le forme di controllo continuo e l'azione di formazione permanente sulla scuola, il corrispondente abbandono di ogni ricerca all'università, l'introduzione dell'"impresa" a tutti i livelli di scolarità. Nel regime ospedaliero: la nuova medicina "senza medico né malato" che tratta malati potenziali e soggetti a rischio, non testimonia assolutamente di un progresso verso l'individuazione, come si dice, ma sostituisce ad un corpo individuale o numerico, la cifra di una materia "dividuale" da controllare. Nel regime d'impresa: i nuovi trattamenti del denaro, dei prodotti e degli uomini che non passano più per la vecchia forma-fabbrica.
        </Quote>
        &nbsp;— Gilles Deleuze, 1990
        <br /><br />
        <Paragraph>
          Viene dunque eliminata la singolarità dell'individuo, la natura indivisibile dell'entità umana, come lo era stata fino all'avvento della società di controllo, scompare. Piuttosto oggi la metamorfosi dell'uomo lo ha portato a divenire un dividuo, separabile e scrutabile in tutti i suoi aspetti sotto una lente particolare. Prima ognuno frequentava gli ambienti istituzionali ma la sua presenza non condivideva nulla con l'esperienza del momento oltre al frammento consapevole di spazio-tempo, mentre ora è condannato a far parte di un flusso interminabile di divisioni, tra proiezioni demografiche e studi statistici, aggregazioni di informazioni che delineano chi è l'uomo agli occhi delle corporazioni e dello stato.
        </Paragraph>
        <br />
        <Quote>
          Non c'è bisogno della fantascienza per concepire un meccanismo di controllo che dia in ogni momento la posizione di un elemento in ambiente aperto, animale in una riserva, uomo in una impresa (collare elettronico). Félix Guattari immagina una città in cui ciascuno può lasciare il suo appartamento, la sua strada, il suo quartiere grazie alla sua carta elettronica (dividuale) che faccia alzare questa o quella barriera, e allo stesso modo la carta può essere respinta quel giorno o entro la tal ora; ciò che conta non è la barriera ma il computer che ritrova la posizione di ciascuno, lecita o illecita, ed opera una modulazione universale.
        </Quote>
        &nbsp;— Gilles Deleuze, 1990
        <br /><br />
      </Container>
    </Layout>
  )
}

export default Work