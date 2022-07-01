import { Container, Box, Heading, Image, Link, Badge, List, ListItem, Divider, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Quote from '../../components/quote'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Nuova frontiera">
      <Container>
        <Title>
          Nuova frontiera&nbsp;
          <Badge>2022</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Sociale</Meta>
            <Meta>30 Giugno 2022</Meta>
          </ListItem>
        </List>

        <Heading as="h2" fontSize={18} textAlign="center">
          La nuova frontiera
        </Heading>
        <Heading as="h3" fontSize={16} textAlign="center">
          Il furto della sovranità individuale
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <WorkImage src="/images/works/nuova-frontiera/life.png" alt="life-in-2050" />
        </SimpleGrid>
        <br />

        <Paragraph>
          I governi e le megacorporazioni, due entità che nel futuro non saranno più soggette ad alcun tipo di distinzione, tanto che una parola le potrà definire entrambe, hanno architettato nel corso di decenni, consapevolmente o meno, gli strumenti che possano garantire loro il monopolio nell'esercitazione del potere atto alla sottomissione dell'individuo.
        </Paragraph>
        <Paragraph>
          In ordine, presento i principi appartenenti alla sfera tecnologica che generano timore e sono ritenuti una possibile minaccia all'autonomia dell'uomo:
        </Paragraph>
        <Paragraph>
          I. Valute digitali della banca centrale (CBDC);
        </Paragraph>
        <Paragraph>
          II. Eliminazione della potenza di calcolo generalizzata per uso privato;
        </Paragraph>
        <Paragraph>
          III. Credito sociale e lasciapassare digitale.
        </Paragraph>

        <br />
        <Heading as="h3" fontSize={16}>
          CBDC
        </Heading>

        <Paragraph>
          Uno strumento senza alcun eguale, la massima fantasia di chi esercita il potere di sorveglianza: le Central Bank Digital Currencies. Il loro primo approccio nel mondo, oltre l'astrazione degli uffici delle banche centrali d'America, Europa e Cina, fintamente bonario e spinto sul pubblico inconsapevole avverrà nei prossimi cinque anni al massimo. Il marchingegno così istituito verrà avviato e gli sarà riservato un interesse marginale poiché la vita del bravo cittadino addomesticato non subirà modifica alcuna. Senza alcun tipo di clamore, in questo clima di calma e apparente innocuità, i suoi tentacoli si allargheranno fino a stringere la totalità della sfera monetaria del binomio Occidente-Cina.
        </Paragraph>
        <Paragraph>
          Queste valute create su misura per gli organi di potere centrale, portate al successo dal pretesto di essere comode, dall'utilizzo infallibile e in grado di proteggere il cittadino e lo stato dalle illegalità, nascono dal desiderio del potere concesso dal possesso di un monopolio sulla sorveglianza della popolazione. Questo stesso desiderio ha portato alla nascita dell'infinità di leggi, obblighi e requisiti da soddisfare in materia di antiriciclaggio (AML) e conoscenza del cliente (KYC); pratiche che estorcono dati sensibili e privati dall'utente col sempreverde e ricorrente appello alla tutela della sicurezza e trasparenza finanziaria. Si potrebbe ipotizzare che sia tutta una costruzione ingenua in buona fede, che siano valide richieste volte a creare uno scenario migliore e dunque giusti sacrifici per far fronte al crimine: rinunciare all'assoluta sovranità sulla propria persona per un bene superiore.
        </Paragraph>
        <Paragraph>
          Nel 2020, le ricerche mostrano come questa infrastruttura di sorveglianza di massa abbia avuto un impatto pari al 0.05ulle attività finanziarie illecite, costando però un totale di 214 miliardi di dollari, ben più di quanto recuperato dalle transazioni illegali, agli organi finanziari costretti a rispettare le imposizioni: un costo, non solo monetario, scaricato dunque sul soggetto sottoposto al controllo, l'individuo. L'infrastruttura stessa, oltre ad essere corrosiva, risulta inutile perché le stesse banche, JPMorgan, HSBC, Standard Chartered, Deutsche Bank e Bank of New York Mellon, tra le altre ancora non scoperte, riciclano il denaro su richiesta: queste cinque, stando a documenti rubati, dal 1999 al 2017 hanno riciclato più di due trilioni di dollari ($2,000,000,000,000). Il riciclaggio del denaro è dunque un privilegio e un monopolio concesso esclusivamente allo stato, massima autorità, e ai suoi emissari, uffici che possono agire solo con il benestare del sovrano. Il tempo ha sempre mostrato come l'organo governativo non abbia mai avuto interesse ad estirpare il crimine, ma piuttosto ha reso evidente la sua spiccata volontà nel riscuotere la propria parte del bottino dell'illegalità.
        </Paragraph>
        <Paragraph>
          Seguendo le stesse modalità, le valute digitali della banca centrale, data l'architettura intenzionalmente offuscata e chiusa, forniranno canali preferenziali per tutte le attività illecite ben retribuite, fornendo nel contempo la possibilità di monitorare ogni singola transazione di ogni individuo. Questo potere creerà una rete limpida di tutti i movimenti di denaro, visibile esclusivamente ad occhi privilegiati che nascondendosi dietro l'imparzialità e assoluta inattaccabilità di un illusorio bene superiore acquisiranno un potere senza precedenti.
        </Paragraph>
        <Paragraph>
          Le serpi velenose, un ordine ancora più rigido e terrificante, si celano dietro alla meravigliosa facciata. Questa è l'essenza della degenerazione autoritaria dei liberali americani, i plagiatori dell'occidente. Un movimento politico che trova più similitudini con l'ethos di Xi Jinping, il Re del grande dragone rosso, che punti di conflitto.
        </Paragraph>
        <Paragraph>
          Esiste più nobiltà nell'oppressione e nella negazione di libertà portate con schiettezza, onestà e consapevolezza della propria malvagità che nella brama di controllo portata con falsità e illusione. Un essere strisciante ben più abietto di chi si limita alla malvagità.
        </Paragraph>
        <br />
        <Heading as="h3" fontSize={16}>
          Eliminazione della potenza di calcolo generalizzata per uso privato
        </Heading>
        <Paragraph>
          Il massimo impegno verso la ricerca di un controllo sempre più esteso dovrà passare attraverso un'azione mirata a negare qualunque creazione parallela all'infrastruttura di sorveglianza. Rendendo illegale l'uso di una macchina di Turing universale, una macchina capace di computazione generalizzata, si eliminerà la minaccia posta da uno strumento che per sua natura è indipendente da qualsiasi controllo. Già in passato, negli anni '90, gli Stati Uniti hanno intrapreso una crociata contro qualsiasi forma di crittografia applicata, ciò che costituisce l'elemento fondamentale di qualsiasi connessione sicura in reti distribuite e l'unico strumento in grado di garantire assoluta privatezza. L'invenzione della crittografia asimmetrica ha permesso all'individuo di rimuovere qualsiasi vincolo di fiducia riposto in attori esterni: nella sua infinita eleganza, è tra le singole più importanti tecnologie sviluppate e adoperate dall'uomo.
        </Paragraph>
        <Paragraph>
          Nei tentativi di soffocare la libertà d'azione dell'individuo, sotto il ricorrente pretesto di voler salvaguardare la sicurezza statale da attori malintenzionati, gli U.S.A. sono riusciti, per un periodo di tempo, a rendere illegale qualsiasi forma di crittografia. In risposta a questo provvedimento è stata creata una maglietta che in cinque righe condensate di codice rappresentava l'implementazione dell'algoritmo di criptazione asimmetrico RSA, fornendo così gli strumenti a chiunque lo implementasse di generare una coppia di chiavi per stabilire una connessione sicura e privata. Poiché qualsiasi forma di applicazione crittografica era stata resa illegale, per lo stato americano quella maglietta rappresentava una munizione, e chiunque la indossasse un criminale.
        </Paragraph>
        <Paragraph>
          È un aneddoto che sottolinea l'ottusità e le tendenze di controllo che portano qualsiasi forma di governo, in un modo o nell'altro, ad andare contro il benessere dell'individuo; un mondo dove la crittografia è illegale sarebbe privato di un diritto umano fondamentale, oltre a condannare nel reame del crimine la possibilità di svolgere banali operazioni matematiche come addizione e divisione.
        </Paragraph>
        <Paragraph>
          Dopo questo primo tentativo represso, sono state create altre vie che oggi sempre più pervadono la dimensione privata del cittadino. In un'epoca iper-tecnologica il paradosso risiede nel fatto che siano sempre meno persone a saper usare abilmente il computer; l'utilizzo massiccio si è spostato sui dispositivi ovattati come telefoni e tablet, e sono sempre più i giovani che non hanno mai usato un computer. Il telefono medio per design, a differenza del computer, non concede i privilegi di amministratore all'utente. Il legittimo proprietario, colui che possiede le facoltà di cancellare, modificare e muovere qualsiasi frammento del sistema a proprio piacimento, non è dunque l'utente finale. Il prodotto viene acquistato dopodiché la casa madre gode di un flusso interminabile di dati procurati per lei gratuitamente dall'utente. Una schiavitù del noleggio inconsapevole. Il tema ricorrente consiste sempre nel ottenere un potere di influenza e gestione dei flussi di dati, fornendo un'illusoria comodità all'utente che consiste in una barriera di astrazione rispetto ai danni irreversibili che la responsabilità di essere amministratore potrebbe procurare al proprio sistema.
        </Paragraph>
        <Paragraph>
          Le corporazioni proclamano di tutelare e salvaguardare l'incolumità dell'individuo, ma nel frattempo gestiscono un traffico clandestino di estrazione dal valore inestimabile. L'influenza di Amazon, Google, Apple e Microsoft è dovuta solo in parte ai propri prodotti; la sorgente del loro valore è situata nella rete di utenti, schiavi non retribuiti, che hanno saputo conquistare. È questo il motivo per cui il costo di competizione nei loro domini di influenza è proibitivo per chiunque altro.
        </Paragraph>
        <Paragraph>
          Il successivo passo logico dell'azione di espansione tecnologica per Windows e Apple coincide dunque con una replica del modello cellulare anche sui computer. Queste due corporazioni saranno il padrone indiscusso del dispositivo che noleggeranno all'utente, come già fanno per tutti i servizi cloud. Questo ciclo vizioso porterà l'intera popolazione a vivere di noleggi perpetui, sempre soggetta alle volontà esterne e perdendo ogni sembianza di autonomia tecnologica. Le corporazioni si riserveranno la possibilità di rimuovere l'accesso arbitrariamente, su indicazione del governo o per propria volontà, poiché sull'onda di questa promozione saranno diventate le depositarie assolute del potere esecutivo, instaurando così la dittatura dei Termini e Condizioni, unilateralmente stipulati.
        </Paragraph>
        <Paragraph>
          È interessante ritrovare un ritorno alle origini in questo nuovo ordine delle cose. Negli anni '70 la potenza di computazione era talmente poco densa che era solo concepibile sfruttarla attraverso un terminale connesso ad un mainframe erogatore di un servizio; nel 1990 densità di calcolo era migliorata e in grado di rendere fattibile l'unione tra terminale e calcolatore, rendendo così l'utente assoluto sovrano dei propri dati; dal 2010 in poi il paradigma è tornato al punto d'inizio, dove il terminale è dotato di una potenza marginale dedicata alle applicazioni più triviali, mentre le vere capacità di computazione sono ospitate in server appartenenti a corporazioni (AWS, Azure). Il futuro riserverà un'ulteriore estremizzazione del modello di servizio: il terminale sarà nient'altro che uno schermo connesso in rete, e l'intero processo computazionale sarà riservato alle corporazioni. Eliminando così la libertà di computazione privata l'individuo viene obbligato a consumare il prodotto filtrato dall'organo responsabile nelle corporazioni, per loro politica interna o su suggerimento esterno. Una reinvenzione del televisore. Già oggi per determinati versi è così, sopravvive ancora l'illusione della scelta, ma in realtà tutto ciò che è visibile sui dieci siti che generano la quasi totalità del traffico Internet è già passato attraverso le lenti di organi il cui compito è discernere l'accettabile da ciò che non lo è, proteggendo l'utente medio rendendolo ignaro rispetto alla giungla che si estende sotto alle uniche posizioni stimabili e accettabili. La rete moderna è diventata suscettibile a prese di potere disoneste per via della sua centralizzazione. La missione autistica mirata a massimizzare la velocità di flusso ha portato tutta l'infrastruttura ad essere dipendente su un numero ristretto di nodi. Sulla falsariga dell'infrastruttura anche i dati si sono concentrati negli artigli di una ristretta cerchia di corporazioni: i parametri di valutazione di una corporazione non sono più pertanto i profitti o le vendite, oppure l'EBITDA per chi è rimasto negli anni '80, ma diventa fondamentale l'estensione della propria sfera d'influenza.
        </Paragraph>
        <Paragraph>
          L'unica risposta praticabile a questo modello di servizio meschino consiste nel riconquistare i propri poteri e rivendicare il proprio territorio e la sovranità su quest'ultimo, puntando a diventare unici responsabili dei propri dati e rifiutando l'utilizzo di infrastrutture centralizzate che non siano allineate con l'ethos del movimento del Software Libero.
        </Paragraph>
        <Paragraph>
          L'individuo che dispone nel proprio arsenale la consapevolezza delle architetture, dei servizi e delle organizzazioni possiede la libertà di accesso volta a svelare le fragilità sistemiche e sovvertire in accezione positiva il modello.
        </Paragraph>
        <br />
        <Heading as="h3" fontSize={16}>
          Credito sociale e lasciapassare digitale
        </Heading>
        <Paragraph>
          L'unico metodo praticabile per ottenere un controllo onnipotente e diffuso è attraverso un sistema di credito sociale, una sorta di terrario in cui le mosse del sé digitale determinano per riflessione ciò che accade al sé in carne e ossa. In questa configurazione, il regime di sorveglianza predilige l'esistenza nello spazio virtuale, mentre il mondo in cui tutti i condannati vengono rinchiusi diventa la realtà materiale. Uno scorcio dell'esistenza subumana e castrata che attende l'uomo nella distopia del credito sociale che tutti i governi mirano a perfezionare, contro i manifesti desideri del cittadino consapevole, si possono trovare di volta in volta sotto forme diverse che però nell'intimità condividono sempre tutto.
        </Paragraph>
        <Paragraph>
          Di recente in Nigeria 71 milioni di cittadini, un terzo della popolazione, hanno visto il proprio telefono bloccato dal governo come punizione per non essersi iscritti al database delle identità nazionali digitali. Gli argomenti di discussione sono parte di uno sforzo concertato per infondere nell'inconscio collettivo l'esistenza di un obbligo morale volto garantire e facilitare la prevenzione da parte del governo di qualsiasi azione e pensiero che anche potenzialmente sia contrario al giudizio di questo organo onnisciente.
        </Paragraph>
        <Paragraph>
          In Italia un episodio di natura simile si è visto a Bologna dove è arrivata la tessera con i punti virtuali per i cittadini virtuosi. Accumulabili differenziando, usando i mezzi pubblici, non sprecando energia. Il ciclo vizioso dei crediti di buona condotta si insinua inizialmente in maniera apparentemente innocua e diventa così la nuova normalità: vivere richiedere il benestare del padrone. E qualsiasi libertà che possa concedere dal suo nuovo trovato potere verrà osannata come un atto di magnanimità totale, piuttosto che una banalità in una vita verace.
        </Paragraph>
        <Paragraph>
          Che venga sotto il nome di baratto amministrativo oppure patente digitale fa poca differenza. La realtà vede che questo sia un primo approccio alla distopia del controllo. Oltretutto che sia capitato a Bologna è solo premonizione, casualità. Questa fantasia non è altro che il sogno erotico degli autoritari di sinistra, che con i loro abiti virtuosi di uguaglianza e inclusione predicano la lotta alle tenebre, ma nell'intimo ardono un desiderio di vendetta e velenosa rivalsa.
        </Paragraph>
        <Paragraph>
          Il Green Pass non è stato altro che la prima fase dell'operazione a larga scala, un'operazione, che come tutte le precedenti pare essere, da un primo punto di vista ingenuo utile, ma che dopo un'analisi più accurata rivela tutte le sue contraddizioni facendo emergere i veri motivi: uno strumento di sorveglianza che come carburante sfrutta il terrore indotto nella popolazione. Legalizzando e accettando provvedimenti di natura malvagia, l'individuo si sta piegando a volontà rispetto alle quali non potrà mai più ristabilire alcun tipo di dominio.
        </Paragraph>
        <Paragraph>
          È legittimo discutere in quali modalità le rinunce ad aspetti della propria autonomia abbiano implicazioni positive, ma una necessità imprescindibile rimane dimostrare il benessere prodotto da queste violazioni.
        </Paragraph>
        <br />
        <Paragraph>
          Nessuno è autorizzato ad essere talmente ingenuo e sprovveduto da non occupare parte del proprio pensiero a questioni di questa natura. Nella dimensione distorta del potere malvagio la benevolenza non potrà mai essere ciò che solleva il coltello dalla posizione parassitaria e predatoria assunta nello sterno dell'individuo.
        </Paragraph>
        <Paragraph>
          Qualunque serio studente della storia e di qualunque forma strutturata di società giunge inevitabilmente a comprendere come il controllo sia una caratteristica intrinseca dell'organo governativo. Ed è un cliché, ma più gliene viene concesso più ne ricercano. In ultima analisi il governo non ha alcun ruolo attivo in qualsiasi forma di produzione. La loro stessa esistenza è perpetuata da ciò che sono in grado di estrarre dal corpo di umani che amministrano. In una scala di successo personale, il valore di un governo non è misurato dalla qualità del servizio offerto ai sudditi, ma da quanto è in grado di estrarre.
        </Paragraph>
        <Paragraph>
          L'intera successione di misure che predano sull'inconsapevolezza degli individui minaccia le condizione della prosperità umana. Tramite il ricatto stanno preparando la strada per l'avvento definitivo della società di sorveglianza, una creatura terrificante dove l'unione di governo e giga-corporazioni conquista il potere di determinare le volontà e sovrascrivere le libertà. È la rimozione dal dominio della coscienza della concezione di individualità nell'esistenza, la brama di miserabili tiranni.
        </Paragraph>
        <Paragraph>
          A meno che più persone non riescano a raccogliere il coraggio per rinunciare al conformismo a favore della difesa dell'autodeterminazione, e fornire almeno un minuscolo contributo, in qualsiasi forma, anche tramite la sola consapevolezza, al conflitto col tiranno, le diverse società di questo mondo continueranno a percorre le orme della fatale spirale del controllo, in cui il governo è libero di fare tutto ciò che vuole, mentre ai cittadini è riservato agire solo previo permesso. È la dittatura dell'intimidazione, del ricatto e della forza bruta, un modello che soffoca qualsiasi possibilità di pensiero e parola imponendo la rinuncia dello spirito vitale e favorendo il prosperare del conformismo.
        </Paragraph>
        <Paragraph>
          Occorre gridare l’aspetto più terrificante del nostro mondo: l’equanimità e il distacco con cui persone equilibrate e ragionevoli possano osservare il dispiegarsi della storia senza una consapevolezza ad un livello più profondo, abbracciando la corruzione delle apparenze e delle manipolazioni. Questa realtà è più terrificante del occasionale prototipo di malvagità assoluta che viene al mondo, da Pol Pot a Noriega, passando per tanti altri ancora più celebri. L’acquisizione del potere da parte di questi non sarebbe stata possibile se il loro dispiegarsi non fosse stato appoggiato dall’apatia e dal distacco sereno della popolazione. In qualche senso saranno gli stessi equilibrati e ragionevoli inconsapevolmente uniti sotto il fardello di colpevolezza dell'insorgere della domesticazione e schiavitù umana sotto il nuovo prototipo di tirannia.
        </Paragraph>
        <Paragraph>
          In assenza di comprensione estesa di ciò che lo circonda, l’uomo è atomico, non fa parte della propria tradizione storica e non ha integrato in sé lo spirito e l’eredità dei propri antenati, coloro il cui ingegno e sforzo vitale ha concepito la realtà in cui l'uomo odierno risiede. I grandi eventi della storia mondiale sono a conti fatti di ben scarsa importanza. In ultima analisi, nella vita ciò che sintetizza davvero il significato è l'individuo. Soltanto quest’ultimo fa la storia, soltanto in esso hanno luogo le grandi trasformazioni. L'intero futuro e l'intera storia del mondo derivano da un'enorme somma di queste fonti celate negli individui. Nelle nostre vite più private e soggettive, siamo non soltanto i testimoni passivi della nostra epoca, coloro che la subiscono, ma anche i suoi artefici. Pertanto diventa un imperativo sfidare costantemente il dominio della propria consapevolezza; rinunciare a questo processo è la sconfitta dei nostri poteri, non volontà nostra ma piuttosto obbligo di natura; non una sottomissione volontaria ma una totale e inequivocabile sconfitta. Questo è il processo che si estende eoni con l'interminabile rinnovamento dello spettro delle creazioni in cui l'uomo nuota e tenta di non affogare: con uno stivale sul volto risulta più difficile.
        </Paragraph>
        <Paragraph>
          Le forme di avidità e di prepotenza non mutano mai nel tempo, ciò che cambia sono gli strumenti attraverso i quali si manifestano. La vita richiede di essere consapevoli e punisce con infallibilità colui che rifiuta la via che dell'indipendenza e dell'autosufficienza. Delegare il proprio giudizio a terzi, per quanto possa essere attraente nella sua semplicità, è ciò che notoriamente condanna.
        </Paragraph>

        <br />
        <Quote>L'unico modo per affrontare un mondo non libero è diventare così liberi che la vostra stessa esistenza diventi un atto di ribellione.</Quote>
        &nbsp;<br />―  Albert Camus

        <Divider my={6} />
        <Heading as="h3" fontSize={18}>
          Materiale aggiuntivo
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.youtube.com/watch?v=n9YDz-Iwgyw" target="_blank">
              Reclaim your freedom with free software now&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Link href="hhttps://www.lexisnexis.com/risk/intl/en/resources/research/true-cost-of-aml-compliance-apac-survey-report.pdf" target="_blank">
              RAML & KYC Analysis&nbsp;<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
