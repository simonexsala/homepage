import { Container, Box, Heading, Image, Link, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="La crociata contro le droghe">
      <Container>
        <Title>
          La crociata contro le droghe&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Sociale</Meta>
            <Meta>22 Luglio 2022</Meta>
          </ListItem>
        </List>

        <Heading as="h2" fontSize={18} textAlign="center">
          La crociata contro le droghe
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <WorkImage src="/images/works/droghe/pepe.png" alt="pepe" />
        </SimpleGrid>
        <br />

        <Heading as="h3" fontSize={16}>
          Assioma: se esiste la domanda, esisterà, in un modo o nell’altro, anche l’offerta.
        </Heading>
        <Paragraph>
          Le retate contro i cartelli della droga sono un’esibizione di virtuosismo proficua per le forze dell’ordine e la classe politica, ma la realtà dei fatti ancora una volta rivela il tranello teso all’osservatore ingenuo quando questa stessa rigida intolleranza si mostra la più grande arma a sostegno della criminalità. Tramite la sua azione ideologica di tutela dell’individuo crea i grandi profitti con cui la malavita può mantenere robusta la propria infrastruttura criminale e creare un monopolio nel traffico: un equilibrio simbiotico da cui sono, giustamente per interessi personali, restii deviare.
        </Paragraph>
        <Paragraph>
          Le droghe possono essere orribili, e chiunque ne sostenga l’uso ricreativo non profondamente consapevole commette un errore che rischia di corrodere l’esistenza di molti individui, ma la questione della legittimità o meno del proibizionismo era già stata esplorata cent’anni fa, negli Stati Uniti, con l’alcol. Nonostante fosse proibito, esisteva sempre il modo per stringere tra le proprie mani la bottiglia, ed era stata proprio la proibizione ad incrementare il suo prezzo e quindi a stimolare più individui a partecipare nel contrabbando intrigati dalla prospettiva di ottimi margini di guadagno. Oggigiorno migliaia di vite sono perse ogni anno per via degli effetti perversi dell’alcol, per non parlare delle vite corrose, da violenze e tradimenti, sotto l’influenza della bottiglia. Il numero di vittime di questa sostanza sono ben al di sopra di quelle portate via o deformate dagli stupefacenti; vuol dire che le limitazioni relative al consumo funzionano a dovere a differenza dell’atteggiamento di accettazione che circonda l’alcol?
        </Paragraph>
        <Paragraph>
          Certamente l’illegalità associata al posesso di diverse sostanze impatta positivamente il consumo di esse, e la lassità relativa al consumo di alcolici ha un effetto negativo, ma bisogna domandarsi se queste limitazioni, al netto degli effetti benefici, siano un beneficio per l’individuo e la società. L’alcol, correggendo l’analisi per la diffusione, risulta comunque una sostanza più nociva per l’organismo e la società rispetto a droghe pesanti come crack e eroina.
        </Paragraph>
        <Paragraph>
          Ma è ancora più pericoloso dell’alcol avere l’illusione di godere del potere onnipotente in grado di eradicare ogni male terreno: la mentalità che porta l’uomo ad imbarcarsi nella crociata per sintetizzare un bene astratto spesso si rivela più dannosa di ciò che si prefigge di sconfiggere.
        </Paragraph>
        <Paragraph>
          Le droghe sono un problema per l’individuo, ma la dimensione del guaio si amplifica quando si analizzano le implicazioni sociali della dipendenza individuale. La necessità di ricorrere a metodi illegali per alleviare la propria frenesia porta l’individuo assuefatto alla disperazione per cui ogni mezzo diventa lecito. Spesso spinti a finanziare la propria dipendenza attraverso la gentile donazione di un attore esterno (eufemismo per furto), se questi individui potessero trovare il sollievo che cercano ad una frazione del prezzo non dovrebbero ricorrere ad ulteriore illegalità a discapito di un malcapitato, e nel contempo verrebbe meno buona parte dell’incentivo economico dello spacciatore.
        </Paragraph>
        <Paragraph>
          Il fallimento ideologico avviene sempre nell’istante in cui i combattenti per la giustizia e il benessere dei cittadini credono di avere consapevolezza di cos’è giusto per l’individuo, quando la realtà, a conti fatti, dimostra nient’altro che la loro naturale incompetenza. Incompetenza naturale perché nessuno, oltre ad avere il diritto di gestire la vita altrui, anche quando la gestione è in buona fede e mirata verso il benessere di chi è sottomesso, è in grado di farlo. Chi crede di sapere cosa è bene per l’altro commette con puntualità l’errore di considerare l’altro inferiore nella consapevolezza del mondo; in poche parole lo considera come un infante, un ritardato, oppure, ancora peggio, un animale addomesticato, tre soggetti per cui è necessario organizzare e pianificare l’esistenza poiché limitati nella manifestazione di una volontà da questioni oggettive e quindi necessariamente costretti ad appellarsi ad un’autorità che autorizzi uno o l’altro comportamento.
        </Paragraph>
        <Paragraph>
          Negli anni che anticiparono la proibizione americana, alcuni cittadini hanno agito per proprio conto sottraendo la responsabilità del giudizio morale altrui: entravano armati di asce nelle attività che servivano alcolici distruggendo gli oggetti della loro indignazione. Con l’aggiunta dell’emendamento che sancì l’inizio della proibizione in termini formali coronarono il loro trionfo morale e nel contempo diedero spazio di manovra alla tragedia del crimine organizzato. L’intera nazione divenne dunque preda del tentacolo dell’illegalità, un movimento talmente dirompente che col nuovo successo economico finanziò addirittura le campagne mirate a mantenere inalterata la condizione illegale degli alcolici, al fine di preservare le condizioni per l’esistenza dei grandi profitti che il governo aveva concesso loro rendendo gli alcolici inottenibili per vie ritenute lecite. Cosa potrebbe desiderare di più un monopolista? Rimuovere il velo dall’alcol avrebbe disintegrato i profitti che lo stato d’illegalità aveva creato, allo stesso modo rendendo legali le droghe si andrebbe a rimuovere il margine delle organizzazioni criminali, riducendo allo stesso tempo la spesa governativa nella battaglia, l’influenza violenta della malavita e il prezzo dei narcotici in circolazione.
        </Paragraph>
        <Paragraph>
          Quest’ultimo punto è di fondamentale importanza; perché il prezzo minore della droga dovrebbe mai essere un aspetto positivo? Non diventerebbe così più accessibile ad un ampio ventaglio di individui, incrementando l’incidenza del consumo e dunque il peso sociale della dipendenza?
        </Paragraph>
        <Paragraph>
          Certamente, ma la questione va analizzata su un altro piano. Il ragazzo che viene investito da un guidatore ubriaco è innocente a tutti gli effetti, mentre chi decide di assumere queste sostanze non lo è. Non è morale imporre grandi costi sulla società per proteggere gli individui dalle proprie volontà, per quanto detrimentali al proprio benessere possano essere. Al tempo stesso “e per i giovani plagiati non più indirizzati sulla retta via? Certamente bisogna fare qualcosa per loro!”, io rispondo con un’altra domanda: sei così sicuro che l’irruenza del governo possa fare qualcosa per loro? Esistono anche oggi con il contrasto attivo. La questione rimane inalterata: è possibile diventare succube della droga involontariamente? Perché altri, attraverso la figura del governo, dovrebbero avere il diritto di intervenire eliminando la libertà di recare danno a sé? Chi ha la possibilità di agire è chi viene leso in prima persona dal comportamento negligente e deteriorante dell’assuefazione: l’individuo e la famiglia, e per estensione anche gli amici. L’unico compito del governo è non stimolare il consumo di droga finanziando il consumatore e quindi, indirettamente, anche il trafficante.
        </Paragraph>
        <Paragraph>
          Inoltre, la maggior parte di chi viene condannato per possesso di stupefacenti è un consumatore finale, ben al di fuori di qualsiasi circolo di spaccio influente. Il costo economico di questa detenzione e del processo associato viene sostenuto dal governo attraverso il finanziamento collettivo. È legittimo imporre il costo di chi vuol nuocere a se stesso su tutti gli altri individui in nessun modo responsabili?
        </Paragraph>
        <Paragraph>
          Chi vuole avallare la legittimità della proibizione statale della droga non può far altro che proporre un’argomentazione che dovrebbe essere applicabile anche in altri casi di danno inflitto a se stessi, come il consumo esagerato di cibo e l’obesità, una patologia che reca danni su una portata ben più larga del mero consumo di stupefacenti, oppure come il fumo e la serie di malattie che porta con sé. Perché il principio per cui viene vietato transitivamente l’utilizzo di stupefacenti non si applica anche in questi casi totalmente analoghi? L’unico divieto iposto sul fumo tutela la volontà esterna di non voler partecipare all’attività, ed è dunque assolutamente legittimo.
        </Paragraph>
        <Paragraph>
          L’uomo, assegnando a terzi il potere decisionale sulla legittimità delle azioni rivolte verso sé rinuncia alla propria autonomia. E in questo mondo, l’unica soluzione in linea con il principio per cui qualcosa è ammesso solo se non lede l’individuo praticante e l’altro, vede il governo legislatore assoluto. Per tenere una linea costante dovrebbe vietare il paracadutismo, la motocicletta, sciare e scalare la Marmolada. Come si determina ciò che è legittimo e ciò che non lo è? A che punto si è disposti a tirare la riga che separi le due sfere? Restrizioni sul fumo? Sulla temperatura del termostato? Sul gioco d’azzardo? Sul libero pensiero? Secondo questa linea di ragionamento poiché qualsiasi attività per natura possiede caratteristiche intrinseche di rischio e pericolo, il governo dovrebbe legislare e vietare la totalità della vita umana. Anche la cella di contenimento di due metri per due è in sé rischiosa, dunque l’unica soluzione priva di rischio per l’esistenza umana consiste nel non esistere.
        </Paragraph>
        <Paragraph>
          E così ciò che pare innocuo si rivela un leviatano. Questa è un’altra area in cui diventa triviale individuare le limitazioni governative, e per questo diventa imprudente se non pernicioso ignorare con arroganza questi limiti. La lezione è stata presentata con precisione dal proibizionismo americano, in tutte le sue sfaccettature, bisogna ripetere un’altra volta l’errore e continuare il processo di distruzione di una società libera?
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Work
