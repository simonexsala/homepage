import { Container, Divider, Box, Heading, Image, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Caption from '../../components/caption'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Quadro macroeconomico">
      <Container>
        <Title>
          Quadro macroeconomico&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Economia</Meta>
            <Meta>10 Febbraio 2022</Meta>
          </ListItem>
        </List>

        <Heading as="h3" fontSize={18}>
          Panoramica
        </Heading>
        <Paragraph>
          La Federal Reserve degli Stati Uniti d’America (FED), seguita a ruota dalla Banca Centrale Europea (BCE), dal 2008 ad oggi ha apparecchiato le condizioni perfette, tramite tassi di interesse con cui concede denaro alle banche prossimi o pari a zero e prepotente allentamento quantitativo (QE), un intervento espansivo della moneta in circolazione a debito, per la creazione di una bolla finanziaria come nessun altra. 
          Manipolando i tassi di interesse la FED è in grado di ridurre o aumentare il costo del denaro circolante nell’economia, ossia dei soldi che essa stessa fornisce sotto forma di prestito alle banche commerciali che a loro volta cedono a clienti. In momenti storici di tassi bassi, come quelli odierni, le banche commerciali hanno accesso a capitale monetario da allocare a prezzi pressoché nulli, e dunque anche il cliente può ottenere un prestito agevolato (la banca riceve il capitale ad un tasso di 0% o 0.25%, può anche darsi che il tasso sia negativo). Inversamente quando i tassi di interesse aumentano i profitti del settore bancario aumentano con essi, poiché possono ottenere un margine di profitto superiore sui dollari prestati. Per il resto del settore commerciale, un aumento dei tassi incide sulla redditività, poiché sale il costo del capitale necessario.
        </Paragraph>
        <WorkImage src="/images/works/quadro-macroeconomico/1.png" alt="tightening-cycles" />
        <Caption>
          L’andamento storico dei tassi di interesse della FED. Nel post 2008 i tassi sono rimasti prossimi a zero, incrementando dal 2015 al 2019 fino a 2.5%, ma ridotti immediatamente a zero con l’arrivo della pandemia.
        </Caption>
        <Paragraph>
          Oltre all’azzeramento dei tassi di interesse la FED ha proseguito con una strategia più aggressiva tramite l’espansione del proprio bilancio con titoli di stato e asset finanziari, a seguito di un aumento del rifornimento di moneta circolante a fronte di debito sottoscritto dallo stato. Questo allentamento quantitativo genera inflazione e una lievitazione del valore degli asset acquistati dalla FED. 
        </Paragraph>
        <WorkImage src="/images/works/quadro-macroeconomico/2.png" alt="fed-balance-sheet" />
        <Caption>
          L’andamento storico del bilancio della FED in funzione del valore in % del PIL statunitense. Storicamente piatto, ha visto un incremento considerevole a fronte del 2008, ma a seguito del COVID è esploso definitivamente. Oggi il bilancio della FED vale $8 trilioni, il 40% del PIL.
        </Caption>
        <Paragraph>
          L’ incremento monetario portato avanti dalla politica fiscale di Jerome Powell, presidente della Federal Reserve, ha fatto sì che l’offerta di dollari presenti in circolazione aumentasse vertiginosamente. L’espansione fiscale che tradizionalmente si aggirava attorno al 2-3% ogni anno, ha visto un incremento senza precedenti nel 2020 e nel 2021. La quantità di dollari presenti in circolazione a gennaio 2020 era $15 trilioni, mentre a febbraio 2022 è di $22 trilioni, un incremento quasi pari al 50%, e solo in questo mese di febbraio la FED stamperà altri $60 miliardi. Questa creazione di nuova moneta è possibile solo attraverso un progressivo indebitamento dello stato che dovrebbe rimanere sotto controllo. Appunto per limitare l’indebitamento eccessivo è stato istituito un limite legislativo sull'importo del debito contraibile dalla tesoreria degli Stati Uniti, limitando così la quantità di denaro che il governo federale può pagare sul debito contratto. Questo tetto di debito storicamente si è rivelato una limitazione inutile poiché, con cadenza poco più che annuale, viene incrementato puntualmente in congresso. Recentemente, a metà dicembre 2021, Joe Biden ha firmato un nuovo aumento di $2.5 trilioni fissando il nuovo tetto a $28.9 trilioni, salvando, si fa per dire, gli Stati Uniti dal default finanziario. Questo incremento dà spazio alla FED per stampare nuovi soldi, contraendo così nuovo debito. Parte della nuova moneta prodotta va a bilancio per pagare debiti precedenti (gli Stati Uniti sottoscrivono nuovo debito per pagare il vecchio debito), mentre il resto viene usata per la missione di allentamento quantitativo.
        </Paragraph>
        <Paragraph>
          Questo metodo di azione, tra tassi d’interesse pari a zero e allentamento, nel post 2008, ha portato ad un’esplosione del debito pubblico rispetto al PIL. Nel 2008 il debito era il 50% del PIL, nel 2022 è sopra al 100%. Oggi le condizioni finanziarie degli Stati Uniti, e per estensione del mondo intero, sono simili a quelle del picco della seconda guerra mondiale.
        </Paragraph>
        <WorkImage src="/images/works/quadro-macroeconomico/3.png" alt="federal-debt-gdp" />
        <Caption>
          L’andamento storico del debito pubblico rispetto al PIL. La FED nasce nel 1914. Nixon pone fine al Gold Exchange Standard nel 1971. Gli effetti di questa azione si vedranno più tardi, nella degenerazione economica e nell'iper finanziarizzazione dei giorni nostri.        
        </Caption>
        <WorkImage src="/images/works/quadro-macroeconomico/4.png" alt="balance-of-dollars" />
        <Caption>
          L’andamento storico del rifornimento circolante di dollari. A partire dai $2 trilioni del 1980 ai $22 trilioni del 2022. Un qualsiasi modello di regressione classificherebbe questa curva come una di natura esponenziale piuttosto che lineare. È da notare il cambiamento della pendenza della curva nel 2020.
        </Caption>


        <Heading as="h3" fontSize={18}>
          Inflazione
        </Heading>
        <Paragraph>
          Il Consumer Price Index (CPI) è una misura che rappresenta il cambio medio nel tempo dei prezzi pagati dai consumatori per un determinato paniere di beni e servizi. Nella giornata del 10 febbraio è stato fornito l’ultimo dato aggiornato, che evidenzia un aumento su base annua del 7.5%. Un dato ben al di sopra delle aspettative, ha destabilizzato Biden e la FED. La realtà è però ben peggio: l’ufficio delle statistiche del lavoro, addetto al calcolo del CPI, ha modificato il peso attribuito ad ogni categoria, riducendo quello associato ad energia e cibo, le due categorie che hanno manifestato di più gli effetti avversi della politica monetaria, affinché il CPI non fosse ben più elevato di quanto sia risultato. L’energia, in particolare, ha visto un incremento repentino verso fine agosto, segnalato dal raddoppio del valore dei futures di gas naturale. Oggi, il petrolio invece ha raggiunto il suo massimo costo dal 2015, pareggiando i movimenti di fine novembre 2007, e pare destinato ad un ulteriore incremento.
        </Paragraph>
        <Paragraph>
          Il calcolo del CPI con parametri non modificati a convenienza rileva il tasso di inflazione reale negli Stati Uniti attorno a 16-20%, anziché il 7.5% frutto di una manipolazione consapevole delle modalità di calcolo. Questo dato così elevato mette il 2022 in una compagnia d’élite formata dal 1980 e dal 1946. La recessione economica degli anni ottanta catalizzata dalla crisi energetica del 1979 in parte causata dalla rivoluzione iraniana, ha spinto i già elevati tassi di inflazione in molti dei principali paesi avanzati, dati dal forte aumento dei prezzi petroliferi, a nuove vette sul modello creato da Reagan, allora presidente degli Stati Uniti. I principi delle Reaganomics prevedevano la riduzione della crescita della spesa pubblica, la riduzione dell'imposta federale sul reddito e l'imposta sulle plusvalenze, la riduzione della regolamentazione governativa e l’incremento del costo del denaro tramite l’aumento dei tassi di interesse (come si può vedere nel grafico a pagina 1) al fine di ridurre l'inflazione. La politica di normalizzazione dell’inflazione ha sottolineato ulteriormente il divario sociale ed economico tra benestanti e poveri, ma l’aspetto principale che ha creato va ben oltre: consiste nella nascita di un nuovo paradigma economico; negli otto anni di Reagan gli Stati Uniti sono passati da essere la più grande nazione creditrice al mondo ad essere la più grande nazione debitrice.
        </Paragraph>
        <WorkImage src="/images/works/quadro-macroeconomico/5.png" alt="new-cpi-basket" />
        <Caption>
          Parametri aggiornati per il calcolo del CPI. Food e Energy ridotte.
        </Caption>


        <Heading as="h3" fontSize={18}>
          Genesi
        </Heading>
        <Paragraph>
          Il modello finanziario globale, dal 1971 in poi, già portato al collasso a fine 2006 con la crisi dei mutui subprime e successivamente seppellito dal fallimento delle banche d’affari Bear Stearns e Lehman Brothers nel 2008, ha fatto un ultimo disperato tentativo per tornare in vita attraverso la politica monetaria di interessi zero e allentamento quantitativo aggressivo. Un modello talmente fragile ha funzionato quasi miracolosamente nelle rovine economiche del post 2008, ma l’avvento della pandemia è stato il catalizzatore che ha smascherato le già presenti vulnerabilità strutturali e le ha esasperate. A distanza di due anni dall’imposizione di sacrifici commerciali nati dalle restrizioni sociali le conseguenze della politica monetaria sono piombate sul cittadino medio: il costo della vita è diventato più insostenibile di quanto lo fosse prima; materie prime, supply-chain ed energia sono ogni giorno più care. Le aziende minori, tagliate fuori dal mercato, sono fallite, lasciando sempre più spazio di azione ai conglomerati che negli ultimi due anni hanno moltiplicato i propri ricavi e l’influenza politica: è stata cementata la posizione di potere neo-feudalista di Amazon, Google e Microsoft, seguite da Apple segnando così la nascita di una nuova epoca. L'epoca del tecno-capitalismo-feudalesimo è l'epoca del capitalismo totalitario, per il quale la logica del capitalismo raggiunge supremazia autoritaria. 
          Nel XX secolo i lavoratori delle grandi imprese capitaliste oligopolistiche (General Electric, Exxon, General Motors) ricevevano circa l’80% del reddito dell’azienda. Oggi i lavoratori di Big Tech non raccolgono nemmeno l’1% dell’azienda da cui sono stipendiati. La manodopera salariata è pari ad una frazione dell’impegno di cui beneficiano le aziende Big Tech. Il resto del lavoro è eseguito dagli utenti dei loro prodotti: per la prima volta nella storia, quasi tutti producono gratuitamente (spesso con entusiasmo), aggiungendo al capitale sociale di Big Tech (questo significa scrivere su Facebook o orientarsi con Google Maps, o vedere un video su YouTube).
        </Paragraph>
        <Paragraph>
          La prima trasformazione del capitalismo avvenne con la distribuzione dell’elettromagnetismo durante la seconda rivoluzione industriale, che creò una rete di corporazioni e le banche che le potessero finanziare. Ford, Edison e Krupp rimpiazzarono i macellai, sarti e fabbri di Adam Smith. Il turbolento ciclo di mega-debiti e mega-profitti che ne seguì portò al crollo del 1929 e alla grande depressione, e successivamente al New Deal e, dopo la seconda guerra mondiale, il trattato monetario mondiale di Bretton Woods – il quale, attraverso tutti i limiti imposti alla finanza, partorì un periodo di stabilità e prosperità,
          Mettendo fine ai trattati di Bretton Woods nel 1971, Nixon e poi Reagan pongono le basi della seconda trasformazione del capitalismo. Incrementando il deficit commerciale, ossia importando di più rispetto alle esportazioni, gli Stati Uniti diventarono il principale fornitore di domanda aggregata mondiale , risucchiando le esportazioni nette di Germania, Giappone e, successivamente, Cina. Facendo così gli Stati Uniti alimentarono  la fase di globalizzazione più frenetica di sempre, e tutto il flusso costante di profitti di altre nazioni venne investito dentro Wall Street, rifinanziando il cerchio perpetuo che diede potere economico agli USA. 
          Essendosi reso consapevole di essere il fulcro economico statunitense e dunque mondiale, Wall Street rivendicò indipendenza dalle costrizioni del New Deal e di Bretton Woods. Emancipato, ci fu la seconda metamorfosi del capitalismo: non più oligopolio, bensì iper-finanziarizzazione. Come Ford aveva rimpiazzato il fabbro, JP Morgan, Goldman Sachs e Lehman Brothers avevano spodestato Ford.
        </Paragraph>
        <Paragraph>
          Nel G7 del 2009, per far fronte alla crisi, le Banche Centrali di tutto il mondo hanno concordato di collaborare affinché utilizzassero la proprietà di creazione del denaro in loro potere per far riemergere l’economia globale. Questo piano d’azione ha creato una profonda frattura nel capitalismo in senso lato: oggi infatti l’economia è alimentata dal costante flusso di capitale fornito dalle Banche Centrali, non dal profitto privato. Il fatto che i bilanci delle banche centrali alimentino il sistema finanziario globale permette di capire le circostanze che hanno fatto emergere il segnale più chiaro di questa rivoluzione intestina al capitalismo, apparsa il 12 agosto 2020. Quel giorno, scoprendo che nei primi sette mesi del 2020 il PIL del Regno Unito era crollato di oltre il 20%, ben peggio anche delle proiezioni più disastrose, in pochi minuti il valore della Borsa di Londra è salito di oltre il 2%. La situazione era più tragica del previsto, tutti sapevano che sarebbe dovuta intervenire la Banca Centrale la quale avrebbe creato dall’etere moneta, allocando il nuovo capitale in asset nel frattempo i tassi sarebbero scesi a zero.
        </Paragraph>
        <Paragraph>
          La Federal Reserve, dall’alto del vanto del suo potere e della sua indipendenza, ha sempre professato al mondo, ma oggi è del tutto impotente di fronte all'idra che ha creato nel 2009: stampare denaro per conto di banchieri e imprese. Fornendo ai baroni aziendali liquidità, la FED sta facendo esplodere l’inflazione, ma al tempo stesso è consapevole che porre fine a questa attività sarebbe il colpo fatale per il suo castello di carte. Il terrore di provocare una valanga di debiti inesigibili e fallimenti rende la FED ostaggio della sua stessa decisione, costretta a generare liquidità anche contro la sua volontà. È un avvenimento senza precedenti. Le tanto potenti banche centrali, che oggi sorreggono il sistema, non hanno mai esercitato così poco potere. Solo sotto il feudalesimo il sovrano si sentiva similmente sottomesso ai suoi baroni, pur essendo egli stesso responsabile dell’esistenza e della sopravvivenza dell’intero modello.
        </Paragraph>
        <Paragraph>
          Nel corso della storia i banchieri sono diventati depositari di un potere senza precedenti, gli è concesso trasferire nel tempo valore, cogliendolo dal futuro e portandolo al presente tramite il processo di indebitamento. Nel momento in cui questa aspettativa del futuro che è stata attualizzata e portata nel presente non viene rispettata, si creano disastri. Questa aspettativa non è mai stata rispettata, ma in special modo non è stata rispettata con l’avvento della pandemia. La FED ora si trova di fronte ad un bivio ed è chiamata a decidere: da una parte deve proteggere il dollaro dall'iperinflazione, dall'altra mantenere i mercati artificialmente a galla. Non le è più concesso il lusso di fare entrambe le cose.
          Proteggere il dollaro equivale ad aumentare i tassi di interesse e ridurre progressivamente l'allentamento quantitativo, finendo di iniettare capitale creato dal nulla nei mercati. L’unica conseguenza di questa azione è la demolizione del mercato finanziario, che tra titoli, bond, immobili e il resto compone 6.3x del PIL degli USA, ossia $120 trilioni. Un crollo evaporerebbe trilioni di ricchezza di carta, e sarebbe un evento di natura deflazionaria che condannerebbe l'intera economia mondiale ad un periodo di depressione.
        </Paragraph>
        <WorkImage src="/images/works/quadro-macroeconomico/6.png" alt="fed-effective-rate" />
        <Caption>
          Sviluppo dei tassi di interesse della FED negli ultimi 30 anni.<br></br> 
          2000: incremento a 6.5%, scoppio della bolla dot-com;<br></br> 
          2008: incremento a 5.5%, annientamento del mercato immobiliare;<br></br> 
          2018: incremento a 2.75%, rottura nel mercato azionario e repo.
        </Caption>


        <Heading as="h3" fontSize={18}>
          Futuro
        </Heading>
        <Paragraph>
          La FED, consapevole di aver le mani legate, può solo ricorrere alla minaccia di un incremento degli interessi, tentando di creare così un ambiente di riduzione del rischio in maniera organica che le permetta di sgonfiare la bolla senza modificare la propria politica. Non c'è modo di fermare l’aumento del CPI poiché deriva da errori fondamentali nella fornitura energetica e alimentare che richiederanno tempo per essere risolti con reinvestimento e riconsiderazioni della politica ambientalista populista adottata dai democratici. In questo caso, la politica monetaria aggressiva è un'illusione di controllo, simile ad alcuni mandati pandemici, che porterà a molte conseguenze indesiderate. Tra di loro la stagflazione. 
          Oltre a questo la psicosi russa è l'ultima mossa dei democratici per evitare la disfatta elettorale nelle midterm di novembre ormai incombente: nessuno al mondo si augura che la Russia invada l’Ucraina più degli Stati Uniti. È la distrazione perfetta dalle politiche fallimentari di Biden, e per di più solleverebbe le responsabilità della catastrofe economica dalla Federal Reserve. 
        </Paragraph>
        <Paragraph>
          L'unico strumento che dia valore al dollaro e a tutto ciò che sopra vi è stato costruito è la potenza bellica statunitense, e per stabilizzare e perpetrare l’egemonia monetaria nella crisi si ricerca il conflitto armato. In una situazione incertezza rampante, l’individuo non avrà alcun incentivo a possedere beni che il governo, artefice della catastrofe, sia in grado di sequestrare o manipolare, ma piuttosto cercherà il possesso di beni autentici, di cui possa essere sovrano e, sopra tutto, incensurabili e incorruttibili. La moneta è una delle più grandi invenzioni umane, permette la trasformazione del tempo, attraverso il lavoro, in un'entità trascendente. Tramite l'inflazione non solo viene ridotto il potere d'acquisto dell'uomo, obbligandolo al consumo, ma viene rubata l'essenza dell'esistenza: il tempo. Divorziare il potere fiscale dallo stato dovrebbe essere la priorità del futuro, uno strumento macroeconomico incredibile quanto la stampante di soldi non può essere gestita dall'uomo, sempre ed inevitabilmente inetto, corrotto ed avido. Sarebbe dunque necessario delegare queste proprietà a qualcosa dall'origine divina, transnazionale, senza singolo punto di fallimento e dalla trasparenza assoluta. Uno strumento la cui sopravvivenza futura sia assicurata dall'energia elettrica, anziché dal sangue.
        </Paragraph>
        <Paragraph>
          Il 2022 si prospetta un anno dal futuro incerto, dove tutto sembra essere possibile. Da una parte un sistema ormai al collasso, dall’altra la riluttanza a farlo crollare. 
        </Paragraph>

        <Divider my={6} />

        <Heading as="h3" fontSize={18}>
          Materiale aggiuntivo
        </Heading>
          <List>
            <ListItem>
              <Link href="https://ttmygh.podbean.com/e/teg_0014/" target="_blank">
                The End Game, with Paul Singer&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.youtube.com/watch?v=B_nGEj8wIP0" target="_blank">
                Milton Friedman: Lecture on Money and Inflation&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.zerohedge.com/political/fed-has-triggered-stagflationary-disaster-will-hit-hard-year" target="_blank">
                ZeroHedge: The Fed Has Triggered A Stagflationary Disaster That Will Hit Hard This Year&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.zerohedge.com/economics/last-great-inflation" target="_blank">
                ZeroHedge: The Last Great Inflation&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://themacrocompass.substack.com/" target="_blank">
                The Macro Compass&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://diem25.org/yanis-varoufakis-crypto-sinistra-tecno-feudalesimo/" target="_blank">
              Yanis Varoufakis su Crypto, la Sinistra e il Tecno-Feudalesimo&nbsp;<ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </List>
      </Container>
    </Layout>
  )
}

export default Work
