import { Container, Box, Heading, Image, Link, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Quote from '../../components/quote'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Arte, Mandelbrot e i frattali">
      <Container>
        <Title>
          Arte, Mandelbrot e i frattali&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Matematica, Arte</Meta>
            <Meta>16 Luglio 2022</Meta>
          </ListItem>
        </List>
        <Heading as="h2" fontSize={18} textAlign="center">
          Arte, Mandelbrot e i frattali
        </Heading>
        <Heading as="h3" fontSize={16} textAlign="center">
          Simboli semplici, complessi e indefiniti
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <WorkImage src="/images/works/frattali/frattali.png" alt="frattali" />
        </SimpleGrid>
        <br />

        <Paragraph>
          Le grandi storie ottengono il loro fascino senza età catturando l'essenza del tempo in cui emergono. Questo vale sia per l'arte che per la scienza. Nei momenti critici dell'esistenza, questi due mondi si intrecciano attraverso una ricerca condivisa mirata a comprendere il mondo nel cui grembo giace l'uomo. Tante domande restano sospese nell'etere e talvolta, sorprendentemente, incidenti o coincidenze fortuite mostrano le risposte.
        </Paragraph>

        <Quote>
          Le nuvole non sono sfere, le montagne non sono coni, le linee costali non sono dei cerchi e la corteccia non è liscia, e la luce non viaggia in linea retta
        </Quote>
        &nbsp;– Benoît Mandelbrot, 1975
        <Paragraph>
          così il matematico polacco delinea i tratti fondamentali che hanno stimolato la totalità della sua indagine fenomenologica nel mondo della complessità. Cosa condividono tra di loro la forma delle coste e il profilo delle montagne, l’andamento della volatilità nelle valutazioni finanziarie e la diffusione del rumore nello spazio? La natura incredibilmente variabile della manifestazione di questi fenomeni e tanti altri è rappresentata da ciò che Mandelbrot ha formalizzato sotto il nome di rugosità.
        </Paragraph>
        <Paragraph>
          È il campo dello studio geometrico di forme senza geometria dove spesso i principi che determinano le forme assunte in determinate modalità sono descrivibili attraverso semplici formule matematiche iterabili in quantità indefinita. I frattali sono strutture infinitamente complesse che nel contempo risultano semplici e immediatamente riconducibili dall'occhio umano a qualcosa di definito e ordinato, addirittura familiare. Negli oggetti figli della natura, si scova una proprietà sorprendente: il caos è ordinato.
        </Paragraph>
        <Paragraph>
          La nozione formale di frattale è stata introdotta da Mandelbrot nel 1975, questo certamente non vuol dire che l'intuizione di frattale non fosse già una realtà esplorata nel passato e in tutto il corso della storia umana. Si ritrovano nelle civiltà più disparate e nei tempi più remoti motivi frattali ricorrenti.
        </Paragraph>
        <Paragraph>
          Risalgono al secolo XV, sotto i domini dell'impero africano Bamana, delle statuine rappresentanti divinità con motivi di ripetizione di natura frattale.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/works/frattali/bamana_a.png" alt="statuetta" />
          <WorkImage src="/images/works/frattali/bamana_b.png" alt="statuetta" />
        </SimpleGrid>
        <br />

        <Paragraph>
          Un altro esempio di struttura frattale limitata dalle costrizioni materiali lo si trova nel pavimento della basilica di San Lorenzo fuori le mura, risalente all'XI secolo. La composizione multiscala è tipica dei pavimenti dei Marmorari Romani che talvolta rimandano a motivi particolare definiti rigorosamente in matematica solo secoli dopo. Nel dettaglio selezionato emerge il triangolo di Sierpinski, una suddivisione su scala sempre più fine di triangoli autosimili iterata almeno fino a tre livelli.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/works/frattali/sanlorenzo_a.png" alt="mosaico" />
          <WorkImage src="/images/works/frattali/sanlorenzo_b.png" alt="mosaico" />
        </SimpleGrid>
        <br />

        <Paragraph>
          È importante tenere a mente che nel mondo materiale non si può fare altro che trovare un compromesso tra l'ideale e la realtà. Il compito dell'artista sta proprio in questo, mediare il divino con il terreno, e il grande artista, quello la cui nascita è un evento unico nel flusso di vita creato da un secolo, è maestro in questo: è in grado di rapire la meraviglia da una dimensione che non appartiene ad alcun umano, e così facendo emoziona.
        </Paragraph>
        <Paragraph>
          Ne Le visage de la Guerre (1940) Dalì rappresenta un volto nelle cui fattezze è riproposta una versione miniaturizzata di se stessi, e la stessa dinamica è ripetuta un'ulteriore volta ad un liello successivo. Dal punto di vista storico l'opera si colloca in un'epoca segnata per gli spagnoli dalla sanguinosa guerra civile (1936-39), ma che alla luce degli eventi successivi si può interpretare come una premonizione dell'inconscio collettivo che in tutto il mondo era stato contagiato dal macabro esito del totalitarismo.
        </Paragraph>
        <Paragraph>
          L'amico-segretario di Dalì, Descharnes, la commenta come qualcosa con "gli occhi colmi di morte infinita", una testimonianza che certifica la ricerca da parte dell'artista dell'effetto ricorsivo. È piuttosto certo che Dalì non avesse mai avuto alcun tipo di esposizione alla teoria matematica che sottende il suo dipinto, ma la conclusione logica è equivalente: si può tentare di rappresentare visivamente gli abissi della morte in uno spazio delimitato solo attraverso l'implicito regresso infinito offerto dall'autosomiglianza, la caratteristica dei frattali perfetti.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/works/frattali/visage.png" alt="visage" />
          <WorkImage src="/images/works/frattali/sierpinski.png" alt="sierpinski" />
        </SimpleGrid>
        <br />

        <Paragraph>
          I frattali hanno da una parte sempre avuto rilevanza storica, ma lo studio profondo delle loro propietà e peculiarità è emerso solo nel ventesimo secolo, un periodo in cui i matematici come veri e propri alchemisti hanno iniziato a distillare e scovare in natura strutture ricorrenti che fino ad allora erano rimaste celate. La scoperta e poi l'evoluzione della teoria del caos risultano essere caotiche quanto il fenomeno stesso. Allo stesso modo lo sviluppo della teoria dei frattali, la geometria che descrive gli schemi lasciati dal caos, ha un'origine inaspettata.
        </Paragraph>
        <Paragraph>
          Il primo articolo con un accenno alla natura degli oggetti frattali era stato pubblicato negli anni '60, ma non aveva ricevuto grande attenzione poiché il suo autore, il matematico britannico Lewis Richardson, era morto otto anni prima. Le ipotesi indagate in questo scritto non sono mai risultate di grande valore, Richardson mirava a sviluppare una teoria matematica che potesse, studiando la lunghezza delle coste di uno stato, trovare una correlazione diretta con la predisposizione bellica di quest'ultimo. Tuttavia, gli sforzi per dimostrare che i paesi con i confini più lunghi avessero una probabilità di risolvere militarmente un conflitto erano resi nulli dal fatto che le lunghezze citate in letteratura variavano incredibilmente al variare della risoluzione di misura. Scoprendo Richardson, Mandelbrot iniziò il proprio lavoro nel contesto della geometria frattale con l'intenzione di risolvere quest'ultimo problema.
        </Paragraph>
        <br />

        <Heading as="h3" fontSize={16}>
          Dimensione frattale
        </Heading>
        <Paragraph>
          L'impegno di Mandelbrot non produsse i risultati immediatamente desiderati, ma ciò che scoprì rivoluzionò l'intera concezione del cosmo e della natura: Mandelbrot definì rigorosamente la dimensione frattale o complessità. Gli antichi greci affidarono in eredità al mondo una comprensione della prima, della seconda e della terza dimensione, mentre Mandelbrot colmò gli spazi tra una e l’altra.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <WorkImage src="/images/works/frattali/dimension.png" alt="dimensione" />
        </SimpleGrid>
        <br />

        <Paragraph>
          Perché le onde, come la maggior parte delle creazioni naturali, godono di proprietà frattali?
        </Paragraph>
        <Paragraph>
          Nella sfera ordinata dell’astrazione matematica la dimensione di una forma viene analizzata in funzione del limite a distanze sempre più piccole, infinitesimali, questo ha senso per costruzioni puramente geometriche perché, se frattali, mantengono la loro rugosità a qualsiasi livello di profondità.
        </Paragraph>
        <Paragraph>
          Nell’ambiente naturale, invece, come per il caso della lunghezza delle coste, non ha senso pensare in termini di profondità infinita perché ci si scontra con i limiti imposti dalle dimensioni organiche. Si deve quindi analizzare la dimensione su una serie abbastanza larga di scale e se questa risulta relativamente costante il fenomeno naturale si può definire frattale.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <WorkImage src="/images/works/frattali/onde.png" alt="onde" />
        </SimpleGrid>
        <br />
        <Paragraph>
          Questo è il motivo per cui tante forme continuano ad essere autosimili, anche se non perfettamente. L’autosomiglianza perfetta offre uno strumento semplice e immediato per identificare il fenomeno della rugosità, ma il mondo frattale non è limitato a quell’insieme. La dimensione frattale non solo è un tema ricorrente in natura, è anche la discriminante tra ciò che è artificiale e ciò che si è sviluppato organicamente: più questa è alta, più sono le probabilità che l’oggetto sia di origine organica.
        </Paragraph>
        <Paragraph>
          È una caratteristica rispettata anche dall'uomo, la dicotomia artificiale-organico, anziché naturale, è stata creata appositamente. Nel dominio delle costruzioni umane si nota la differenza di complessità nei borghi antichi, quelli che ora sono i centri storici delle città, nati senza regolamentazioni e secondo esigenze sempre diverse, e le zone residenziali, commerciali e industriali pianificate e soggette ad una miriade di regolamentazioni, costruite per investimento speculativo anziché per necessità individuali.
        </Paragraph>

        <br />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/works/frattali/suburbs.png" alt="suburbs" />
          <WorkImage src="/images/works/frattali/sangiminiano.png" alt="san giminiano" />
        </SimpleGrid>
        <br />

        <Heading as="h3" fontSize={16}>
          La cura estetica
        </Heading>
        <Paragraph>
          Attraverso l'esposizione continua, fin dal principio, agli scenario frattali della natura, il sistema visivo dell’uomo si è sviluppato e adattato all'elaborazione con rapidità dei frattali. Questa attitudine è verificabile a molti passi del sistema visivo, dalle modalità in cui gli occhi si muovono, alle regioni che queste forme attivano nel cervello. La familiarità con cui l’uomo interpreta le costruzioni frattali lo pone in una nicchia di conforto e la percezione della bellezza risponde profondamente agli stimoli estetici che trasportano. Osservando le reazioni cerebrali in pazienti sottoposti a questa cura estetica, ricercatori dell’università dell’Oregon sotto guida di Richard Taylor, fisico e storico dell’arte, hanno notato che il caos ordinato della natura ha ridotto la quantità di stress percepito mettendo a proprio agio lo spettatore, e in special modo hanno ricondotto le risposte del sistema visivo umano ai motivi di Pollock, ai frattali della natura e ai frattali generati dal computer ad un unico comune elemento.
        </Paragraph>
        <Paragraph>
          Tanti hanno provato a copiare le tecniche di Pollock, alcuni per rendere omaggio, altri per creare falsi, ma nessuno pare in grado di infondere la magia al pari dell’artista originale. Le tele di Pollock pare abbiano catturato nell’intimo l'aspetto selvaggio e naturale del mondo, ma per tanto tempo questa è rimasta pura speculazione di osservatori entusiasti perché mancava qualcosa che potesse definire cosa un aspetto attraente del suo lavoro.
        </Paragraph>
        <Paragraph>
          È sufficiente colare vernice su una tela per ottenere un frattale? La caratteristica fondamentale e inimitabile della tecnica di Pollock consisteva nell’introdurre un grado di complessità uniforme a qualsiasi livello: non importa quanto sia estesa la sezione di dipinto in esame, qualsiasi sia la risoluzione il quadro mostra un motivo dalla complessità costante.
        </Paragraph>
        <Paragraph>
          Le tele di Pollock rispecchiano il mondo che le circonda, fatto di complessità che si ripetono a qualsiasi livello. Nel caso di Pollock, l’estetica frattale è il risultato di un'intrigante miscela di processi psichici e fisici. I suoi schemi frattali hanno avuto origine dai movimenti del suo corpo, ma alla base della sua carriera esisteva un processo mirato a perfezionare consapevolmente la tecnica di colata per aumentare la complessità visiva dei modelli creati. A testimonianza di questo fatto, l’analisi della complessità delle tele da lui prodotte nel tempo mostra un costante incremento. A Pollock non piaceva che gli spettatori dei suoi dipinti potessero essere distratti da figure immaginarie prodotte dalla mente in assenza di riferiementi, ciò che chiamava "carico extra". Per contrastare l’innato vagare del cervello umano di fronte a una rappresentazione non ben definita ha inconsciamente aumentato la complessità visiva dei modelli creati, un impegno durato una vita.
        </Paragraph>
        <Paragraph>
          Anche il collega espressionista astratto di Pollock, Willem De Kooning, dipinse frattali. Verso gli anni '80 gli venne diagnosticato l'Alzheimer. È interessante osservare la variazione nella complessità delle tele prodotte con l’avanzare della malattia. Nonostante fosse stato previsto un deterioramento delle capacità artistica, le opere successive contenevano una dose di mitezza e tranquillità che mai prima di allora posseduto avevano posseduto. La serenità delle ultime opere è rispecchiata da un decremento della dimensione frattale.
        </Paragraph>
        <Paragraph>
          Nello studio condotto Forsythe, venne notato che l'incidenza dei frattali diminuì nei dipinti realizzati da artisti piagati da una forma di declino mentale; e le tele di De Kooning, tra quelle analizzate, hanno mostrato il maggiore cambiamento.
        </Paragraph>
        <br />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkImage src="/images/works/frattali/excavation.png" alt="excavation" />
          <WorkImage src="/images/works/frattali/senza-titolo.png" alt="senza titolo" />
        </SimpleGrid>
        <br />

        <Paragraph>
          Il grande merito dell’indagine condotta da Mandelbrot è aver portato alla luce il fitto intreccio di complessità che si celano davanti ai nostri occhi, liberandoci dalle descrizioni della realtà limitate a sistemi regolari e ben definiti. Mandelbrot ha sintetizzato con eleganza la comprensione scientifica rigorosa e l’esperienza estetica naturale colma di imprevedibilità e variazioni.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Work
