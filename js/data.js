/* ==========================================================================
   CONTENIDO EDITABLE DE LA WEB
   ==========================================================================
   Este es el ÚNICO archivo que necesitas tocar para rellenar la web.
   No hace falta saber programar: solo edita el texto entre comillas " ".
   Cada texto tiene versión "es" (español) y "en" (inglés).

   Las imágenes van en la carpeta /images/. Pon ahí tus fotos y escribe
   la ruta, por ejemplo: "images/foto-explorer/01-zoom.jpg"
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. FOTO EXPLORER

   PUNTOS DE PARTIDA
   El juego intenta detectar la ubicación del móvil del jugador para empezar
   por el reto más cercano. Si el navegador no puede o no le dejan (algunos
   móviles bloquean la geolocalización, o no hay cobertura GPS en ese
   momento), se le pide elegir uno de estos 3 puntos de partida y se ordena
   la ruta desde ahí. Puedes cambiar sus coordenadas si lo consideras.
   -------------------------------------------------------------------------- */

const STARTING_POINTS = [
  {
    id: "obradoiro",
    name: { es: "Praza do Obradoiro (Catedral)", en: "Praza do Obradoiro (Cathedral)" },
    lat: 42.8805,
    lng: -8.5456
  },
  {
    id: "mercado",
    name: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    lat: 42.8794,
    lng: -8.5438
  },
  {
    id: "alameda",
    name: { es: "Alameda", en: "Alameda" },
    lat: 42.8776,
    lng: -8.5476
  }
];


/* --------------------------------------------------------------------------
   Cada objeto de la lista es un "reto". Para rellenar uno:

   - clueImage:    la foto-pista que se ve ANTES de encontrar el sitio
                   (usa el enlace DIRECTO de imgur, tipo https://i.imgur.com/XXXXX.jpeg
                   — no el enlace de la página tipo https://imgur.com/XXXXX).
                   Para conseguirlo: abre la imagen en imgur, botón derecho
                   sobre ella > "Copiar dirección de la imagen".
   - title:        nombre corto del reto (aparece antes de encontrarlo)
   - mapsQuery:    el nombre del lugar tal cual lo buscarías en Google Maps
   - lat / lng:    coordenadas del lugar exacto — así el juego sabe lo cerca
                   que está de cada jugador. Consíguelas con clic derecho en
                   Google Maps > "¿Qué hay aquí?". Si las dejas en null, el
                   reto seguirá funcionando pero aparecerá siempre al final
                   de la lista (el juego no sabe dónde colocarlo).
   - reward:       el texto largo que se muestra al marcarlo como encontrado
   - rewardImage:  la foto "buena" del detalle, la que se enseña de premio
                   (mismo formato de enlace directo que clueImage)
   - imagePosition: OPCIONAL. Si la foto se recorta mal (por ejemplo, se ve
                   el centro pero no la parte de arriba de lo importante),
                   añade este campo con "top", "bottom", "left", "right" o
                   un valor tipo "50% 20%" para decirle al recorte qué parte
                   de la foto priorizar. Si no lo pones, recorta centrado.
   -------------------------------------------------------------------------- */

const PHOTO_CHALLENGES = [
  {
    id: "reto-01",
    clueImage: "https://i.imgur.com/0lVKJ2y.jpeg",
    title: { es: "Hostal dos Reis Católicos", en: "Hostal dos Reis Católicos" },
    mapsQuery: "42.88092,-8.545828",
    lat: 42.88092,
    lng: -8.545828,
    reward: {
      es: "¡Uno de los edificios más importantes de Santiago!\n\nAunque ahora es un hotel, no siempre fue así. Originalmente era un hospital de peregrinos. La mayoría sabe que lo fundaron los Reyes Católicos, pero pocos conocen su verdadera función. Aquí no venían a \"hacer noche\": llegaban personas con infecciones, fracturas, pies destrozados o enfermedades tras recorrer miles de kilómetros. El hospital ofrecía cama, comida y asistencia médica gratuita. En verano podían permanecer tres días; en invierno, cinco.\n\nTenéis enfrente una cadena enorme, ¡no es decorativa! Esa gruesa cadena sostenida por pilares frente a la portada marcaba el límite de la jurisdicción del hospital. Era una forma visible de decir: \"a partir de aquí manda el Hospital, no el Ayuntamiento\". Surgió tras disputas de competencias entre ambas instituciones.\n\nAunque hoy sea un hotel de lujo, mantiene una tradición heredada de su origen hospitalario: ofrece un número limitado de comidas gratuitas a peregrinos que acreditan haber completado el Camino. Es una pequeña supervivencia de la función para la que fue creado hace más de cinco siglos.\n\nMi rincón favorito del edificio, sin embargo, no es la fachada: es el primer patio renacentista. Si entras temprano, antes de que lleguen los grupos, el sonido del agua y la piedra crean una atmósfera muy parecida a la que pudieron experimentar los peregrinos del siglo XVI al cruzar por primera vez sus puertas.\n\nAhora, ¡estad atentos! La siguiente parada está muy cerca, escaleras arriba.",
      en: "One of the most important buildings in Santiago!\n\nAlthough it's a hotel today, it wasn't always one. It was originally a pilgrims' hospital. Most people know it was founded by the Catholic Monarchs, but few know its true purpose. People didn't come here to \"spend the night\": they arrived with infections, fractures, ruined feet, or illnesses after walking thousands of kilometers. The hospital offered a bed, food, and free medical care. In summer they could stay three days; in winter, five.\n\nThere's a huge chain in front of the building — it's not decorative! That thick chain held up by pillars in front of the façade marked the boundary of the hospital's jurisdiction. It was a visible way of saying: \"from here on, the Hospital rules, not the City Council.\" It came about after disputes over authority between the two institutions.\n\nEven though it's a luxury hotel today, it keeps a tradition inherited from its hospital origins: it still offers a limited number of free meals to pilgrims who can prove they completed the Camino. It's a small survival of the purpose it was built for over five centuries ago.\n\nMy favorite corner of the building, though, isn't the façade — it's the first Renaissance courtyard. If you go in early, before the tour groups arrive, the sound of water and stone creates an atmosphere very similar to what 16th-century pilgrims might have experienced the first time they crossed its doors.\n\nNow, pay attention! The next stop is very close, up the stairs."
    },
    rewardImage: "https://i.imgur.com/Gro1zws.jpeg"
  }
,
  {
    id: "reto-02",
    clueImage: "https://i.imgur.com/QCVUIT0.jpeg",
    title: { es: "Pazo de Xelmírez / Arco de Xelmírez", en: "Pazo de Xelmírez / Arco de Xelmírez" },
    mapsQuery: "42.880884,-8.5453733",
    lat: 42.880884,
    lng: -8.5453733,
    reward: {
      es: "Estáis debajo del Pazo de Xelmírez, en el Arco de Xelmírez. Lo curioso es que esas escaleras no se construyeron simplemente para salvar un desnivel. Durante siglos fueron una de las arterias principales de Santiago. La antigua \"Rúa Maior\" atravesaba literalmente el palacio arzobispal: quien llegaba desde la Porta do Camiño y el Camino Francés pasaba por ese arco para alcanzar el Obradoiro y continuar hacia la Porta da Trindade. Es decir, el palacio no cortaba la ciudad: la ciudad pasaba por debajo del palacio.\n\nSi el Hostal de los Reyes Católicos representa el poder de la Corona, el Pazo de Xelmírez representa el poder del arzobispo. Y en el siglo XII, el arzobispo de Santiago era casi tan poderoso como un rey. El primer palacio episcopal estaba en la zona de Platerías. En 1117 una revuelta popular lo destruyó casi por completo mientras el joven Alfonso Raimúndez (futuro Alfonso VII) se encontraba en la ciudad. Diego Xelmírez decidió entonces levantar una residencia mucho más sólida y simbólica junto a la Catedral. No era solo reconstruir: era dejar claro quién mandaba en Compostela.\n\nMás que un obispo, fue un auténtico político. Consiguió que Santiago se convirtiera en sede arzobispal, impulsó la construcción de la Catedral románica, organizó una flota para proteger la costa gallega y negoció de igual a igual con reyes y papas. El palacio era su centro de operaciones.\n\nSi haces el recorrido en sentido descendente, desde Acibechería, el pasadizo comprime el espacio. Caminas entre muros de granito, bajo una bóveda relativamente baja, y de repente desembocas en el inmenso vacío del Obradoiro. Ese contraste está amplificado por la propia topografía y hace que la fachada barroca aparezca de golpe, casi como un telón que se abre. No es casualidad que muchos peregrinos describan ese momento como el más emocionante de toda la llegada.\n\nSi te fijas, casi siempre hay músicos callejeros tocando en el descansillo del arco. No es solo porque pase mucha gente: la bóveda de piedra produce una reverberación muy agradable, que proyecta el sonido hacia ambas plazas. Es uno de los mejores \"escenarios naturales\" del casco histórico. Es tan importante, que grandes grupos de música tradicional gallega como Berrogüeto dieron sus primeros pasos bajo este arco; y a día de hoy para obtener permiso y tocar aquí, has de pasar un casting.\n\nAhora, ¡continuemos subiendo!",
      en: "You're standing beneath the Pazo de Xelmírez, under the Arco de Xelmírez. The curious thing is that these stairs weren't built simply to handle a change in elevation. For centuries they were one of Santiago's main arteries. The old \"Rúa Maior\" ran literally straight through the archbishop's palace: anyone arriving from the Porta do Camiño along the French Way passed through this arch to reach the Obradoiro and continue on toward the Porta da Trindade. In other words, the palace didn't cut the city in two — the city passed right underneath the palace.\n\nIf the Hostal dos Reis Católicos represents the power of the Crown, the Pazo de Xelmírez represents the power of the archbishop. And in the 12th century, the archbishop of Santiago was almost as powerful as a king. The first episcopal palace stood in the Praterías area. In 1117 a popular uprising destroyed most of it while the young Alfonso Raimúndez (the future Alfonso VII) happened to be in the city. Diego Xelmírez then decided to build a much more solid, symbolic residence right next to the Cathedral. It wasn't just about rebuilding — it was about making clear who ruled Compostela.\n\nMore than a bishop, he was a real politician. He got Santiago made an archbishopric, drove the construction of the Romanesque Cathedral, organized a fleet to protect the Galician coast, and negotiated on equal footing with kings and popes. The palace was his operations center.\n\nIf you walk the route downhill, from Acibechería, the passage compresses the space. You walk between granite walls, under a fairly low vault, and suddenly spill out into the immense openness of the Obradoiro. That contrast is amplified by the topography itself, making the baroque façade appear all at once, almost like a curtain opening. It's no coincidence that many pilgrims describe that moment as the most moving of the whole arrival.\n\nIf you pay attention, there are almost always street musicians playing on the landing under the arch. It's not just because so many people pass by: the stone vault produces a very pleasant reverberation that projects sound toward both squares. It's one of the best \"natural stages\" in the old town — so important that big traditional Galician music groups like Berrogüeto took their first steps under this arch, and to this day you need to pass an audition to get permission to play here.\n\nNow, let's keep climbing!"
    },
    rewardImage: "https://i.imgur.com/DYahj4B.jpeg"
  },
  {
    id: "reto-03",
    clueImage: "https://i.imgur.com/JwKZKWv.jpeg",
    title: { es: "San Martiño Pinario / Praza da Acibechería", en: "San Martiño Pinario / Praza da Acibechería" },
    mapsQuery: "42.8811961,-8.5443358",
    lat: 42.8811961,
    lng: -8.5443358,
    reward: {
      es: "Los grandes rivales de la Catedral\n\nLos monjes de San Martiño fueron los primeros custodios del culto al Apóstol. Sin embargo, a finales del siglo XI los canónigos de la Catedral fueron asumiendo ese papel y el monasterio perdió gran parte de su influencia. Durante siglos hubo tensiones por privilegios, rentas e incluso por quién debía tener protagonismo en las ceremonias. En cierto modo, la historia de Santiago también es la historia de esa rivalidad silenciosa. Muestra de esa rivalidad es esa torre truncada que podéis ver a la izquierda. En su día, quisieron hacerla más alta que la Catedral, hasta que el arzobispo les cortó las alas (y la punta… de la Torre). Consecuencia de eso es una ley antigua que todavía se respeta y que no permite construir más alto que la Catedral en los terrenos de la ciudad.\n\nCuando miras San Martiño desde la plaza parece enorme… y lo es. Pero el efecto está calculado. La iglesia se levantó sobre un terreno muy inclinado, por lo que los arquitectos aprovecharon el desnivel para crear una nave altísima sin que el edificio pareciera desproporcionado desde el exterior.\n\nHoy muchos la llaman Praza da Inmaculada, aunque históricamente fue la Praza da Acibechería, porque aquí trabajaban los artesanos del azabache. El azabache compostelano era un auténtico souvenir medieval. Los peregrinos compraban conchas, cruces, vieiras y pequeñas imágenes talladas en ese material, a las que además se atribuían propiedades protectoras contra el mal de ojo. Todavía puedes comprar artesanía de azabache en los alrededores como recuerdo. Como curiosidad, no es una piedra, es madera fosilizada.\n\nSi te colocas en el centro de la plaza y giras sobre ti mismo, tienes condensado el poder de la Compostela medieval:\n• Al sur, la Catedral (el poder espiritual).\n• Al oeste, el Pazo de Xelmírez (el poder político del arzobispo).\n• Al norte, Mosteiro de San Martiño Pinario (el poder monástico).\n• Al este, la antigua entrada del Camino Francés.\n\nEn apenas 50 metros convivían —y competían— las instituciones más poderosas del noroeste peninsular.\n\nEn la fachada de Igrexa de San Martiño Pinario, sobre la puerta principal, verás a San Martín de Tours partiendo su capa con un pobre. Lo curioso es que el caballo ocupa casi tanto protagonismo como el santo. No es casual: el caballo simboliza el poder militar y nobiliario al que el santo renuncia al compartir su capa. Es un mensaje de humildad colocado precisamente en la fachada del monasterio más rico de Galicia. Retranca esculpida en piedra.\n\nAhora, prestad atención porque la siguiente está un poco escondida, en un callejón cuesta arriba, pegado al monasterio.",
      en: "The Cathedral's great rivals\n\nThe monks of San Martiño were the first custodians of the cult of the Apostle. However, by the late 11th century the Cathedral's canons had taken over that role, and the monastery lost much of its influence. For centuries there was tension over privileges, revenues, and even who should take center stage in ceremonies. In a way, the history of Santiago is also the history of that quiet rivalry. Proof of that rivalry is the truncated tower you can see on the left. At one point they tried to make it taller than the Cathedral, until the archbishop clipped their wings (and the tip... of the tower). As a result, there's an old law, still respected today, that forbids building taller than the Cathedral anywhere in the city.\n\nWhen you look at San Martiño from the square it seems enormous — and it is. But the effect is calculated. The church was built on a steeply sloped plot, so the architects used the difference in elevation to create an extremely tall nave without the building looking disproportionate from the outside.\n\nToday many call it Praza da Inmaculada, though historically it was Praza da Acibechería, because the jet-stone (azabache) craftsmen worked here. Compostelan jet was a genuine medieval souvenir. Pilgrims bought shells, crosses, scallops and small carved figures in this material, which were also believed to have protective properties against the evil eye. You can still buy jet handicrafts nearby as a souvenir. As a fun fact, it isn't actually a stone — it's fossilized wood.\n\nIf you stand in the middle of the square and turn around slowly, you have the power of medieval Compostela laid out before you:\n• To the south, the Cathedral (spiritual power).\n• To the west, the Pazo de Xelmírez (the archbishop's political power).\n• To the north, the Mosteiro de San Martiño Pinario (monastic power).\n• To the east, the old entrance of the French Way.\n\nIn barely 50 meters, the most powerful institutions of the northwest of the Iberian Peninsula lived side by side — and competed.\n\nOn the façade of the Igrexa de San Martiño Pinario, above the main door, you'll see Saint Martin of Tours cutting his cloak to share with a poor man. The curious thing is that the horse gets almost as much prominence as the saint. That's not by chance: the horse symbolizes the military and noble power the saint gives up by sharing his cloak. It's a message of humility, placed right on the façade of the wealthiest monastery in Galicia. Wit carved in stone.\n\nNow, pay attention, because the next stop is a little hidden, in an uphill alley right next to the monastery."
    },
    rewardImage: "https://i.imgur.com/hONTRPY.jpeg"
  },
  {
    id: "reto-04",
    clueImage: "https://i.imgur.com/YUcTqe6.jpeg",
    title: { es: "Rúa da Moeda Vella", en: "Rúa da Moeda Vella" },
    mapsQuery: "42.8814382,-8.5439171",
    lat: 42.8814382,
    lng: -8.5439171,
    reward: {
      es: "Este es uno de mis lugares favoritos de Santiago porque esconde una historia que pasó inadvertida durante más de siete siglos.\n\nMaría Leve y Sancha Pérez\n\nUna cantiga satírica del siglo XIII sitúa aquí a dos mujeres: María Leve y Sancha Pérez.\n\nDurante mucho tiempo se interpretó simplemente como una burla a una soldadeira (artista itinerante), pero estudios recientes han puesto el foco en otro aspecto: los textos describen una relación afectiva entre ambas mujeres con un grado de concreción muy poco habitual para la Europa medieval. Sabemos sus nombres, la calle donde vivían y hasta que un trovador estaba celoso porque Sancha no le hacía caso.\n\nEl estribillo más famoso repite:\n«E na Moeda Velha vai morar / Dona Maria Leve, a seu pesar.»\n\nLa composición cuenta que María se traslada a vivir a la Moeda Vella porque su manceba (término medieval que puede significar compañera o amante, según el contexto) ya no quiere seguir viviendo con ella. El propio poema juega continuamente con esa separación.\n\n¿La primera pareja de mujeres documentada?\n\nConviene ser prudentes. No existe un documento que diga explícitamente \"eran pareja\". Sin embargo, muchos medievalistas consideran que el conjunto de las cantigas hace muy plausible esa interpretación y destacan que es un caso extraordinariamente raro en la literatura europea del siglo XIII.\n\nVarias cantigas galaicoportuguesas del siglo XIII mencionan a María Leve y Sancha Pérez como personas reales de Santiago. No son personajes legendarios. Aparecen asociadas a la zona de la Moeda Vella y los poemas describen una relación estrecha entre ambas.\n\nLo interesante es el uso de palabras como \"manceba\", que en la documentación medieval puede significar desde criada o compañera hasta amante, según el contexto. En las cantigas, además, hay referencias a convivencia, separación, celos y conflictos afectivos que recuerdan más a una relación sentimental que a una mera amistad o relación laboral. Por eso algunos investigadores consideran que podría tratarse de una relación amorosa entre mujeres.\n\nUn detalle poco conocido es que el autor de una de las cantigas, Pero da Ponte, parece burlarse de la situación porque él mismo estaba interesado en Sancha. Es decir, el tono no es el de alguien denunciando un delito o una conducta escandalosa, sino el de un poeta que utiliza un conflicto sentimental para hacer sátira. Eso resulta bastante llamativo para la época.\n\nTambién es importante recordar que la sociedad medieval no clasificaba las relaciones con las categorías actuales (\"lesbiana\", \"bisexual\", etc.). Por eso los especialistas más cautos prefieren decir que existió una relación afectiva intensa entre dos mujeres antes que aplicar etiquetas modernas.\n\nLo verdaderamente excepcional no es tanto que pudieran haber sido pareja —seguramente hubo muchas— sino que conservamos sus nombres. La inmensa mayoría de personas corrientes del Santiago del siglo XIII desaparecieron de la historia. María Leve y Sancha Pérez, en cambio, quedaron inmortalizadas en versos, con dirección casi exacta incluida.\n\nY hay otro matiz fascinante: las cantigas no las presentan como figuras nobles o santas, sino como mujeres de la vida cotidiana. Eso convierte a la Moeda Vella en uno de los poquísimos lugares de Europa donde podemos señalar una calle concreta y decir: \"aquí vivieron dos mujeres cuya relación amorosa, o al menos profundamente afectiva, fue comentada por sus contemporáneos hace más de siete siglos\".\n\nLa calle es estrecha, silenciosa y queda justo detrás del enorme monasterio de San Martiño Pinario, uno de los centros del poder eclesiástico medieval. Resulta fascinante pensar que, mientras a pocos metros se tomaban decisiones religiosas y políticas de enorme trascendencia, una pequeña calle conservó en la literatura la memoria de dos mujeres cuya historia ha sobrevivido más de 750 años gracias a unos versos aparentemente satíricos. Es uno de esos rincones donde Santiago demuestra que su historia no solo está escrita en la piedra, sino también en la poesía.\n\nAhora, continuemos por este callejón para encontrar la siguiente parada.",
      en: "This is one of my favorite spots in Santiago because it hides a story that went unnoticed for more than seven centuries.\n\nMaría Leve and Sancha Pérez\n\nA satirical cantiga from the 13th century places two women here: María Leve and Sancha Pérez.\n\nFor a long time it was read simply as mockery of a soldadeira (a traveling performer), but recent studies have focused on another angle: the texts describe an affectionate relationship between the two women with a level of specific detail that's very unusual for medieval Europe. We know their names, the street where they lived, and even that a troubadour was jealous because Sancha wouldn't pay him any attention.\n\nThe most famous refrain repeats:\n\"E na Moeda Velha vai morar / Dona Maria Leve, a seu pesar.\"\n\nThe poem tells how María moves to live on the Moeda Vella because her manceba (a medieval term that can mean companion or lover, depending on context) no longer wants to live with her. The poem itself keeps playing with that separation.\n\nThe first documented female couple?\n\nIt's worth being cautious here. There's no document that explicitly states \"they were a couple.\" Still, many medievalists consider that reading very plausible when you look at the cantigas as a whole, and they point out that it's an extraordinarily rare case in 13th-century European literature.\n\nSeveral Galician-Portuguese cantigas from the 13th century mention María Leve and Sancha Pérez as real people from Santiago. They aren't legendary figures. They're associated with the Moeda Vella area, and the poems describe a close relationship between the two.\n\nWhat's interesting is the use of words like \"manceba,\" which in medieval documents can mean anything from servant or companion to lover, depending on context. The cantigas also include references to living together, separation, jealousy, and emotional conflict that sound more like a romantic relationship than mere friendship or a working relationship. That's why some researchers believe it could have been a romantic relationship between women.\n\nA little-known detail is that the author of one of the cantigas, Pero da Ponte, seems to be mocking the situation because he himself was interested in Sancha. In other words, the tone isn't that of someone denouncing a crime or scandalous behavior, but that of a poet using a personal conflict to write satire. That's quite striking for the period.\n\nIt's also worth remembering that medieval society didn't classify relationships using today's categories (\"lesbian,\" \"bisexual,\" etc.). That's why the more cautious specialists prefer to say that an intense affectionate relationship existed between two women, rather than applying modern labels.\n\nWhat's truly exceptional isn't so much that they may have been a couple — there were surely many — but that we still have their names. The vast majority of ordinary people from 13th-century Santiago vanished from history. María Leve and Sancha Pérez, on the other hand, were immortalized in verse, complete with an address that's almost exact.\n\nAnd there's another fascinating detail: the cantigas don't present them as noble figures or saints, but as women from everyday life. That makes the Moeda Vella one of the very few places in Europe where we can point to a specific street and say: \"here lived two women whose romantic, or at least deeply affectionate, relationship was talked about by their contemporaries more than seven centuries ago.\"\n\nThe street is narrow, quiet, and sits right behind the huge monastery of San Martiño Pinario, one of the centers of medieval church power. It's fascinating to think that, just a few meters away, enormously consequential religious and political decisions were being made, while a small street preserved, in literature, the memory of two women whose story has survived more than 750 years thanks to some apparently satirical verses. It's one of those corners where Santiago shows that its history isn't only written in stone, but in poetry too.\n\nNow, let's continue down this alley to find the next stop."
    },
    rewardImage: "https://i.imgur.com/YC4PUaY.jpeg"
  },
  {
    id: "reto-05",
    clueImage: "https://i.imgur.com/YP2FsBz.jpeg",
    title: { es: "Igrexa de San Martiño Pinario", en: "Igrexa de San Martiño Pinario" },
    mapsQuery: "42.8821091,-8.5436103",
    lat: 42.8821091,
    lng: -8.5436103,
    reward: {
      es: "Si el exterior impresiona, el interior de Igrexa de San Martiño Pinario es donde se entiende por qué fue el gran monasterio benedictino de Galicia.\n\nEl inmenso retablo no está presidido por San Martín, sino por San Benito, fundador de la orden benedictina. A sus pies aparecen dos obispos gallegos muy vinculados al monasterio: San Rosendo y San Pedro de Mezonzo. El mensaje era claro: los benedictinos reivindicaban su enorme peso en la historia religiosa de Galicia.\n\nEl coro está \"en medio\" de la iglesia\n\nHoy nos parece extraño, pero originalmente el coro ocupaba el centro de la nave, como ocurría en muchas iglesias monásticas. La espectacular sillería, tallada por Mateo de Prado, estaba pensada para el rezo diario de decenas de monjes. No era un elemento decorativo: era su lugar de trabajo.\n\nLa iglesia mira... hacia el oeste\n\nTradicionalmente, las iglesias cristianas orientan el altar hacia el este, símbolo de la Resurrección. En San Martiño ocurrió lo contrario: debido al terreno y al enorme monasterio existente, se obtuvo autorización papal para invertir la orientación y situar la cabecera hacia el oeste. Es una excepción muy poco frecuente.\n\nSi sientes que es buen momento para un descanso, encontrarás la cafetería Adelia en la plaza de San Miguel, sobre las escaleras. Si has venido a media tarde, el Camalea (a la derecha de la iglesia, según la observas) es un buen lugar para un combinado o algo refrescante.\n\nAhora, vuelve hacia la Catedral por la Rúa da Troia.",
      en: "If the outside is impressive, the inside of the Igrexa de San Martiño Pinario is where you understand why it was Galicia's great Benedictine monastery.\n\nThe immense altarpiece isn't presided over by Saint Martin, but by Saint Benedict, founder of the Benedictine order. At his feet appear two Galician bishops closely linked to the monastery: Saint Rosendo and Saint Peter of Mezonzo. The message was clear: the Benedictines were asserting their enormous weight in Galicia's religious history.\n\nThe choir sits \"in the middle\" of the church\n\nIt seems strange to us today, but the choir originally sat in the center of the nave, as was common in many monastic churches. The spectacular choir stalls, carved by Mateo de Prado, were designed for the daily prayers of dozens of monks. They weren't decorative — they were the monks' workplace.\n\nThe church faces... west\n\nTraditionally, Christian churches orient the altar to the east, a symbol of the Resurrection. In San Martiño the opposite happened: because of the terrain and the huge existing monastery, papal authorization was obtained to reverse the orientation and place the head of the church to the west. It's a very unusual exception.\n\nIf you feel like it's a good moment for a break, you'll find the Adelia café on Praza de San Miguel, up the stairs. If you've come by mid-afternoon, Camalea (to the right of the church, as you face it) is a good spot for a cocktail or something refreshing.\n\nNow, head back toward the Cathedral along Rúa da Troia."
    },
    rewardImage: "https://i.imgur.com/4DqbEMo.jpeg"
  },
  {
    id: "reto-06",
    clueImage: "https://i.imgur.com/VDJrPhI.jpeg",
    title: { es: "Casa da Troia", en: "Casa da Troia" },
    mapsQuery: "42.8815763,-8.5433773",
    lat: 42.8815763,
    lng: -8.5433773,
    reward: {
      es: "Este pequeño museo es una ventana a la Santiago universitaria de finales del XIX, una ciudad muy distinta de la de los peregrinos.\n\nEntre 1886 y 1906 la casa funcionó como una auténtica pensión estudiantil. La Universidad tenía pocos alumnos comparada con hoy, pero la mayoría venían de fuera de Galicia. Vivían hacinados, compartían habitaciones y apenas regresaban a casa durante el curso. La pensión era su hogar.\n\nAlejandro Pérez Lugín estudió Derecho en Santiago y convirtió la pensión de Doña Generosa Carollo en el escenario de La Casa de la Troya (1915). Lo curioso es que la novela tuvo tanto éxito que acabó cambiando la percepción de la ciudad: durante décadas, muchos españoles imaginaban el Santiago universitario a través de sus páginas.\n\nLa tuna ensayaba allí\n\nLa primera planta recrea también el espacio donde ensayaba la tuna compostelana. En aquella época, las tunas no eran solo una tradición folclórica: eran parte de la vida social de la universidad y una forma de ganar algún dinero ofreciendo serenatas.\n\nEl museo es económico y curioso, pero aunque sea, asómate a la ventana de la planta baja: entra en la casa sin prisas y olvídate por un momento de la novela. Más que un museo literario, es uno de los pocos lugares de Santiago donde puedes imaginar cómo era el día a día de un estudiante de hace 130 años: el frío, los pupitres, las bromas, las serenatas y el bullicio de una ciudad que, entonces, vivía tanto del conocimiento como de la peregrinación.\n\nLa Rúa da Troia es una de las más estrechas y evocadoras de Santiago. Si te sitúas frente a la casa y miras hacia arriba, verás cómo las fachadas casi parecen tocarse. Esa sensación de intimidad explica por qué la calle ha aparecido tantas veces en películas, fotografías y postales: conserva la escala de la ciudad universitaria de hace más de un siglo.\n\nContinúa la calle y al llegar al cruce podrás buscar la siguiente ubicación.",
      en: "This small museum is a window into student life in Santiago at the end of the 19th century, a very different city from the pilgrims'.\n\nBetween 1886 and 1906 the house operated as an actual student boarding house. The University had far fewer students than today, but most came from outside Galicia. They lived crowded together, shared rooms, and barely went home during the school year. The boarding house was their home.\n\nAlejandro Pérez Lugín studied Law in Santiago and turned Doña Generosa Carollo's boarding house into the setting for La Casa de la Troya (1915). The curious thing is that the novel was so successful it ended up shaping how the city was perceived: for decades, many Spaniards pictured university-era Santiago through its pages.\n\nThe tuna used to rehearse there\n\nThe first floor also recreates the space where the Compostela tuna (traditional student musical group) used to rehearse. Back then, tunas weren't just a folk tradition — they were part of university social life and a way to earn a bit of money by performing serenades.\n\nThe museum is inexpensive and quirky, but even so, take a look through the ground-floor window: step into the house without rushing and forget about the novel for a moment. More than a literary museum, it's one of the few places in Santiago where you can picture the day-to-day life of a student from 130 years ago: the cold, the desks, the pranks, the serenades, and the bustle of a city that back then lived off both learning and pilgrimage.\n\nRúa da Troia is one of Santiago's narrowest, most evocative streets. If you stand in front of the house and look up, you'll see how the façades almost seem to touch. That sense of intimacy explains why the street has shown up so often in films, photographs and postcards: it keeps the scale of the university city from more than a century ago.\n\nContinue down the street, and when you reach the crossroads you can look for the next location."
    },
    rewardImage: "https://i.imgur.com/o8IclDw.jpeg"
  },
  {
    id: "reto-07",
    clueImage: "https://i.imgur.com/dI8ufJY.jpeg",
    title: { es: "Praza de Cervantes", en: "Praza de Cervantes" },
    mapsQuery: "42.881133,-8.542487",
    lat: 42.881133,
    lng: -8.542487,
    reward: {
      es: "¡Habéis llegado a la plaza de Cervantes!\n\nEs tradición entre los locales gastarle una broma al visitante haciéndole buscar los pies de Cervantes en el interior de la fuente para salpicarle cuando se asome a mirar (¡aprovecha que ahora lo sabes!)\n\nEs uno de los puntos más altos de la ciudad medieval, con la excepción de San Roque, pero era extramuros.\n\nAntes de llamarse Praza de Cervantes fue conocida como Praza do Campo y después como Praza da Constitución. Aquí estaba la sede del ayuntamiento medieval y, sobre todo, el lugar donde se proclamaban ordenanzas, se anunciaban impuestos y se ejecutaban sentencias públicas.\n\nDesde esta plaza se leían las disposiciones municipales a voz en grito. Piensa que la mayoría de la población no sabía leer. La plaza funcionaba como el boletín oficial de la ciudad.\n\nAntes de que existiera el actual Mercado de Abastos, buena parte del comercio urbano se realizaba aquí. Entraban productos procedentes de toda Galicia: pescado, cereales, vino, textiles y ganado menor. A día de hoy todavía es habitual encontrar puestos de artesanía y libros usados.\n\nPor eso la plaza conecta de forma natural con Casas Reais (que aunque no la vamos a visitar en este juego-guía, puedes desviarte un momento —1-2 minutos caminando desde aquí— para ver en ella la Capela das Ánimas y la subida final del Camino Francés), una de las principales vías de entrada histórica a Compostela.\n\n¿Y Cervantes qué pinta aquí?\n\nLa estatua de Miguel de Cervantes llegó en 1916, coincidiendo con el tercer centenario de su muerte.\n\nLo curioso es que Cervantes nunca tuvo una relación especial con esta plaza. Su nombre sustituyó a denominaciones históricas mucho más antiguas. Para muchos compostelanos veteranos, la plaza siguió siendo simplemente \"o Campo\" durante décadas.\n\nEn el lado oriental se encuentra la antigua Casa do Concello. El edificio actual es resultado de numerosas reformas, pero sigue ocupando el espacio donde se concentró buena parte del poder municipal compostelano.\n\nSi quieres hacer una parada, te recomiendo el Gramola y su terraza.\n\nAhora, continúa por el lateral de la iglesia de San Benito (la iglesia \"del pueblo\").",
      en: "You've arrived at Praza de Cervantes!\n\nIt's a tradition among locals to prank visitors into looking for Cervantes's feet inside the fountain, so they get splashed when they lean in to look (now that you know, you're one step ahead!).\n\nIt's one of the highest points of the medieval city, with the exception of San Roque, but it stood outside the city walls.\n\nBefore being called Praza de Cervantes, it was known as Praza do Campo and later as Praza da Constitución. This is where the medieval town hall stood, and above all, the place where ordinances were proclaimed, taxes were announced, and public sentences were carried out.\n\nMunicipal orders used to be read aloud from this square. Keep in mind that most of the population couldn't read. The square worked as the city's official gazette.\n\nBefore today's Mercado de Abastos existed, much of the city's trade took place here. Goods came in from all over Galicia: fish, grain, wine, textiles and small livestock. Even today it's common to find craft stalls and secondhand book vendors.\n\nThat's why the square connects naturally with Casas Reais (which we won't be visiting in this game-guide, but you can take a short detour — 1-2 minutes' walk from here — to see the Capela das Ánimas and the final stretch of the French Way there), one of the main historic entry routes into Compostela.\n\nSo what's Cervantes doing here?\n\nThe statue of Miguel de Cervantes arrived in 1916, marking the third centenary of his death.\n\nThe curious thing is that Cervantes never had any special connection to this square. His name replaced much older historical names. For many longtime locals, the square simply kept being called \"o Campo\" for decades.\n\nOn the eastern side stands the old Casa do Concello (town hall). Today's building is the result of many renovations, but it still occupies the space where much of Compostela's municipal power was concentrated.\n\nIf you feel like taking a break, I'd recommend O Gramola and its terrace.\n\nNow, continue along the side of the Igrexa de San Benito (the \"people's church\")."
    },
    rewardImage: "https://i.imgur.com/kPPa0jn.jpeg"
  },
  {
    id: "reto-08",
    clueImage: "https://i.imgur.com/QPY3yoF.jpeg",
    imagePosition: "top", // el recorte de la foto prioriza la parte de arriba (la "punta" de la piedra)
    title: { es: "O Carallo 29", en: "O Carallo 29" },
    mapsQuery: "42.881045,-8.541383",
    lat: 42.881045,
    lng: -8.541383,
    reward: {
      es: "Pues… estáis… frente a… bueno, O Carallo 29.\n\nEs una de las expresiones más santiaguesas que existen, lo mismo sirve para decir que algo está lejos como para mostrar incredulidad.\n\nNo es una escultura, sino un pivote de piedra del siglo XVII que protegía la esquina de las casas del paso de carros y caballerías. Su forma fálica hizo que, con el tiempo, los compostelanos lo bautizaran como \"O Carallo 29\".\n\n¿Por qué \"29\"?\n\nAquí confluyen dos historias.\n\nLa primera es política. La expresión \"o carallo vinte e nove\" ya existía por el famoso artículo 29 de la Ley Electoral de 1907, que permitía proclamar automáticamente a un candidato si no tenía oposición. En una Galicia dominada por el caciquismo, aquello se convirtió en símbolo de fraude y de incredulidad. De ahí que \"¡o carallo 29!\" acabara significando algo parecido a \"¡anda ya!\" o \"sí, hombre...\".\n\nLa segunda es una feliz coincidencia: el pivote está donde correspondería el número 29 de la Rúa Travesa. La calle termina en el 27, pero el mojón ocupa el lugar donde estaría el 29. Los compostelanos unieron el dicho popular con la piedra y nació la leyenda.\n\nFíjate en la piedra: está inclinada. No es un defecto moderno; es consecuencia de siglos soportando empujes, roces y pequeñas colisiones. Es uno de esos objetos urbanos que ha sobrevivido porque nunca dejó de cumplir su función.\n\nSi por lo que sea has llegado con hambre, estás cerca de O Curro da Parra.\n\n¡Sigamos bajando!",
      en: "Well... you're... standing in front of... okay, it's O Carallo 29.\n\nIt's one of the most quintessentially Compostelan expressions there is — it can mean something is far away, or express disbelief.\n\nIt's not a sculpture, but a 17th-century stone bollard that protected the corner of the houses from passing carts and pack animals. Its phallic shape led locals, over time, to nickname it \"O Carallo 29.\"\n\nWhy \"29\"?\n\nTwo stories come together here.\n\nThe first is political. The expression \"o carallo vinte e nove\" already existed because of the famous Article 29 of the 1907 Electoral Law, which allowed a candidate to be automatically declared elected if they had no opposition. In a Galicia dominated by political bossism (caciquismo), that became a symbol of fraud and disbelief. That's how \"o carallo 29!\" came to mean something like \"yeah, right!\" or \"sure, whatever...\"\n\nThe second is a happy coincidence: the bollard stands right where number 29 of Rúa Travesa would be. The street actually ends at number 27, but the marker sits where 29 would be. Locals combined the popular saying with the stone, and the legend was born.\n\nLook closely at the stone: it leans. That's not a modern flaw — it's the result of centuries of pushes, scrapes, and small collisions. It's one of those pieces of street furniture that has survived simply because it never stopped doing its job.\n\nIf you happen to have arrived hungry, you're close to O Curro da Parra.\n\nLet's keep heading down!"
    },
    rewardImage: "https://i.imgur.com/IRowIpV.jpeg"
  },
  {
    id: "reto-09",
    clueImage: "https://i.imgur.com/d9nGiQD.jpeg",
    title: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    mapsQuery: "42.880501,-8.541376",
    lat: 42.880501,
    lng: -8.541376,
    reward: {
      es: "Vale, este os lo he puesto un poco difícil, pero me niego a creer que el ruido, los olores, y toda la gente que pasa la zona no os ha llamado la atención.\n\nNo está donde estaba el mercado medieval\n\nAunque parece antiquísimo, el edificio actual se inauguró en 1941. Antes, el mercado estaba repartido por varias plazas, especialmente Cervantes, Azibechería y Platerías. A finales del siglo XIX se decidió concentrar toda esa actividad en las antiguas huertas de los Condes de Altamira, y el edificio que ves hoy sustituyó a un mercado anterior derribado en 1937.\n\nUn mercado con forma de iglesias\n\nFíjate en las cubiertas de granito. Las ocho naves parecen pequeñas iglesias románicas alineadas. El arquitecto Joaquín Vaquero Palacios quiso que el mercado dialogara con la arquitectura histórica de Santiago, evitando construir una nave industrial que rompiese la estética del casco histórico.\n\nLas \"paisanas\"\n\nUno de los símbolos del mercado son las paisanas, mujeres que durante generaciones han vendido directamente lo cultivado en sus propias huertas. Si has llegado hasta aquí en horas de mercado, las encontrarás vendiendo sus productos sentadas alrededor del mercado.\n\nNo eran simples comerciantes: muchas llegaban de madrugada desde Ames, Teo, Vedra, Oroso o el valle del Ulla con cestas cargadas de verduras, huevos, quesos o mantequilla. Algunas aún siguen vendiendo producto de sus propias explotaciones familiares. Es una tradición que ha sobrevivido mucho mejor aquí que en otras ciudades españolas.\n\nEstá construido sobre uno de los orígenes de Santiago\n\nBajo el mercado se localizan restos del castro de Libredón, el asentamiento prerromano que ocupaba esta colina antes de la fundación de Compostela. Es decir, mientras compras pescado o fruta estás caminando sobre uno de los lugares donde comenzó la historia de la ciudad.\n\nDel mercado al plato\n\nDesde hace unos años existe la posibilidad de comprar el marisco o el pescado en un puesto y llevarlo a cocinar a locales cercanos como Abastos Praza, donde te lo preparan. Es una forma de mantener el mercado como un espacio vivo y no solo turístico.\n\nEn cualquier caso, es un lugar excelente para llevar algún recuerdo de los que no sólo alimentan el alma. Os recomiendo alguno de los quesos típicos gallegos, por ejemplo, pero podéis dejaros llevar por el impulso.\n\nAntes de abandonar el mercado, os aconsejo acercaros al final del mercado, a la muralla, para ver cómo se conectan los dos Santiagos, el medieval y el contemporáneo.\n\nSi quieres hacer una parada de descanso, el Café de Altamira o el Abastos 2.0 son excelentes.\n\nAhora, salgamos del mercado por el otro extremo de la recta por la que entramos.",
      en: "Okay, I made this one a bit tricky, but I refuse to believe the noise, the smells, and all the people passing through the area didn't catch your attention.\n\nIt's not where the medieval market used to be\n\nEven though it looks ancient, the current building actually opened in 1941. Before that, the market was spread across several squares, especially Cervantes, Acibechería and Praterías. In the late 19th century it was decided to bring all that activity together in the old orchards of the Counts of Altamira, and the building you see today replaced an earlier market that was demolished in 1937.\n\nA market shaped like churches\n\nTake a look at the granite roofs. The eight naves look like small Romanesque churches lined up in a row. The architect Joaquín Vaquero Palacios wanted the market to be in dialogue with Santiago's historic architecture, avoiding an industrial-looking building that would clash with the aesthetic of the old town.\n\nThe \"paisanas\"\n\nOne of the market's symbols are the paisanas, women who for generations have sold produce grown directly in their own vegetable gardens. If you've come at market hours, you'll find them selling their produce, seated around the market.\n\nThey weren't just merchants: many arrived before dawn from Ames, Teo, Vedra, Oroso or the Ulla valley with baskets loaded with vegetables, eggs, cheese, or butter. Some still sell produce from their own family smallholdings today. It's a tradition that has survived here far better than in other Spanish cities.\n\nIt's built over one of Santiago's origins\n\nBeneath the market lie the remains of the castro de Libredón, the pre-Roman settlement that occupied this hill before Compostela was founded. In other words, while you're buying fish or fruit, you're walking over one of the places where the city's story began.\n\nFrom the market to the plate\n\nFor some years now it's been possible to buy seafood or fish at a stall and take it to be cooked nearby, at places like Abastos Praza, where they'll prepare it for you. It's a way of keeping the market a living space, not just a tourist attraction.\n\nEither way, it's an excellent place to pick up a souvenir that feeds more than just the soul. I'd recommend one of the typical Galician cheeses, for example, but feel free to just follow your instinct.\n\nBefore leaving the market, I'd suggest heading to the far end, toward the city wall, to see how the two Santiagos — medieval and contemporary — connect.\n\nIf you'd like a break, Café de Altamira or Abastos 2.0 are excellent choices.\n\nNow, let's leave the market from the opposite end of the row we came in through."
    },
    rewardImage: "https://i.imgur.com/xl3vi69.jpeg"
  },
  {
    id: "reto-10",
    clueImage: "https://i.imgur.com/u72CrDv.jpeg",
    title: { es: "Cruceiro de San Fiz", en: "Cruceiro de San Fiz" },
    mapsQuery: "42.879286,-8.541758",
    lat: 42.879286,
    lng: -8.541758,
    reward: {
      es: "Para compensar, ¡este ha sido más fácil!\n\nEl Cruceiro de San Fiz es uno de los más curiosos de Santiago porque durante casi dos siglos fue conocido como el \"cruceiro maldito\".\n\nUna inscripción que parecía una maldición\n\nEn el pedestal puede leerse una inscripción de 1718 dedicada a un hombre llamado Manuel Joseph Ramírez de Arellano, que murió de forma violenta.\n\nDurante mucho tiempo se leyó así:\n\"...NO RUEGUEN A DIOS POR ÉL\"\n\nImagínate el impacto. Un cruceiro donde parecía pedirse expresamente que nadie rezara por el difunto. En una ciudad profundamente religiosa, aquello resultaba casi blasfemo.\n\nEl misterio tenía una explicación\n\nA finales del siglo XIX, el historiador Pérez Constanti resolvió el enigma.\n\nEse \"NO\" no era la palabra \"no\", sino las últimas letras del apellido ArellaNO. La inscripción debía leerse así:\n\"...Ramírez de ArellaNO. Rueguen a Dios por él.\"\n\nUn salto de línea convirtió una petición de oración en una maldición, ¡hay que tener cuidado con lo que escribimos!\n\n¡Vaya, me he dado cuenta de que no os he contado lo que son los cruceiros!\n\nLos cruceiros son probablemente el elemento más característico del paisaje gallego, pero suelen explicarse de forma demasiado simple como \"una cruz de piedra\". En realidad, son mucho más.\n\nLa mayoría se levantaron entre los siglos XVI y XIX, aunque algunos son anteriores. Solían colocarse en:\n• Cruces de caminos.\n• Entradas de aldeas.\n• Atrios de iglesias.\n• Límites parroquiales.\n• Lugares donde ocurrió una muerte.\n• Caminos de peregrinación.\n\nDe hecho, la palabra cruceiro viene precisamente de estar situado en una encrucijada.\n\n¿Cristianismo o algo más antiguo?\n\nMuchos historiadores creen que los cruceiros cristianizaron lugares que ya tenían importancia simbólica antes del cristianismo. En Galicia existía una enorme tradición relacionada con caminos, fuentes, piedras singulares y límites territoriales.\n\nLa Iglesia colocó cruces en muchos de esos lugares para integrarlos en la nueva religiosidad.\n\nEran \"puntos de paso\" entre mundos\n\nPara la mentalidad popular gallega, los cruces de caminos eran lugares especiales y a veces peligrosos. Allí podían aparecer ánimas, la Santa Compaña o seres sobrenaturales.\n\nEl cruceiro actuaba como protección espiritual para viajeros y vecinos.\n\nPor eso muchas personas se santiguaban al pasar delante de ellos.\n\nLos cruceiros y la muerte\n\nMuchos estaban vinculados a los cortejos fúnebres.\n\nCuando un entierro se dirigía al cementerio, era habitual detenerse junto a determinados cruceiros para rezar por el difunto.\n\nPor eso algunos tienen pequeñas plataformas o escalones alrededor.\n\nToca hablar un poco de literatura, y es que uno de los grandes escritores de Galicia, Castelao, publicó en 1950 \"As cruces de pedra na Galiza\", una de las obras más importantes jamás escritas sobre los cruceiros gallegos.\n\nLo fascinante es que Castelao no los veía simplemente como monumentos religiosos. Para él eran una especie de ADN cultural gallego tallado en piedra. Decía que para entender Galicia había que estudiar sus cruceiros igual que un arqueólogo estudia un templo o una necrópolis.\n\nLa conexión con Irlanda\n\nCastelao estaba convencido de que Galicia compartía profundas raíces culturales con las llamadas naciones celtas del Atlántico, especialmente Irlanda y Bretaña.\n\nAl estudiar los cruceiros observó similitudes con las High Crosses irlandesas, las grandes cruces medievales de piedra que todavía pueden verse en lugares como Monasterboice o Clonmacnoise.\n\nPero no son iguales\n\nLas cruces irlandesas suelen ser:\n• Más antiguas (siglos VIII-XII).\n• Monumentales.\n• Decoradas con escenas bíblicas.\n\nLos cruceiros gallegos son:\n• Generalmente más recientes.\n• Más vinculados a caminos y aldeas.\n• Más relacionados con la religiosidad popular.\n\nCastelao no decía que los cruceiros gallegos descendieran directamente de los irlandeses. Lo que proponía era que ambos pertenecían a una misma tradición atlántica de monumentalizar la piedra y el paisaje.\n\nEl Atlántico unía más que separaba\n\nHoy sabemos que en la Edad Media existían contactos marítimos constantes entre Galicia, Irlanda, Bretaña, Cornualles y el norte de Portugal.\n\nPara Castelao, el mar era una autopista cultural.\n\nPor eso le fascinaba que tanto en una aldea gallega como en un monasterio irlandés aparecieran cruces de piedra dominando el paisaje.\n\nSi eres anglicano practicante, la iglesia que corona esta plaza es —creo— la única con culto en inglés y disponibilidad de misas anglicanas. Aquí podréis encontrar tanto misas católicas como anglicanas, en inglés. Suelen tener los horarios en un tablón.\n\nSi quieres hacer una parada técnica, a medio camino entre esta parada y la siguiente encontraréis el Cañahueca y el Piorno, típicos lugares de \"tapeo\" entre la gente local.\n\nPara seguir, continúa esa calle a favor del tráfico.",
      en: "To make up for that, this one was easier!\n\nThe Cruceiro de San Fiz is one of Santiago's most curious ones, because for almost two centuries it was known as the \"cursed cruceiro.\"\n\nAn inscription that looked like a curse\n\nOn the pedestal you can read an inscription from 1718, dedicated to a man named Manuel Joseph Ramírez de Arellano, who died a violent death.\n\nFor a long time it was read like this:\n\"...NO RUEGUEN A DIOS POR ÉL\" (\"...DO NOT pray to God for him\")\n\nImagine the impact. A cruceiro that seemed to explicitly ask that no one pray for the deceased. In a deeply religious city, that felt almost blasphemous.\n\nThe mystery had an explanation\n\nIn the late 19th century, the historian Pérez Constanti solved the riddle.\n\nThat \"NO\" wasn't the word \"no\" — it was the last letters of the surname ArellaNO. The inscription was meant to be read like this:\n\"...Ramírez de ArellaNO. Rueguen a Dios por él.\" (\"...Ramírez de Arellano. Pray to God for him.\")\n\nA line break turned a request for prayer into a curse — you really do have to be careful with how you write things!\n\nOh wait, I realize I haven't told you what cruceiros actually are!\n\nCruceiros are probably the most characteristic feature of the Galician landscape, but they're often explained too simply as \"a stone cross.\" In reality, they're much more.\n\nMost were built between the 16th and 19th centuries, though some are older. They were usually placed at:\n• Crossroads.\n• Village entrances.\n• Church atriums.\n• Parish boundaries.\n• Places where a death occurred.\n• Pilgrimage routes.\n\nIn fact, the word cruceiro comes precisely from being located at an encrucijada (crossroads).\n\nChristianity, or something older?\n\nMany historians believe cruceiros Christianized places that already held symbolic importance before Christianity. Galicia had an enormous tradition tied to roads, springs, unusual stones, and territorial boundaries.\n\nThe Church placed crosses at many of these spots to fold them into the new faith.\n\nThey were \"crossing points\" between worlds\n\nIn the Galician popular imagination, crossroads were special, and sometimes dangerous, places. Spirits, the Santa Compaña, or other supernatural beings were said to appear there.\n\nThe cruceiro acted as spiritual protection for travelers and villagers.\n\nThat's why many people crossed themselves when passing in front of one.\n\nCruceiros and death\n\nMany were linked to funeral processions.\n\nWhen a burial was heading to the cemetery, it was common to stop beside certain cruceiros to pray for the deceased.\n\nThat's why some have small platforms or steps around their base.\n\nTime for a bit of literature: one of Galicia's great writers, Castelao, published \"As cruces de pedra na Galiza\" in 1950, one of the most important works ever written about Galician cruceiros.\n\nWhat's fascinating is that Castelao didn't see them simply as religious monuments. To him they were a kind of Galician cultural DNA carved in stone. He said that to understand Galicia you had to study its cruceiros the way an archaeologist studies a temple or a necropolis.\n\nThe connection with Ireland\n\nCastelao was convinced that Galicia shared deep cultural roots with the so-called Atlantic Celtic nations, especially Ireland and Brittany.\n\nStudying the cruceiros, he noticed similarities with the Irish High Crosses, the great medieval stone crosses still standing in places like Monasterboice or Clonmacnoise.\n\nBut they're not the same\n\nIrish crosses tend to be:\n• Older (8th-12th centuries).\n• Monumental.\n• Decorated with biblical scenes.\n\nGalician cruceiros tend to be:\n• Generally more recent.\n• More closely tied to roads and villages.\n• More linked to popular religiosity.\n\nCastelao wasn't saying Galician cruceiros descended directly from the Irish ones. What he proposed was that both belonged to the same Atlantic tradition of turning stone and landscape into monuments.\n\nThe Atlantic united more than it divided\n\nToday we know that in the Middle Ages there were constant sea contacts between Galicia, Ireland, Brittany, Cornwall and northern Portugal.\n\nFor Castelao, the sea was a cultural highway.\n\nThat's why he found it fascinating that stone crosses dominating the landscape could appear both in a Galician village and at an Irish monastery.\n\nIf you're a practicing Anglican, the church crowning this square is — I believe — the only one with English-language worship and Anglican services available. Here you can find both Catholic and Anglican Mass in English. They usually post the schedule on a noticeboard.\n\nIf you'd like a technical stop, halfway between this location and the next you'll find O Cañahueca and O Piorno, typical spots for tapeo among locals.\n\nTo continue, follow that street in the direction of traffic."
    },
    rewardImage: "https://i.imgur.com/9uco7JH.jpeg"
  },
  {
    id: "reto-11",
    clueImage: "https://i.imgur.com/T0ONucP.jpeg",
    title: { es: "Facultade de Xeografía e Historia (Colexio de Fonseca)", en: "Facultade de Xeografía e Historia (Colexio de Fonseca)" },
    mapsQuery: "42.878784,-8.542477",
    lat: 42.878784,
    lng: -8.542477,
    reward: {
      es: "La actual Facultade de Xeografía e Historia tiene una peculiaridad que muchos estudiantes desconocen: no nació para ser una facultad.\n\nEl edificio es el antiguo Colexio de Fonseca, fundado en 1501 por el arzobispo Alonso III de Fonseca. De hecho, es el embrión de la Universidad de Santiago. Durante siglos, si alguien decía \"la Universidad\", se refería básicamente a este edificio.\n\nAquí empezó la USC\n\nAntes de los campus de San Caetano, Sur o Norte, la universidad compostelana cabía prácticamente entre Fonseca, el Colegio de San Xerome y unas pocas dependencias más.\n\nPor eso, cuando entras en el claustro, estás entrando en el lugar donde se formaron generaciones de juristas, teólogos, médicos y humanistas desde el Renacimiento.\n\nUn colegio para competir\n\nFonseca quería que Santiago tuviese una institución comparable a Salamanca o Alcalá. No era solo un proyecto educativo: era una declaración de prestigio para Compostela.\n\nEn cierto modo, la Universidad fue otro instrumento para competir con otras grandes ciudades del reino.\n\nEl fantasma más famoso no está en la Catedral\n\nEn la capilla de Fonseca se conserva el sepulcro del propio Alonso de Fonseca.\n\nLa leyenda popular decía que algunas noches el arzobispo abandonaba su tumba para recorrer el edificio y comprobar si los estudiantes estaban estudiando o perdiendo el tiempo. Es una de esas historias universitarias que han sobrevivido siglos.\n\nEl claustro es una joya silenciosa\n\nEl claustro renacentista es uno de los espacios más armoniosos de Santiago. A diferencia del barroco exuberante de San Martiño Pinario, aquí domina la proporción y el equilibrio.\n\nLa biblioteca que cambió Galicia\n\nDurante siglos, algunas de las colecciones bibliográficas más importantes de Galicia estuvieron asociadas a Fonseca.\n\nLos estudiantes venían de toda la región porque aquí podían consultar obras imposibles de encontrar en otros lugares.\n\nEncima, es una sala espectacular. Si tenéis la suerte de encontrar la Facultad abierta, os recomiendo entrar a admirarla.\n\nNuestro siguiente objetivo está un poco más abajo en la calle.",
      en: "The current Facultade de Xeografía e Historia has a quirk many students don't know about: it wasn't built to be a university faculty.\n\nThe building is the old Colexio de Fonseca, founded in 1501 by archbishop Alonso III de Fonseca. In fact, it's the embryo of the University of Santiago. For centuries, if someone said \"the University,\" they basically meant this building.\n\nThis is where the USC began\n\nBefore the San Caetano, Sur or Norte campuses existed, Compostela's university fit almost entirely between Fonseca, the Colegio de San Xerome, and a few other small buildings.\n\nThat's why, when you walk into the cloister, you're stepping into the place where generations of jurists, theologians, doctors and humanists trained since the Renaissance.\n\nA college built to compete\n\nFonseca wanted Santiago to have an institution comparable to Salamanca or Alcalá. It wasn't just an educational project — it was a statement of prestige for Compostela.\n\nIn a way, the University was another tool used to compete with other great cities of the kingdom.\n\nThe most famous ghost in town isn't in the Cathedral\n\nIn the Fonseca chapel you'll find the tomb of Alonso de Fonseca himself.\n\nPopular legend said that on some nights the archbishop would leave his tomb to walk through the building and check whether students were studying or wasting their time. It's one of those university stories that has survived for centuries.\n\nThe cloister is a quiet gem\n\nThe Renaissance cloister is one of the most harmonious spaces in Santiago. Unlike the exuberant baroque of San Martiño Pinario, here proportion and balance dominate.\n\nThe library that changed Galicia\n\nFor centuries, some of Galicia's most important book collections were linked to Fonseca.\n\nStudents came from all over the region because here they could consult works impossible to find anywhere else.\n\nOn top of that, it's a spectacular room. If you're lucky enough to find the Faculty open, I'd recommend stepping in to admire it.\n\nOur next stop is a bit further down the street."
    },
    rewardImage: "https://i.imgur.com/SYTfXHM.jpeg"
  },
  {
    id: "reto-12",
    clueImage: "https://i.imgur.com/y8sOPMI.jpeg",
    title: { es: "Arco de Mazarelos", en: "Arco de Mazarelos" },
    mapsQuery: "42.878094,-8.54236",
    lat: 42.878094,
    lng: -8.54236,
    reward: {
      es: "Arco de Mazarelos\n\nEs la única puerta que se conserva de la muralla medieval compostelana. La muralla tenía unos dos kilómetros de perímetro y siete accesos principales, pero fue derribada en los siglos XVIII y XIX cuando dejó de tener utilidad defensiva. Mazarelos sobrevivió casi por casualidad: parte del arco había quedado integrada en propiedades privadas y eso dificultó su demolición.\n\nCada puerta tenía una función económica. Por Mazarelos entraban los vinos de O Ribeiro procedentes de Ourense y también los cereales llegados desde la Meseta por la Vía de la Plata. El Códice Calixtino ya menciona esta puerta como el acceso del vino a Compostela. Así que, si hoy cruzas el arco, estás siguiendo el mismo camino que durante siglos recorrieron los arrieros con sus cubas.\n\nLa mayoría solo observa el arco, pero el detalle interesante está a la derecha (mirando hacia la ciudad). Allí se conservan los cimientos del antiguo torreón defensivo que protegía la entrada. Es uno de los pocos restos visibles que permiten imaginar el grosor y la estructura de la muralla.\n\nA vuestro lado, en la Plaza da Universidade, tenéis la estatua de Eugenio Montero Ríos (1832-1914), compostelano, catedrático de Derecho, ministro y presidente del Gobierno durante unos meses en 1905. También presidió la delegación española que negoció el Tratado de París de 1898, tras la guerra con Estados Unidos.\n\nComo curiosidad, este no es el emplazamiento original de la estatua. Cuando se inauguró en 1916, la estatua estaba en el centro de la Praza do Obradoiro. La idea generó bastante polémica: muchos compostelanos consideraban que un monumento civil rompía la armonía de la plaza de la Catedral. En 1928 fue trasladada a Mazarelos, donde permanece desde entonces.\n\nPara la siguiente, tenéis dos alternativas. El itinerario más rápido va a través de la calle Cardeal Payá (mirando al arco, desde la plaza, está a vuestra derecha), en dónde podréis tomar algo en el Pub Irlandés A Novena Porta, si venís de tarde, para luego continuar por el callejón cuesta abajo que nace al final de la calle (Rúa de Tras Salomé) y que os llevará a la Rúa Nova. La otra opción es aprovechar y pasear la Rúa das Orfas, en lugar de bajar por el callejón, y os saltaréis dos imágenes, aunque siempre podréis visitarlas adentrándoos en la calle Rúa Nova, donde encontraréis la siguiente imagen (el kiosko).",
      en: "Arco de Mazarelos\n\nIt's the only surviving gate of Compostela's medieval city wall. The wall was about two kilometers around, with seven main gates, but it was torn down in the 18th and 19th centuries once it stopped serving any defensive purpose. Mazarelos survived almost by accident: part of the arch had ended up built into private properties, which made it harder to demolish.\n\nEach gate had an economic role. Wine from O Ribeiro, coming from Ourense, entered through Mazarelos, as did grain arriving from the Meseta along the Vía de la Plata. The Codex Calixtinus already mentions this gate as the entry point for wine into Compostela. So if you walk through the arch today, you're following the same route that muleteers and their wine casks took for centuries.\n\nMost people just look at the arch, but the interesting detail is on the right (facing the city). There you can still see the foundations of the old defensive tower that protected the entrance. It's one of the few visible remains that let you picture the thickness and structure of the wall.\n\nRight next to you, in Praza da Universidade, stands the statue of Eugenio Montero Ríos (1832-1914), a Compostela native, law professor, minister, and briefly prime minister in 1905. He also led the Spanish delegation that negotiated the 1898 Treaty of Paris, after the war with the United States.\n\nAs a fun fact, this isn't the statue's original spot. When it was unveiled in 1916, it stood in the middle of Praza do Obradoiro. The idea caused quite a controversy: many locals felt a civic monument broke the harmony of the Cathedral square. In 1928 it was moved to Mazarelos, where it's remained ever since.\n\nFor the next stop, you have two options. The fastest route goes along Cardeal Payá street (facing the arch from the square, it's on your right), where you can grab something at the Irish pub A Novena Porta if you're coming through in the afternoon, then continue down the alley at the end of the street (Rúa de Tras Salomé), which will take you to Rúa Nova. The other option is to walk along Rúa das Orfas instead of going down the alley — that will skip two of the photos, though you can still visit them later by heading into Rúa Nova, where you'll find the next photo (the kiosk)."
    },
    rewardImage: "https://i.imgur.com/u6Mrbxt.jpeg"
  },
  {
    id: "reto-13",
    clueImage: "https://i.imgur.com/XgY565Y.jpeg",
    title: { es: "Igrexa de Santa María Salomé", en: "Igrexa de Santa María Salomé" },
    mapsQuery: "42.87854,-8.543629",
    lat: 42.87854,
    lng: -8.543629,
    reward: {
      es: "La Igrexa de Santa María Salomé es una de las iglesias más discretas de Santiago y, al mismo tiempo, una de las más singulares.\n\nSu principal singularidad es que está dedicada a Santa María Salomé, considerada por la tradición cristiana la madre de los apóstoles Santiago el Mayor y San Juan Evangelista.\n\nNo es un detalle menor: es la única iglesia parroquial de España dedicada a ella. En una ciudad construida alrededor del culto al Apóstol, resulta lógico que también acabara teniendo un templo dedicado a su madre.\n\nEl detalle más fascinante está en la portada.\n\nA ambos lados de la puerta hay un grupo escultórico de la Anunciación. Si observas con atención la figura de María, verás que aparece embarazada, con el vientre claramente abultado.\n\nEs una representación muy poco frecuente en el arte medieval.\n\nLa portada románica del siglo XII se conserva extraordinariamente bien por una razón muy práctica: el pórtico del siglo XVI la protegió durante quinientos años de la lluvia compostelana. Por esa razón, si te acercas y te fijas con cuidado, podrás ver todavía policromías en la fachada.\n\nHay una curiosidad que encanta a los guías.\n\nEn una de las esculturas del pórtico, el desgaste de la piedra crea la ilusión de que uno de los ángeles lleva gafas. Evidentemente no las lleva; es un efecto producido por la erosión y por antiguas restauraciones. Pero, una vez que alguien te lo señala, cuesta dejar de verlo.\n\nLa torre tiene un parentesco\n\nSi la espadaña te resulta familiar, no es casualidad. La torre barroca del siglo XVIII sigue un modelo que ya había tenido mucho éxito en Santiago, especialmente el de San Fiz de Solovio (que es la iglesia que ofrece culto en inglés que ya hemos visitado). Es un buen ejemplo de cómo los arquitectos compostelanos reutilizaban soluciones que funcionaban bien tanto estética como técnicamente. Cuando estés bajo el pórtico, no mires solo al frente. Levanta la vista hacia la clave de la arquivolta: allí aparece la Virgen de la Leche, amamantando al Niño Jesús. Es una iconografía muy humana, muy distinta de las imágenes solemnes y regias que predominarán en siglos posteriores.\n\nSi quieres descansar, enfrente de la Iglesia está el Café Mori (la puerta conserva el antiguo cartel del Rhin), café de especialidad y ambiente tranquilo.\n\nAhora que estamos a mitad de camino, te propongo también que te fijes en las paredes alrededor de las puertas. Verás un montón de símbolos tallados en piedra.\n\nNo están por azar, indican a qué institución de la ciudad pertenecía cada casa.\n\nDurante siglos, gran parte de las casas de Santiago no pertenecían a particulares, sino a monasterios, conventos, cabildos o colegios universitarios. Para identificar la propiedad se colocaban escudos o marcas en las fachadas.\n\nLos más habituales son:\n\nCatedral de Santiago (Cabildo)\n• Escudo con la urna apostólica.\n• Conchas de vieira.\n• Cruz de Santiago.\n• A veces las letras S.A. (Santiago Apóstol).\nIndican propiedades administradas por el Cabildo catedralicio.\n\nSan Martiño Pinario\n• Imagen o báculo de San Benito.\n• Escudo benedictino.\n• Mitra y báculo combinados.\nMuy frecuentes en el entorno de Acibechería y San Martiño.\n\nArzobispado\n• Escudos con sombrero episcopal o arzobispal.\n• Borlas colgantes a ambos lados.\n• Mitra, báculo y cruz procesional.\nIdentificaban propiedades dependientes directamente del arzobispo.\n\nSan Paio de Antealtares\n• A menudo aparecen referencias a la orden benedictina femenina.\n• Escudos conventuales con cruces y elementos marianos.\n\nUniversidad\n• Escudo real con referencias a Fonseca.\n• A veces aparecen las armas de los Fonseca.\nSobre todo en edificios próximos a Fonseca y la antigua universidad.\n\nHospital Real\n• Yugo y flechas de los Reyes Católicos.\n• Águila de San Juan.\n• Escudos reales de Castilla y Aragón.\nRelacionados con propiedades del Hospital de los Reyes Católicos.\n\nOrden de Santiago\n• La famosa cruz roja en forma de espada.\n\nLa siguiente está REALMENTE cerca.",
      en: "The Igrexa de Santa María Salomé is one of Santiago's most discreet churches, and at the same time one of its most singular.\n\nIts main quirk is that it's dedicated to Saint Mary Salome, considered by Christian tradition to be the mother of the apostles James the Greater and John the Evangelist.\n\nThat's no small detail: it's the only parish church in Spain dedicated to her. In a city built around the cult of the Apostle, it makes sense that it would eventually also have a church dedicated to his mother.\n\nThe most fascinating detail is on the doorway.\n\nOn either side of the door there's a sculptural group of the Annunciation. If you look closely at the figure of Mary, you'll notice she appears pregnant, with a clearly rounded belly.\n\nIt's a very unusual depiction in medieval art.\n\nThe 12th-century Romanesque doorway has survived remarkably well for a very practical reason: the 16th-century porch protected it for five hundred years from Compostela's rain. Because of that, if you look closely, you can still see traces of polychrome paint on the façade.\n\nThere's a detail guides love.\n\nOn one of the porch's sculptures, the wear on the stone creates the illusion that one of the angels is wearing glasses. Obviously it isn't — it's an effect caused by erosion and old restorations. But once someone points it out to you, it's hard to unsee.\n\nThe tower has a family resemblance\n\nIf the bell-gable looks familiar, that's no coincidence. The 18th-century baroque tower follows a model that had already proven very successful in Santiago, especially at San Fiz de Solovio (the church with English-language worship we've already visited). It's a good example of how Compostela's architects reused solutions that worked well both aesthetically and technically. When you're under the porch, don't just look straight ahead — look up at the keystone of the archivolt: there you'll see the Virgin of the Milk, nursing the Christ child. It's a very human piece of iconography, very different from the solemn, regal images that would dominate later centuries.\n\nIf you feel like a break, across from the church is Café Mori (the door still keeps the old \"Rhin\" sign), a specialty coffee shop with a calm atmosphere.\n\nNow that we're halfway through, I'd also suggest looking at the walls around the doorways. You'll see a bunch of symbols carved in stone.\n\nThey're not random — they indicate which institution in the city each house belonged to.\n\nFor centuries, many houses in Santiago didn't belong to private individuals, but to monasteries, convents, cathedral chapters or university colleges. Shields or marks were placed on the façades to identify ownership.\n\nThe most common are:\n\nCathedral of Santiago (Cabildo)\n• A shield with the apostolic urn.\n• Scallop shells.\n• Cross of Santiago.\n• Sometimes the letters S.A. (Santiago Apóstol).\nThese mark properties managed by the cathedral chapter.\n\nSan Martiño Pinario\n• An image or staff of Saint Benedict.\n• A Benedictine coat of arms.\n• A combined miter and staff.\nVery common around Acibechería and San Martiño.\n\nArchbishopric\n• Shields with an episcopal or archiepiscopal hat.\n• Hanging tassels on both sides.\n• A miter, staff and processional cross.\nThese identified properties directly dependent on the archbishop.\n\nSan Paio de Antealtares\n• Often references to the female Benedictine order.\n• Convent shields with crosses and Marian elements.\n\nUniversity\n• A royal shield with references to Fonseca.\n• Sometimes the Fonseca family's coat of arms.\nMostly on buildings near Fonseca and the old university.\n\nHospital Real\n• The yoke and arrows of the Catholic Monarchs.\n• The eagle of Saint John.\n• Royal shields of Castile and Aragón.\nLinked to properties of the Hospital de los Reyes Católicos.\n\nOrder of Santiago\n• The famous red cross shaped like a sword.\n\nThe next stop is REALLY close by."
    },
    rewardImage: "https://i.imgur.com/e91Cdvr.jpeg"
  },
  {
    id: "reto-14",
    clueImage: "https://i.imgur.com/NNHiRSn.jpeg",
    title: { es: "Casas de Rúa Nova, 29 y 31", en: "Rúa Nova houses, no. 29 and 31" },
    mapsQuery: "42.8784188,-8.543857",
    lat: 42.8784188,
    lng: -8.543857,
    reward: {
      es: "Estas dos casas, en los números 29 y 31 de la Rúa Nova, junto a la iglesia de Santa María Salomé, están consideradas las viviendas civiles más antiguas conservadas de Santiago de Compostela. Datan del siglo XIII, por lo que son prácticamente contemporáneas de las últimas fases de construcción de la Catedral.\n\nPor desgracia, acaban de pasar por una restauración que les ha quitado gran parte del encanto. Sin embargo, todavía quedan detalles que se pueden observar.\n\nLo curioso es que no fueron palacios ni residencias nobiliarias, sino viviendas urbanas relativamente modestas, vinculadas a la antigua rectoral de Santa María Salomé. Eso las hace aún más valiosas: muestran cómo era la arquitectura doméstica de la Compostela medieval.\n\nCuando pensamos en Santiago imaginamos fachadas de piedra vista. Sin embargo, estas casas recuerdan una realidad distinta: muchas viviendas medievales estaban enfoscadas y encaladas, con la piedra oculta bajo capas de cal. La imagen gris del casco histórico es, en buena medida, fruto de restauraciones de los siglos XIX y XX.\n\nAunque hoy solo vemos la fachada, originalmente combinaban muros de mampostería, entramados de madera y soportales. Eran edificios mucho más ligeros de lo que solemos imaginar, parecidos a muchas casas medievales conservadas en ciudades francesas o inglesas.\n\nSi te fijas, las ventanas son pequeñas y están colocadas de forma irregular. No responden a un criterio estético moderno, sino a las necesidades de una vivienda medieval: conservar el calor, mantener la estabilidad del muro y aprovechar al máximo la luz.\n\nPara continuar, avanza por la Rúa Nova. En ella encontrarás el Pazo dos Irlandeses (que el pobre lleva tantos años de abandono que no he querido incluirlo en esta lista, aunque es fácil de ver, bastante impresionante, lo tendréis a mano derecha al avanzar) y podréis parar en La Tita a probar su famosa tortilla española, si no está lleno el local.",
      en: "These two houses, at numbers 29 and 31 of Rúa Nova, next to the church of Santa María Salomé, are considered the oldest surviving civil homes in Santiago de Compostela. They date back to the 13th century, making them practically contemporary with the final construction phases of the Cathedral.\n\nUnfortunately, they've just gone through a restoration that stripped away much of their charm. Still, some details can still be made out.\n\nThe curious thing is that they weren't palaces or noble residences, but relatively modest urban homes, linked to the old rectory of Santa María Salomé. That makes them even more valuable: they show what everyday domestic architecture looked like in medieval Compostela.\n\nWhen we picture Santiago, we imagine exposed stone façades. Yet these houses are a reminder of a different reality: many medieval homes were plastered and whitewashed, with the stone hidden under layers of lime. The old town's grey look today is, in large part, the result of 19th- and 20th-century restorations.\n\nAlthough today we only see the façade, they originally combined masonry walls, timber framing and arcaded porches. They were much lighter buildings than we tend to imagine, similar to many medieval houses preserved in French or English cities.\n\nIf you look closely, the windows are small and irregularly placed. That's not a modern aesthetic choice, but the needs of a medieval home: keeping in heat, maintaining the wall's stability, and making the most of the light.\n\nTo continue, head along Rúa Nova. There you'll find the Pazo dos Irlandeses (which, after so many years of neglect, I didn't want to include in this list, though it's easy to spot and quite impressive — you'll have it on your right as you walk along), and you can stop at La Tita to try their famous Spanish tortilla, if it's not too full."
    },
    rewardImage: "https://i.imgur.com/9o99LON.jpeg"
  },
  {
    id: "reto-15",
    clueImage: "https://i.imgur.com/WlSmDRb.jpeg",
    title: { es: "Kiosko do Toural", en: "Kiosko do Toural" },
    mapsQuery: "42.877579,-8.54434",
    lat: 42.877579,
    lng: -8.54434,
    reward: {
      es: "Vaaaaale, no es el sitio más llamativo ni espectacular de la ciudad, pero es muy útil para orientarse.\n\nAdemás, al lado podréis ver un callejón estrecho que visitaremos más adelante, por el otro extremo del mismo.\n\nAunque muchos lo llaman simplemente el quiosco de la Rúa Nova, en realidad es el Quiosco do Toural, porque se encuentra justo en el Cantón do Toural, en la entrada de la calle.\n\nEs uno de los elementos urbanos más queridos de Santiago, no por su arquitectura —aunque es un bonito ejemplo de quiosco modernista de hierro y cristal—, sino por lo que representó para varias generaciones.\n\nAbierto desde 1910, durante más de un siglo fue mucho más que un punto de venta de prensa. Era un lugar donde se comentaban las noticias, se saludaba a los vecinos y comenzaba el día. En una ciudad universitaria y administrativa como Santiago, era habitual ver a profesores, abogados, médicos o funcionarios comprando el periódico antes de entrar al trabajo.\n\nCerró por jubilación hace unos años, y el ayuntamiento busca formas de conservarlo.\n\nPara seguir, bajad por la calle con los bonitos arcos. En esos arcos encontraréis la tienda de golosinas Pecados de Compostela, muy llamativa, por si queréis endulzar vuestro paseo.",
      en: "Okaaay, it's not the most eye-catching or spectacular spot in the city, but it's very useful for getting your bearings.\n\nAlso, right next to it you'll see a narrow alley we'll visit later, from the other end.\n\nEven though many people just call it the Rúa Nova kiosk, it's actually the Quiosco do Toural, because it stands right at the Cantón do Toural, at the entrance to the street.\n\nIt's one of the most beloved urban fixtures in Santiago — not so much for its architecture, though it is a lovely example of an iron-and-glass modernist kiosk, but for what it meant to several generations.\n\nOpen since 1910, for over a century it was much more than a place to buy the newspaper. It was a spot where people discussed the news, greeted their neighbors, and started the day. In a university and administrative city like Santiago, it was common to see professors, lawyers, doctors or civil servants buying the paper before heading to work.\n\nIt closed a few years ago when its owner retired, and the city council is looking for ways to preserve it.\n\nTo continue, head down the street with the pretty arches. Under those arches you'll find the Pecados de Compostela candy shop, quite eye-catching, in case you want to sweeten your walk."
    },
    rewardImage: "https://i.imgur.com/LNYMu4f.jpeg"
  },
  {
    id: "reto-16",
    clueImage: "https://i.imgur.com/ruZYTuH.jpeg",
    title: { es: "Praza do Toural", en: "Praza do Toural" },
    mapsQuery: "42.877561,-8.544894",
    lat: 42.877561,
    lng: -8.544894,
    reward: {
      es: "El nombre procede de \"touro\" (toro). Aquí se celebraba el mercado de ganado mayor, especialmente de bueyes y toros, antes de que la ciudad creciera. En la Edad Media este lugar estaba junto al límite de la muralla y era perfecto para comerciar sin congestionar las calles del interior.\n\nLa fuente actual, inaugurada en 1822, no era un elemento ornamental. Era uno de los principales puntos de abastecimiento de agua para vecinos, comerciantes y animales. Antes de que existiera agua corriente, una plaza importante necesitaba una fuente importante.\n\nEl edificio que domina la plaza es el Pazo de Bendaña, obra de Clemente Fernández Sarela en el siglo XVIII.\n\nPero casi nadie mira hacia arriba.\n\nEn lo alto de la fachada hay una figura de Atlas sosteniendo la bóveda celeste. Es un motivo casi único en la arquitectura civil compostelana. Mientras la mayoría de los pazos rematan sus fachadas con escudos o pináculos, aquí un personaje de la mitología griega carga literalmente con el mundo. Hoy alberga la Fundación y Museo Eugenio Granell.\n\nEn Santiago se dice que cuando una persona virgen y pura pase por debajo, Atlas dejará caer la bola del mundo. Ahí sigue el pobre.\n\nEn uno de los laterales encontrarás una enorme galería acristalada.\n\nLas galerías son típicas de Galicia, pero esta tiene un valor especial porque muestra cómo la arquitectura tradicional aprovechaba el efecto invernadero: en invierno acumulaba calor y en verano permitía ventilar la vivienda abriendo solo los pequeños respiraderos laterales. No era un adorno; era una solución climática muy ingeniosa.\n\nSi comparas las fachadas de la plaza, notarás que pertenecen a épocas distintas, pero mantienen una sorprendente armonía. No es casualidad: Santiago fue creciendo muy despacio y las nuevas construcciones se adaptaban a la escala de las antiguas. Por eso el Toural no parece una plaza diseñada de una vez, sino una plaza que ha ido madurando durante siglos.\n\nLos compostelanos suelen decir que el Toural es el verdadero kilómetro cero de Santiago. No porque exista una placa, sino porque, si quedas con alguien en el casco histórico y no concretáis más, durante generaciones bastaba decir: \"vémonos no Toural\".\n\nPara seguir, dirigíos cuesta abajo hasta el final del casco antiguo.",
      en: "The name comes from \"touro\" (bull). This is where the market for large livestock was held, especially oxen and bulls, before the city grew. In the Middle Ages this spot sat right at the edge of the city wall, perfect for trading without clogging up the streets inside.\n\nThe current fountain, unveiled in 1822, wasn't just decorative. It was one of the main water supply points for residents, merchants and animals. Before running water existed, an important square needed an important fountain.\n\nThe building overlooking the square is the Pazo de Bendaña, built by Clemente Fernández Sarela in the 18th century.\n\nBut almost nobody looks up.\n\nAt the top of the façade there's a figure of Atlas holding up the celestial sphere. It's an almost unique motif in Compostela's civic architecture. While most pazos top their façades with coats of arms or pinnacles, here a figure from Greek mythology literally carries the weight of the world. Today the building houses the Eugenio Granell Foundation and Museum.\n\nIn Santiago it's said that if a pure, virgin person walks underneath, Atlas will drop the globe. He's still holding on, poor guy.\n\nOn one of the sides you'll find a huge glazed gallery.\n\nGalerías (glazed balconies) are typical of Galicia, but this one is especially valuable because it shows how traditional architecture made use of the greenhouse effect: it stored heat in winter and allowed ventilation in summer by opening only the small side vents. It wasn't decoration — it was a very clever climate solution.\n\nIf you compare the façades around the square, you'll notice they belong to different periods, yet they keep a surprising harmony. That's no accident: Santiago grew very slowly, and new buildings adapted to the scale of the older ones. That's why the Toural doesn't feel like a square designed all at once, but one that has matured over centuries.\n\nLocals often say the Toural is Santiago's true kilometer zero. Not because there's a plaque, but because, for generations, if you made plans with someone in the old town without specifying more, it was enough to say: \"let's meet at the Toural.\"\n\nTo continue, head downhill to the far end of the old town."
    },
    rewardImage: "https://i.imgur.com/qdF4E07.jpeg"
  },
  {
    id: "reto-17",
    clueImage: "https://i.imgur.com/Ror8gKo.jpeg",
    title: { es: "As Dúas Marías", en: "As Dúas Marías" },
    mapsQuery: "42.8777154,-8.5460303",
    lat: 42.8777154,
    lng: -8.5460303,
    reward: {
      es: "Maruxa y Coralia Fandiño Ricart, \"As Dúas Marías\"\n\nAunque la gente suele banalizar mucho su historia, son dos de las personas de Santiago que más homenaje merecen. Ellas eran dos hermanas nacidas en una familia obrera de Santiago. Sus hermanos estaban vinculados al movimiento anarcosindicalista durante la Segunda República.\n\nTras el golpe de 1936, la familia sufrió una persecución brutal. Algunos hermanos huyeron, otros fueron encarcelados y las hermanas quedaron marcadas para siempre.\n\nMaruxa y Coralia no fueron encarceladas ni fusiladas, pero sufrieron algo muy habitual en la posguerra: el acoso constante.\n\nFueron detenidas, interrogadas, humilladas públicamente y sometidas a vigilancia durante años para intentar obtener información sobre sus hermanos.\n\nMuchos historiadores consideran que el deterioro psicológico que sufrieron está directamente relacionado con esa persecución.\n\nA partir de los años 50 comenzaron a recorrer Santiago todos los días.\n\nVestían colores llamativos, se maquillaban de forma extravagante y paseaban por la Alameda exactamente a las dos de la tarde.\n\nPor eso muchos compostelanos las conocían como \"Las Dos en Punto\".\n\nDurante años fueron objeto de burlas.\n\nSin embargo, hoy mucha gente interpreta su comportamiento de otra manera: como una forma de resistencia personal.\n\nLas Marías adoraban el ambiente estudiantil.\n\nSolían acercarse a los universitarios, conversar, pedir un cigarrillo o lanzar algún piropo. Por eso siguen estando muy presentes en la memoria colectiva de varias generaciones de estudiantes compostelanos.\n\nSi observas fotografías antiguas, verás que la estatua reproduce su forma característica de caminar: juntas, ligeramente inclinadas hacia delante y conversando entre ellas.\n\nDurante décadas fueron vistas como dos locas. Hoy se entienden como un símbolo de memoria, dignidad y supervivencia.\n\nPor eso, cuando alguien se sienta a hacerse una foto entre ellas en la Alameda, en realidad está haciéndose una foto con una parte de la historia menos visible de Santiago: la de quienes sobrevivieron a la represión sin dejar nunca de recorrer las calles de su ciudad.\n\nAhora, puedes elegir dar un pequeño paseo por la Alameda (es triangular, recorrerla lleva entre 10-15 minutos, aunque puedes hacer sólo la recta de la derecha y disfrutar de las vistas a la Catedral) o volver sobre tus pasos hacia la plaza do Toural y continuar nuestra ruta por la Rúa do Vilar.",
      en: "Maruxa and Coralia Fandiño Ricart, \"As Dúas Marías\"\n\nEven though people often trivialize their story, they're two of the people from Santiago who deserve the most tribute. They were two sisters born into a working-class family in Santiago. Their brothers were linked to the anarcho-syndicalist movement during the Second Republic.\n\nAfter the 1936 coup, the family suffered brutal persecution. Some brothers fled, others were imprisoned, and the sisters were marked forever.\n\nMaruxa and Coralia weren't imprisoned or executed, but they suffered something very common in the postwar years: constant harassment.\n\nThey were detained, interrogated, publicly humiliated, and kept under surveillance for years in an attempt to get information about their brothers.\n\nMany historians believe the psychological toll they suffered is directly linked to that persecution.\n\nStarting in the 1950s, they began walking through Santiago every day.\n\nThey wore bright colors, wore extravagant makeup, and strolled through the Alameda at exactly two in the afternoon.\n\nThat's why many locals knew them as \"Las Dos en Punto\" (\"The Two O'Clock Ladies\").\n\nFor years they were the target of mockery.\n\nToday, though, many people read their behavior differently: as a form of personal resistance.\n\nThe Marías adored the student atmosphere.\n\nThey liked approaching university students, chatting, asking for a cigarette, or tossing out a flirtatious remark. That's why they remain very present in the collective memory of several generations of Compostela students.\n\nIf you look at old photographs, you'll see that the statue reproduces their characteristic way of walking: close together, leaning slightly forward, talking to each other.\n\nFor decades they were seen as two madwomen. Today they're understood as a symbol of memory, dignity, and survival.\n\nSo when someone sits down to take a photo between them in the Alameda, they're actually taking a photo with a less visible part of Santiago's history: that of people who survived repression without ever stopping their walks through their city's streets.\n\nNow, you can choose to take a short walk through the Alameda (it's triangular, walking the whole loop takes 10-15 minutes, though you can just do the right-hand stretch and enjoy the views of the Cathedral), or head back the way you came toward Praza do Toural and continue our route along Rúa do Vilar."
    },
    rewardImage: "https://i.imgur.com/vHy0xog.jpeg"
  },
  {
    id: "reto-18",
    clueImage: "https://i.imgur.com/Stvxesj.jpeg",
    title: { es: "Rúa do Vilar — ventanas de vigilancia", en: "Rúa do Vilar — watch windows" },
    mapsQuery: "42.8778611,-8.5454139",
    lat: 42.8778611,
    lng: -8.5454139,
    reward: {
      es: "Ring! Antes de Ring!\n\nAhora somos todos muy modernos, con nuestros videoporteros conectados al teléfono para poder ver cómo el repartidor se va con nuestro paquete mientras pone \"ausente\" en la app; pero en la Santiago medieval esto ya existía. Estas ventanitas que encontraréis en muchos soportales de las calles con arcos, como esta Rúa do Vilar, servían para que las criadas controlaran quién llegaba, los comerciantes vigilaran sus tiendas y más de un estudiante compostelano supiera que alguien lo estaba observando sin que él pudiera ver a quien miraba.\n\nAl estar la puerta bajo los pórticos, si alguien llamaba sería imposible saber quién era, y hacerle asomarse a la habitual lluvia del invierno, especialmente en un tiempo en el que secar la ropa era... difícil, no sonaba como una buena opción; por lo que estos ventanucos hacían las veces de videoportero al mismo tiempo que te permitían arrojar la llave por ellos para que el visitante pudiera entrar.\n\nCuidado, la siguiente imagen está cerca, ¡muy cerca!",
      en: "Ring! Before Ring doorbells existed\n\nWe're all very modern now, with video doorbells linked to our phones so we can watch the delivery driver leave with our package while the app shows us as \"away\"; but medieval Santiago already had something like it. These little windows you'll find in many of the arcaded doorways along streets like Rúa do Vilar let servants keep an eye on who was arriving, shopkeepers watch over their stores, and more than one Compostela student learn that someone was watching him without him being able to see who was looking.\n\nSince the door sat under the porticoes, if someone knocked it would be impossible to know who it was, and making them step out into the usual winter rain — especially at a time when drying clothes was... difficult — didn't sound like a good option. So these little windows worked as a kind of video doorbell, while also letting you drop the key through so the visitor could let themselves in.\n\nCareful, the next photo is close, very close!"
    },
    rewardImage: "https://i.imgur.com/nOs7crt.jpeg"
  },
  {
    id: "reto-19",
    clueImage: "https://i.imgur.com/ytUTErs.jpeg",
    title: { es: "Calella de Entrerrúas", en: "Calella de Entrerrúas" },
    mapsQuery: "42.8780633,-8.5448648",
    lat: 42.8780633,
    lng: -8.5448648,
    reward: {
      es: "Estás ante una de las calles más estrechas de Santiago. En realidad, el paso más estrecho correspondería a la Rúa da Oliveira (70cm), pero es sólo en un punto y se ensancha enormemente. Sin embargo, este alargado callejón (90 cm en su parte más estrecha) se estira durante varios metros, hasta dar a una pequeña plaza en la que hasta no hace mucho tiempo se mantenía una herrería tradicional, y vuelve como callejón hasta la Rúa Nova que hemos atravesado hace un rato.\n\nMira hacia arriba. Verás que las fachadas no son paralelas. Cada propietario fue ampliando o modificando su casa con el paso de los siglos, de manera que el callejón se estrecha y ensancha ligeramente.\n\nLa entrada desde la Rúa do Vilar está dominada por el Pazo de Vaamonde, hoy sede del Consorcio de Santiago. Merece la pena fijarse en el llamador de la puerta: es una obra del escultor gallego Francisco Asorey.\n\nAhora, volvamos a la Rúa do Vilar para buscar la siguiente parada.",
      en: "You're standing in one of Santiago's narrowest streets. Technically, the narrowest passage is Rúa da Oliveira (70 cm), but that's only at one point before it widens considerably. This long alley, though (90 cm at its narrowest), stretches on for several meters, opening onto a small square that until not long ago held a traditional blacksmith's forge, then continues back out as an alley to Rúa Nova, which we already crossed a while ago.\n\nLook up. You'll notice the façades aren't parallel. Each owner expanded or altered their house over the centuries, so the alley narrows and widens slightly along the way.\n\nThe entrance from Rúa do Vilar is dominated by the Pazo de Vaamonde, today home to the Consorcio de Santiago. It's worth checking out the door knocker: it's a work by the Galician sculptor Francisco Asorey.\n\nNow, let's head back to Rúa do Vilar to look for the next stop."
    },
    rewardImage: "https://i.imgur.com/cEnWvfB.jpeg"
  },
  {
    id: "reto-20",
    clueImage: "https://i.imgur.com/bHkgw5o.jpeg",
    title: { es: "Café Casino", en: "Café Casino" },
    mapsQuery: "42.8789448,-8.5447398",
    lat: 42.8789448,
    lng: -8.5447398,
    reward: {
      es: "Si entras pensando que es una cafetería bonita, te perderás lo mejor: en realidad estás entrando en el antiguo casino de la burguesía compostelana, uno de los espacios civiles más elegantes de Galicia.\n\nUn club privado... sin ruletas\n\nLa palabra casino aquí no tiene nada que ver con el juego.\n\nEn el siglo XIX un casino era una sociedad de recreo donde se reunían las élites para leer la prensa, celebrar bailes, escuchar conciertos, jugar al billar o discutir de política. El Casino de Santiago nació en 1873, heredando una sociedad anterior fundada en 1844 en el Pazo de Bendaña, en el Toural.\n\nDurante décadas fue uno de los grandes centros de la vida intelectual compostelana. La tradición sitúa aquí a Valle-Inclán, que frecuentó sus salones, y el propio Castelao le dedicó uno de sus dibujos, Cousas do Casino. Más tarde también pasaron por aquí escritores, políticos y artistas de paso por Santiago.\n\nEn 1919 un gran incendio destruyó buena parte de los salones y la biblioteca. La reconstrucción dio lugar al espectacular espacio que hoy ves, con una enorme sala diáfana de más de veinte metros de largo sin vigas centrales, algo muy avanzado para la época.\n\nEl techo suele llevarse todas las miradas, pero yo siempre invito a mirar las paredes. Las 36 tallas de madera fueron realizadas por el escultor compostelano Maximino Magariños. No son simples adornos: representan escenas religiosas, alegorías, pecados, juegos de cartas e incluso escudos de Galicia y de las provincias. Es casi un museo de ebanistería escondido en una cafetería.\n\nEn la primera planta existía el famoso Salón Amarillo, considerado durante muchos años el gran salón de baile de Compostela. En Carnaval, Ascensión o Pascua acogía algunas de las fiestas más exclusivas de Galicia. Allí sonaban las mejores orquestas y acudía la alta sociedad compostelana. Hoy ya no conserva esa función, pero durante décadas fue el epicentro de la vida social de la ciudad.\n\nAhora, piérdete un rato paseando la Rúa do Vilar hasta llegar a la siguiente imagen, al final de la calle. Por el camino, puedes parar en el museo de la Fundación Gonzalo Torrente Ballester. Actualmente tiene una exposición interactiva sobre el Camino de Santiago bastante entretenida.",
      en: "If you walk in thinking it's just a pretty café, you'll miss the best part: you're actually stepping into the old casino of Compostela's bourgeoisie, one of the most elegant civic spaces in Galicia.\n\nA private club... with no roulette wheels\n\nThe word casino here has nothing to do with gambling.\n\nIn the 19th century, a casino was a leisure society where the elite gathered to read the press, hold dances, listen to concerts, play billiards, or discuss politics. The Casino de Santiago was founded in 1873, inheriting an earlier society founded in 1844 at the Pazo de Bendaña, in the Toural.\n\nFor decades it was one of the great centers of Compostela's intellectual life. Tradition places Valle-Inclán here, who frequented its salons, and Castelao himself dedicated one of his drawings to it, Cousas do Casino. Later, writers, politicians and artists passing through Santiago also came through here.\n\nIn 1919 a major fire destroyed much of the halls and the library. The rebuilding produced the spectacular space you see today, with an enormous open hall over twenty meters long with no central beams — quite advanced for its time.\n\nThe ceiling usually gets all the attention, but I always suggest looking at the walls. The 36 wood carvings were made by the Compostela sculptor Maximino Magariños. They're not just decoration: they depict religious scenes, allegories, sins, card games, and even the coats of arms of Galicia and its provinces. It's almost a hidden museum of woodwork inside a café.\n\nOn the first floor was the famous Salón Amarillo, considered for many years the great ballroom of Compostela. At Carnival, Ascension, or Easter it hosted some of Galicia's most exclusive parties — the best orchestras played there, and Compostela high society attended. It no longer serves that purpose today, but for decades it was the epicenter of the city's social life.\n\nNow, spend a while wandering down Rúa do Vilar until you reach the next photo, at the end of the street. On the way, you can stop at the Fundación Gonzalo Torrente Ballester museum — it currently has quite an entertaining interactive exhibition about the Camino de Santiago."
    },
    rewardImage: "https://i.imgur.com/x4Cv3jG.jpeg"
  },
  {
    id: "reto-21",
    clueImage: "https://i.imgur.com/0yqlw4W.jpeg",
    title: { es: "Praza das Praterías", en: "Praza das Praterías" },
    mapsQuery: "42.8799758,-8.5443258",
    lat: 42.8799758,
    lng: -8.5443258,
    reward: {
      es: "La Praza das Praterías es, probablemente, el rincón donde mejor se entiende la evolución de Santiago. En apenas unos metros conviven el románico del siglo XII, el barroco del XVIII y el urbanismo del XIX, formando un escenario cuidadosamente diseñado.\n\nLa plaza recibe su nombre del gremio de los plateros, que desde la Edad Media tenía aquí sus talleres. Si hoy todavía ves joyerías alrededor, no es una casualidad: es una tradición con más de setecientos años.\n\nAdemás, es la única fachada románica de la Catedral que se conserva esencialmente en su lugar original. Si comparas Praterías con el Obradoiro, estás viendo dos maneras muy distintas de entender la arquitectura: el románico del siglo XII frente al barroco del XVIII.\n\nLa fuente actual se instaló en 1829, aunque aprovecha elementos anteriores. Lo primero que llaman la atención son los cuatro caballos —en realidad, hipocampos, criaturas mitológicas mitad caballo y mitad pez— que lanzan agua por la boca. Sobre ellos se alza una figura femenina sosteniendo una estrella, interpretada generalmente como una alegoría de Compostela.\n\nCuando Federico García Lorca visitó Santiago en 1932, quedó fascinado por esta plaza y por la fuente. Esa impresión terminó cristalizando en su poema \"Danza da lúa en Santiago\", incluido en Seis poemas galegos. La plaza, iluminada por la luna y con el sonido del agua, le pareció casi un escenario irreal.\n\nA vuestra espalda, frente a la Catedral, está la Casa do Cabildo.\n\nEsta es una de las mayores \"ilusiones ópticas\" arquitectónicas de Galicia. A primera vista parece un gran palacio barroco. Pero en realidad... ¡solo tiene unos tres o cuatro metros de profundidad! Fue construida entre 1754 y 1758 por Clemente Fernández Sarela con un objetivo muy concreto: embellecer la plaza. No hacía falta un edificio; hacía falta una fachada.\n\nEs uno de los mejores ejemplos españoles de lo que en teatro se llama una escenografía: un decorado permanente para que el espacio urbano resultara más armonioso. Si la observas de lado comprenderás el truco. Desde Praterías parece un edificio monumental. Desde la Rúa da Conga descubres que apenas tiene fondo. Es una auténtica obra maestra del urbanismo barroco: en lugar de transformar toda la plaza, bastó una fachada elegante para cambiar por completo su percepción. Una muestra de la vanidad del poder catedralicio, nada podía afear el entorno de la Catedral.",
      en: "Praza das Praterías is probably the corner of the city where you best understand Santiago's evolution. Within just a few meters, 12th-century Romanesque, 18th-century baroque, and 19th-century urban planning coexist, forming a carefully composed stage set.\n\nThe square gets its name from the silversmiths' guild, who had their workshops here since the Middle Ages. If you still see jewelry shops around today, that's no coincidence — it's a tradition more than seven hundred years old.\n\nIt's also the only Romanesque façade of the Cathedral that survives essentially in its original spot. Compare Praterías with the Obradoiro and you're looking at two very different ways of understanding architecture: 12th-century Romanesque versus 18th-century baroque.\n\nThe current fountain was installed in 1829, though it reuses earlier elements. The first thing that catches your eye are the four horses — actually hippocamps, mythological creatures half horse, half fish — spouting water from their mouths. Above them rises a female figure holding a star, generally read as an allegory of Compostela.\n\nWhen Federico García Lorca visited Santiago in 1932, he was captivated by this square and its fountain. That impression later crystallized into his poem \"Danza da lúa en Santiago,\" included in Seis poemas galegos. Lit by the moon and filled with the sound of water, the square struck him as almost an unreal stage.\n\nBehind you, facing the Cathedral, stands the Casa do Cabildo.\n\nThis is one of the greatest architectural \"optical illusions\" in Galicia. At first glance it looks like a grand baroque palace. But in reality... it's only three or four meters deep! It was built between 1754 and 1758 by Clemente Fernández Sarela with one very specific goal: to beautify the square. What was needed wasn't a building — it was a façade.\n\nIt's one of the finest Spanish examples of what in theater is called a scenography: a permanent backdrop designed to make the urban space feel more harmonious. Look at it from the side and you'll understand the trick — from Praterías it looks like a monumental building; from Rúa da Conga you discover it barely has any depth at all. It's a true masterpiece of baroque urban planning: instead of transforming the whole square, one elegant façade was enough to completely change how it's perceived — a display of the Cathedral chapter's vanity, since nothing was allowed to spoil the area around the Cathedral."
    },
    rewardImage: "https://i.imgur.com/tRQPyb1.jpeg"
  },
  {
    id: "reto-22",
    clueImage: "https://i.imgur.com/P2QpeWI.jpeg",
    title: { es: "A Sombra do Peregrino", en: "A Sombra do Peregrino (the Pilgrim's Shadow)" },
    mapsQuery: "42.880381,-8.5439586",
    lat: 42.880381,
    lng: -8.5439586,
    reward: {
      es: "La Sombra do Peregrino es una de las leyendas más recientes de Santiago, pero ha arraigado tan bien que mucha gente cree que es medieval.\n\nLa encontrarás en la Praza da Quintana, junto a la Porta Santa. Por la noche, una sombra con forma de peregrino aparece proyectada sobre los sillares de granito.\n\nLa explicación física es sencilla: una combinación de iluminación urbana y elementos arquitectónicos proyecta una silueta muy sugerente. Pero la gracia de Santiago nunca ha estado en las explicaciones sencillas.\n\nCuenta la historia de un peregrino que llegó a Compostela para encontrarse con una mujer de la que estaba enamorado. Ella nunca apareció. El peregrino siguió esperándola día tras día en la Quintana hasta morir. Su sombra, incapaz de abandonar el lugar, continúa aguardando junto a la Catedral.\n\nLa sombra mira hacia la Catedral, no hacia la plaza. Por eso algunos guías cuentan otra versión: no espera a una mujer, sino que es un peregrino que llegó demasiado tarde para obtener el perdón jubilar y quedó condenado a permanecer allí eternamente.\n\nLa Quintana ya tenía tradición de leyendas mucho antes de la sombra. La mitad inferior de esta plaza es la Quintana dos Mortos, el antiguo cementerio de la Catedral. Durante siglos estuvo llena de sepulturas. Si había una plaza compostelana destinada a generar historias de apariciones, era esta.\n\nSigue por la plaza para encontrar la siguiente imagen.",
      en: "The Sombra do Peregrino (Pilgrim's Shadow) is one of Santiago's most recent legends, but it has taken root so well that many people believe it's medieval.\n\nYou'll find it in Praza da Quintana, next to the Porta Santa. At night, a shadow shaped like a pilgrim appears projected onto the granite ashlars.\n\nThe physical explanation is simple: a combination of streetlighting and architectural elements casts a very suggestive silhouette. But Santiago's charm has never been in the simple explanations.\n\nThe story goes that a pilgrim arrived in Compostela to meet a woman he was in love with. She never showed up. The pilgrim kept waiting for her day after day in the Quintana until he died. His shadow, unable to leave the spot, keeps waiting beside the Cathedral to this day.\n\nThe shadow looks toward the Cathedral, not toward the square. That's why some guides tell a different version: he isn't waiting for a woman, but is a pilgrim who arrived too late to receive the jubilee pardon and was condemned to remain there forever.\n\nThe Quintana already had a tradition of legends long before the shadow. The lower half of this square is the Quintana dos Mortos, the Cathedral's old cemetery. For centuries it was full of graves. If any Compostela square was destined to generate ghost stories, it was this one.\n\nContinue across the square to find the next photo."
    },
    rewardImage: "https://albertosolana.wordpress.com/wp-content/uploads/2015/09/fb_img_1593302154360-2.jpg"
  },
  {
    id: "reto-23",
    clueImage: "https://i.imgur.com/gRUnbFv.jpeg",
    title: { es: "Porta Santa", en: "Porta Santa (Holy Door)" },
    mapsQuery: "42.880381,-8.5439586",
    lat: 42.880381,
    lng: -8.5439586,
    video: "https://www.youtube.com/shorts/glsBldxPGEI",
    reward: {
      es: "[[VIDEO]]\n\nLa Porta Santa es uno de los lugares más importantes de Santiago, pero su interés va mucho más allá de abrirse en Año Santo.\n\nLa puerta que ves en la Quintana permanece tapiada o cerrada la mayor parte del tiempo. Solo se abre durante los Años Santos Jacobeos, cuando el 25 de julio cae en domingo.\n\nLo curioso es que la ceremonia de apertura consiste literalmente en derribar simbólicamente el muro que la sella desde el interior.\n\nLa Porta Santa se abre hacia la Quintana dos Mortos, que durante siglos fue el cementerio de la Catedral. Por eso la experiencia medieval de cruzarla tenía una enorme carga simbólica: se pasaba del espacio asociado a la muerte al interior del templo del Apóstol.\n\nMuchos peregrinos cruzan la puerta sin fijarse en las figuras que la rodean. Las esculturas proceden del antiguo coro pétreo románico realizado por el Maestro Mateo para el interior de la Catedral. Cuando el coro fue desmontado en el siglo XVII, varias piezas acabaron reutilizadas aquí. Es decir, algunas de las esculturas que ves estuvieron originalmente dentro de la Catedral románica.\n\nEs una de las pocas Puertas Santas del mundo; Roma tiene las suyas en las basílicas mayores, pero fuera de ese contexto la de Santiago es una de las más relevantes de la cristiandad. Atravesarla durante un Año Santo permite obtener la indulgencia jubilar, siempre que se cumplan las condiciones establecidas por la Iglesia.\n\nSi quieres hacer una \"parada técnica\", te recomiendo el café Literarios, en lo alto de las escaleras, en la Quintana de Vivos.\n\nPara seguir nuestra búsqueda, vuelve sobre tus pasos a la plaza de Praterías (la de la fuente de caballos) y continúa bajando la calle, pegado a la Catedral, si la cola interminable de peregrinos te lo permite.",
      en: "[[VIDEO]]\n\nThe Porta Santa is one of Santiago's most important spots, but its interest goes well beyond simply opening in a Holy Year.\n\nThe door you see in the Quintana stays bricked up or closed most of the time. It only opens during Jacobean Holy Years, when 25 July falls on a Sunday.\n\nThe curious thing is that the opening ceremony literally consists of symbolically knocking down the wall that seals it from the inside.\n\nThe Porta Santa opens onto the Quintana dos Mortos, which for centuries was the Cathedral's cemetery. That's why, in medieval experience, crossing it carried enormous symbolic weight: you passed from a space associated with death into the interior of the Apostle's temple.\n\nMany pilgrims cross the door without noticing the figures around it. The sculptures come from the old Romanesque stone choir made by Master Mateo for the Cathedral's interior. When the choir was dismantled in the 17th century, several pieces ended up reused here. In other words, some of the sculptures you see were originally inside the Romanesque Cathedral.\n\nIt's one of the few Holy Doors in the world — Rome has its own in the major basilicas, but outside that context, Santiago's is one of the most significant in Christianity. Crossing it during a Holy Year grants the jubilee indulgence, provided the conditions set by the Church are met.\n\nIf you'd like a \"technical stop,\" I'd recommend Café Literarios, at the top of the stairs, in the Quintana de Vivos.\n\nTo continue our search, retrace your steps to Praterías square (the one with the horse fountain) and keep heading down the street, hugging the Cathedral, if the endless line of pilgrims lets you."
    },
    rewardImage: "https://i.imgur.com/crusHQq.jpeg"
  },
  {
    id: "reto-24",
    clueImage: "https://i.imgur.com/tPlldUO.jpeg",
    title: { es: "Árbol da Ciencia", en: "Tree of Knowledge" },
    mapsQuery: "42.8799477,-8.5452529",
    lat: 42.8799477,
    lng: -8.5452529,
    reward: {
      es: "El Árbol da Ciencia es una de las curiosidades menos conocidas del Obradoiro. Miles de personas pasan delante sin darse cuenta de que esconde una tradición universitaria con siglos de historia. Si te acercas verás que entre las ramas cuelgan trece pergaminos escritos en latín. Cada uno representa una de las disciplinas que antiguamente se enseñaban en la Universidad de Santiago: Teología, Medicina, Derecho, Filosofía... El árbol simboliza que todo el conocimiento nace de un mismo tronco.\n\nLos estudiantes indecisos se colocaban frente al árbol, daban tres vueltas sobre sí mismos, se giraban de espaldas y señalaban al azar una de las ramas. La disciplina que tocaban era la carrera que debían estudiar.\n\nHoy el árbol está protegido por un cristal. Antiguamente se podía tocar directamente, y el desgaste de algunas zonas era consecuencia de miles de manos de estudiantes siguiendo el ritual. Ahora la tradición continúa, pero el dedo se apoya sobre el cristal.\n\nAhora, antes de ir hacia la Catedral, avanzaremos un poco en dirección contraria, al Pazo de Fonseca (el edificio grande frente a la plaza con tanta vegetación).",
      en: "The Árbol da Ciencia (Tree of Knowledge) is one of the lesser-known curiosities of the Obradoiro. Thousands of people walk past it without noticing it holds a centuries-old university tradition. Look closely and you'll see thirteen parchments hanging from its branches, written in Latin. Each represents one of the disciplines once taught at the University of Santiago: Theology, Medicine, Law, Philosophy... The tree symbolizes that all knowledge grows from a single trunk.\n\nUndecided students would stand in front of the tree, spin around three times, turn their backs to it, and point at random toward one of the branches. Whichever discipline they touched was the degree they were meant to study.\n\nToday the tree is protected behind glass. In the past you could touch it directly, and the wear on certain spots came from thousands of students' hands following the ritual over the years. The tradition continues today, but now your finger rests on the glass instead.\n\nNow, before heading toward the Cathedral, we'll go a little way in the opposite direction, to the Pazo de Fonseca (the large building with all the greenery facing the square)."
    },
    rewardImage: "https://i.imgur.com/QLHxvIR.jpeg"
  },
  {
    id: "reto-25",
    clueImage: "https://i.imgur.com/IS5vMRJ.jpeg",
    title: { es: "Pazo de Fonseca", en: "Pazo de Fonseca" },
    mapsQuery: "42.8796891,-8.5453891",
    lat: 42.8796891,
    lng: -8.5453891,
    reward: {
      es: "El Colegio de Fonseca es, en mi opinión, uno de los edificios más importantes de Santiago y, al mismo tiempo, uno de los más infravalorados. Sin él, probablemente la Universidad de Santiago no habría alcanzado el prestigio que tuvo durante siglos.\n\nFue fundado en 1501 por el arzobispo Alonso III de Fonseca, uno de los grandes mecenas del Renacimiento español. Su idea era revolucionaria para la época: crear un colegio donde los estudiantes vivieran, estudiaran y se formasen juntos, siguiendo el modelo de Salamanca o Alcalá.\n\nMás que una facultad, era un colegio mayor, reservado a alumnos brillantes, muchos de los cuales acabarían ocupando cargos importantes en la Iglesia o en la administración.\n\nCuando Santiago aún era una ciudad de aspecto eminentemente medieval, Fonseca introdujo un lenguaje arquitectónico completamente nuevo. El patio interior, de líneas sobrias y perfectamente proporcionadas, es uno de los primeros grandes ejemplos del Renacimiento gallego. Si vienes de recorrer el románico y el barroco de la Catedral, entrar en este claustro es casi un cambio de época instantáneo.\n\nVale la pena entrar para recorrer el claustro: tiene dos pisos de arquerías y una armonía muy distinta a la arquitectura compostelana habitual. Después de tanto románico y barroco, el patio transmite una serenidad muy \"italiana\"; y el paraninfo (si tienes suerte y está abierto, podrás ver uno de los espacios ceremoniales más importantes de la Universidad de Santiago. Allí se celebran investiduras de doctores, aperturas de curso y otros actos solemnes).\n\nAhora sí, ¡sal de Fonseca y dirígete al Obradoiro!",
      en: "The Colegio de Fonseca is, in my opinion, one of the most important buildings in Santiago and, at the same time, one of the most underrated. Without it, the University of Santiago probably wouldn't have reached the prestige it held for centuries.\n\nIt was founded in 1501 by archbishop Alonso III de Fonseca, one of the great patrons of the Spanish Renaissance. His idea was revolutionary for the time: create a college where students would live, study, and train together, following the model of Salamanca or Alcalá.\n\nMore than a faculty, it was a colegio mayor, reserved for brilliant students, many of whom went on to hold important posts in the Church or in government.\n\nAt a time when Santiago still looked overwhelmingly medieval, Fonseca introduced a completely new architectural language. The interior courtyard, with its sober, perfectly proportioned lines, is one of the first great examples of the Galician Renaissance. If you've just come from the Romanesque and baroque of the Cathedral, stepping into this cloister feels almost like an instant change of era.\n\nIt's worth going in to walk the cloister: it has two floors of arcades and a harmony very different from Compostela's usual architecture. After so much Romanesque and baroque, the courtyard has a very \"Italian\" serenity to it; and the paraninfo (if you're lucky and it's open, you can see one of the most important ceremonial spaces of the University of Santiago, where doctoral investitures, opening-of-term ceremonies and other formal events take place).\n\nNow, leave Fonseca and head to the Obradoiro!"
    },
    rewardImage: "https://i.imgur.com/OKYpesW.jpeg"
  },
  {
    id: "reto-26",
    clueImage: "https://i.imgur.com/k3GgMIl.jpeg",
    title: { es: "Catedral de Santiago — fachada do Obradoiro", en: "Cathedral of Santiago — Obradoiro façade" },
    mapsQuery: "42.880469,-8.545722",
    lat: 42.880469,
    lng: -8.545722,
    video: "https://www.youtube.com/watch?v=sYz3T6tHWWk",
    reward: {
      es: "¿Pensabas que no te iba a hablar de la Catedral?\n\nPrimero, para los muy futboleros, un vídeo de Ronaldinho.\n\n[[VIDEO]]\n\nY ahora, a lo que hemos venido.\n\nLa Praza do Obradoiro, tal y como la conocemos, es relativamente reciente. Durante siglos este espacio estaba mucho más fragmentado por construcciones, muros y desniveles.\n\nSu nombre procede de los obradoiros (talleres) de los canteros que trabajaban en la fachada occidental de la Catedral durante los siglos XVII y XVIII.\n\nSi giras sobre ti mismo en el centro del Obradoiro verás algo extraordinario:\n• Catedral → poder religioso.\n• Pazo de Raxoi → poder político y administrativo.\n• Hostal dos Reis Católicos → poder asistencial y hospitalario.\n• Colexio de Fonseca / San Xerome → poder académico.\n\nPocas plazas europeas reúnen de forma tan clara los grandes poderes de una sociedad.\n\nLa fachada que vemos hoy no es la fachada original de la Catedral. Entre 1738 y 1750, Fernando de Casas Novoa construyó la enorme fachada barroca para proteger el antiguo Pórtico de la Gloria de la lluvia y del viento atlántico. Detrás de ese inmenso decorado sigue estando la fachada medieval. Es uno de los ejemplos más espectaculares de Europa de una fachada construida como protección de otra más antigua.\n\nLas torres no son gemelas\n\nCasi nadie lo aprecia a primera vista.\n• La torre de la izquierda (mirando la Catedral) es la Carraca.\n• La de la derecha es la de las Campás.\n\nParecen idénticas, pero no lo son. Si observas con atención descubrirás diferencias en ventanas, remates y proporciones. La torre sur alberga algunas de las campanas históricas más importantes de la Catedral. Durante siglos marcaron las horas, los incendios, las fiestas y las emergencias. A día de hoy siguen siendo el terror de los insomnes.\n\nLa torre norte recibe su nombre de la carraca, un instrumento de madera utilizado durante la Semana Santa cuando las campanas guardaban silencio. Ese detalle conserva una tradición litúrgica medieval que sobrevive en el propio nombre de la torre y todavía se lleva a cabo cada Semana Santa.\n\nEn el centro de la fachada, sobre el gran ventanal, aparece la estatua del Apóstol Santiago como peregrino: sombrero, bordón, capa y concha jacobea. Es un mensaje muy potente: el santo recibe a quienes llegan siguiendo sus propios pasos.\n\nSi te acercas a la fachada del Obradoiro y empiezas a leerla de abajo arriba, descubrirás que está diseñada como una enorme catequesis de piedra.\n\nUna fachada para salvar otra\n\nLo primero que hay que entender es que la fachada no se construyó para embellecer la Catedral, sino para proteger el Pórtico de la Gloria. La lluvia atlántica estaba deteriorando las esculturas del Maestro Mateo, y la solución fue envolver toda la fachada occidental con esta gigantesca pantalla barroca. Por eso algunos historiadores la llaman una especie de \"paraguas monumental\".\n\nEl gran ventanal\n\nEl enorme ventanal central no es solo decorativo. Su misión es iluminar el interior del Pórtico de la Gloria. Antes de la iluminación artificial, era la principal fuente de luz natural para las esculturas mateanas. La luz que entra por ahí fue cuidadosamente calculada para bañar el pórtico.\n\nA ambos lados de Santiago aparecen Atanasio y Teodoro, considerados según la tradición los discípulos que trasladaron el cuerpo del Apóstol desde Palestina hasta Galicia. Son personajes fundamentales en la leyenda jacobea, aunque muchos visitantes no saben quiénes son.\n\nEl escudo gigantesco\n\nUno de los elementos más impresionantes es el enorme escudo real que domina la fachada. Representa a la monarquía española y recuerda que la Catedral no fue solo un centro religioso, sino también un proyecto político de primer orden. Cuando se construye el Obradoiro, Santiago es una cuestión de Estado.\n\nLa siguiente parada está escondida entre el Obradoiro y el Hostal dos Reis Católicos.",
      en: "Did you think I wasn't going to talk about the Cathedral?\n\nFirst, for the football fans, a Ronaldinho video.\n\n[[VIDEO]]\n\nAnd now, on to what we came for.\n\nPraza do Obradoiro, as we know it today, is relatively recent. For centuries this space was far more fragmented by buildings, walls and changes in level.\n\nIts name comes from the obradoiros (workshops) of the stonemasons who worked on the Cathedral's western façade during the 17th and 18th centuries.\n\nTurn around in the middle of the Obradoiro and you'll see something extraordinary:\n• The Cathedral → religious power.\n• The Pazo de Raxoi → political and administrative power.\n• The Hostal dos Reis Católicos → welfare and hospital power.\n• The Colexio de Fonseca / San Xerome → academic power.\n\nFew European squares bring together the great powers of a society so clearly.\n\nThe façade we see today isn't the Cathedral's original façade. Between 1738 and 1750, Fernando de Casas Novoa built the huge baroque façade to protect the old Pórtico de la Gloria from Atlantic rain and wind. Behind that immense decoration, the medieval façade is still there. It's one of Europe's most spectacular examples of a façade built to protect an older one.\n\nThe towers aren't twins\n\nAlmost nobody notices at first glance.\n• The tower on the left (facing the Cathedral) is the Carraca.\n• The one on the right is the Campás.\n\nThey look identical, but they aren't. Look closely and you'll spot differences in the windows, finials and proportions. The south tower holds some of the Cathedral's most historically important bells. For centuries they marked the hours, fires, festivities, and emergencies. To this day they remain the terror of light sleepers.\n\nThe north tower takes its name from the carraca, a wooden instrument used during Holy Week when the bells fall silent. That detail preserves a medieval liturgical tradition that survives in the tower's very name and is still carried out every Holy Week.\n\nAt the center of the façade, above the great window, stands the statue of the Apostle Santiago as a pilgrim: hat, staff, cape, and scallop shell. It's a powerful message: the saint welcomes those who arrive following in his own footsteps.\n\nIf you look at the Obradoiro façade and start reading it from bottom to top, you'll find it's designed as an enormous catechism carved in stone.\n\nA façade to save another façade\n\nThe first thing to understand is that the façade wasn't built to beautify the Cathedral, but to protect the Pórtico de la Gloria. Atlantic rain was damaging Master Mateo's sculptures, and the solution was to wrap the whole western façade in this giant baroque screen. That's why some historians call it a kind of \"monumental umbrella.\"\n\nThe great window\n\nThe enormous central window isn't just decorative. Its job is to light the interior of the Pórtico de la Gloria. Before artificial lighting, it was the main source of natural light for Master Mateo's sculptures. The light entering through it was carefully calculated to bathe the portico.\n\nOn either side of Santiago appear Atanasio and Teodoro, considered by tradition to be the disciples who carried the Apostle's body from Palestine to Galicia. They're key figures in the Jacobean legend, though many visitors don't know who they are.\n\nThe giant coat of arms\n\nOne of the most striking elements is the enormous royal coat of arms that dominates the façade. It represents the Spanish monarchy and is a reminder that the Cathedral wasn't just a religious center, but also a major political project. By the time the Obradoiro was built, Santiago was a matter of State.\n\nThe next stop is hidden between the Obradoiro and the Hostal dos Reis Católicos."
    },
    rewardImage: "https://i.imgur.com/B0BRQtK.jpeg"
  },
  {
    id: "reto-27",
    clueImage: "https://i.imgur.com/MPLZxQo.jpeg",
    title: { es: "Iglesia de San Fructuoso", en: "Iglesia de San Fructuoso" },
    mapsQuery: "42.8806394,-8.5465384",
    lat: 42.8806394,
    lng: -8.5465384,
    reward: {
      es: "O, como se la conoce, \"Iglesia de la baraja\".\n\nSi levantas la vista hacia la parte superior de la fachada verás cuatro figuras femeninas. Oficialmente representan las cuatro virtudes cardinales:\n• Prudencia.\n• Justicia.\n• Fortaleza.\n• Templanza.\n\nPero el pueblo compostelano empezó a decir que parecían las cuatro sotas de la baraja española. Desde entonces, el apodo de \"iglesia de la baraja\" quedó para siempre.\n\nLa fachada está diseñada para verse desde el Obradoiro, que está unos metros más alto que la puerta de la iglesia. Por eso las esculturas se concentran en la parte superior: el arquitecto sabía que el espectador las contemplaría desde arriba, no desde la calle.\n\nCuando la gente llega a la plaza, la Catedral acapara toda la atención. Sin embargo, San Fructuoso ocupa una posición privilegiada: forma parte del gran escenario barroco que cierra el Obradoiro por el oeste.\n\nFue construida entre 1754 y 1765 por Lucas Ferro Caaveiro, uno de los grandes arquitectos del barroco gallego. En las esquinas superiores de la fachada aparecen cuatro figuras que representan a los reyes:\n• Alfonso IX de León.\n• Fernando II.\n• Alfonso VII.\n• Ordoño II.\n\nSon monarcas estrechamente vinculados a la historia de Santiago y del reino medieval de Galicia y León. Si los miras desde abajo parecen vigilar la ciudad.\n\nLa mayoría de iglesias compostelanas tienen planta longitudinal. San Fructuoso, en cambio, posee una planta de cruz griega, con los cuatro brazos de longitud semejante.\n\nFíjate en la cúpula. Desde ciertos puntos del Obradoiro apenas se percibe porque queda visualmente eclipsada por la masa gigantesca de la Catedral. Sin embargo, cuando la observas desde la Costa do Cristo o desde las calles traseras, aparece de repente como una de las cúpulas barrocas más elegantes de la ciudad.\n\nEl siguiente lugar ya lo conoces (o lo conocerás en breve), está a pocos pasos de ti, ¡busca bien!",
      en: "Or, as it's known, the \"Iglesia de la Baraja\" (Church of the Playing Cards).\n\nLook up toward the top of the façade and you'll see four female figures. Officially they represent the four cardinal virtues:\n• Prudence.\n• Justice.\n• Fortitude.\n• Temperance.\n\nBut the people of Compostela started saying they looked like the four jacks of a Spanish deck of cards. Since then, the nickname \"iglesia de la baraja\" stuck for good.\n\nThe façade is designed to be seen from the Obradoiro, which sits a few meters higher than the church door. That's why the sculptures are concentrated near the top: the architect knew viewers would look at them from above, not from street level.\n\nWhen people arrive at the square, the Cathedral grabs all the attention. Yet San Fructuoso holds a privileged position: it's part of the great baroque backdrop that closes off the Obradoiro to the west.\n\nIt was built between 1754 and 1765 by Lucas Ferro Caaveiro, one of the great architects of Galician baroque. In the upper corners of the façade appear four figures representing kings:\n• Alfonso IX of León.\n• Fernando II.\n• Alfonso VII.\n• Ordoño II.\n\nThese are monarchs closely tied to the history of Santiago and the medieval kingdom of Galicia and León. Looked at from below, they seem to keep watch over the city.\n\nMost Compostela churches have a longitudinal floor plan. San Fructuoso, on the other hand, has a Greek-cross plan, with four arms of similar length.\n\nLook at the dome. From certain points in the Obradoiro it's barely visible, overshadowed by the Cathedral's massive bulk. But seen from Costa do Cristo or the back streets, it suddenly appears as one of the most elegant baroque domes in the city.\n\nThe next spot you already know (or you'll get to know it very soon) — it's just a few steps away, look carefully!"
    },
    rewardImage: "https://i.imgur.com/ZXBZHo7.jpeg"
  }
];


/* --------------------------------------------------------------------------
   2. QUÉ VER EN UN DÍA
   Lista ordenada de paradas. "time" es opcional (ej: "09:00" o "Mañana").
   -------------------------------------------------------------------------- */

const QUE_VER_ITEMS = [
  {
    time: { es: "Cubiertas", en: "Rooftops" },
    title: { es: "Subir a las cubiertas de la Catedral", en: "Climb up to the Cathedral rooftops" },
    image: "https://i.imgur.com/oiOJryb.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Catedral+Palacio+de+Gelm%C3%ADrez+Santiago+de+Compostela",
    bookingUrl: "https://visitas.catedraldesantiago.es/museo-catedral-cubiertas-y-torre-de-la-carraca/",
    bookingLabel: { es: "15€ · Reservar cubiertas", en: "€15 · Book rooftops" },
    description: {
      es: "Visita guiada de una hora por las cubiertas de piedra y la Torre da Carraca (unos 72 m de altura), con las mejores vistas de la ciudad. Incluye también el Museo Catedral, el Palacio de Gelmírez y la Cripta del Pórtico de la Gloria. 15€ (12€ tarifa reducida). Reserva en la web oficial.",
      en: "A one-hour guided tour across the Cathedral's stone rooftops and up the Torre da Carraca (about 72 m high), with the best views in the city. Also includes the Cathedral Museum, the Pazo de Xelmírez and the Pórtico de la Gloria crypt. €15 (€12 reduced). Book on the official website."
    }
  },
  {
    time: { es: "Interior", en: "Inside" },
    title: { es: "Ver el Pórtico de la Gloria", en: "See the Pórtico de la Gloria" },
    image: "https://i.imgur.com/AyuBBad.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Catedral+Palacio+de+Gelm%C3%ADrez+Santiago+de+Compostela",
    bookingUrl: "https://visitas.catedraldesantiago.es/portico-de-la-gloria/",
    bookingLabel: { es: "12€ · Reservar Pórtico", en: "€12 · Book Pórtico" },
    description: {
      es: "El pórtico románico original del Maestro Mateo (s. XII), recientemente restaurado y con los colores originales recuperados. El acceso está limitado a un número de visitantes al día, así que conviene reservar con antelación (hasta 7 días antes). 12€ (10€ tarifa reducida), incluye también el Museo Catedral.",
      en: "Master Mateo's original 12th-century Romanesque portico, recently restored with its original colors recovered. Access is limited to a set number of visitors per day, so it's worth booking ahead (up to 7 days in advance). €12 (€10 reduced), also includes the Cathedral Museum."
    }
  },
  {
    time: { es: "Gratis", en: "Free" },
    title: { es: "Visitar el interior de la Catedral", en: "Visit the inside of the Cathedral" },
    image: "https://i.imgur.com/UYBYGcg.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Praza+do+Obradoiro+Santiago+de+Compostela",
    description: {
      es: "La visita general al interior es gratuita, y se entra por la Praza de Praterías. Recomendamos ir a primera hora de la mañana para evitar las colas más largas, que se forman sobre todo a media mañana y con la llegada de los grupos organizados. Si solo queréis ver el interior (y no asistir a misa), evitad los horarios de la Misa del Peregrino: 7:30 h, 9:30 h, 12:00 h y 19:30 h.",
      en: "General entry to the inside is free, and you go in through Praza de Praterías. We recommend going first thing in the morning to avoid the longest queues, which build up mostly by mid-morning once organized tour groups start arriving. If you just want to see the inside (and not attend Mass), avoid the Pilgrim's Mass times: 7:30 am, 9:30 am, 12:00 pm and 7:30 pm."
    }
  },
  {
    time: { es: "Parque", en: "Park" },
    title: { es: "Parque de Bonaval y Panteón de Galegos Ilustres", en: "Parque de Bonaval and the Panteón de Galegos Ilustres" },
    image: "https://i.imgur.com/hM1xj6C.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+de+Bonaval+Santiago+de+Compostela",
    description: {
      es: "Antiguo huerto del convento de San Domingos de Bonaval, hoy uno de los parques con más encanto de Santiago, en una colina justo fuera del casco histórico. En la iglesia gótica del propio convento (hoy parte del Museo do Pobo Galego) está el Panteón de Galegos Ilustres, donde descansan Rosalía de Castro, Castelao y otras figuras clave de la cultura gallega.",
      en: "The former orchard of the Convento de San Domingos de Bonaval, today one of Santiago's most charming parks, on a hill just outside the old town. Inside the convent's Gothic church (now part of the Museo do Pobo Galego) is the Panteón de Galegos Ilustres, the resting place of Rosalía de Castro, Castelao, and other key figures of Galician culture."
    }
  },
  {
    time: { es: "Museo", en: "Museum" },
    title: { es: "Museo do Pobo Galego", en: "Museo do Pobo Galego" },
    image: "https://i.imgur.com/X8kTs5p.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museo+do+Pobo+Galego+San+Domingos+de+Bonaval+Santiago+de+Compostela",
    description: {
      es: "En el mismo antiguo convento de Bonaval. Repasa la cultura tradicional gallega (oficios del mar, arquitectura popular, trajes) y tiene una llamativa escalera helicoidal de triple rampa. Entrada unos 3€, gratis los domingos. Cerrado los lunes.",
      en: "In the same former Bonaval convent. It covers traditional Galician culture (seafaring trades, vernacular architecture, folk costume) and has a striking triple-helix spiral staircase. Entry is about €3, free on Sundays. Closed on Mondays."
    }
  },
  {
    time: { es: "Museo", en: "Museum" },
    title: { es: "Museo das Peregrinacións", en: "Museo das Peregrinacións" },
    image: "https://i.imgur.com/cEFVC1S.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Museo+das+Peregrinaci%C3%B3ns+e+de+Santiago",
    description: {
      es: "A pocos metros de la Catedral. Entrada gratuita, cuenta la historia del Camino de Santiago y de cómo fue creciendo la propia ciudad alrededor de la tumba del Apóstol. Cerrado los lunes.",
      en: "Just a few meters from the Cathedral. Free entry, telling the story of the Camino de Santiago and how the city itself grew up around the Apostle's tomb. Closed on Mondays."
    }
  },
  {
    time: { es: "Mercado", en: "Market" },
    title: { es: "Mercado de Abastos", en: "Mercado de Abastos" },
    image: "https://i.imgur.com/UT6DoHM.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+de+Abastos+Santiago+de+Compostela",
    description: {
      es: "Aunque también tiene su propia parada en el Foto Explorer, merece la pena reservarle un rato del día: paseo entre puestos de marisco, verdura y las paisanas vendiendo directamente su producto, con la opción de comprar y comer en alguno de los puestos-restaurante.",
      en: "Even though it also has its own stop in the Photo Explorer, it's worth setting aside some time for it during the day: a wander among seafood and vegetable stalls and the paisanas selling their own produce directly, with the option to buy and eat right there at one of the stall-restaurants."
    }
  },
  {
    time: { es: "Descanso", en: "Break" },
    title: { es: "Costa Vella", en: "Costa Vella" },
    image: "https://i.imgur.com/G8fSy9T.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Costa+Vella+Porta+da+Pena+Santiago+de+Compostela",
    description: {
      es: "El jardín interior del Hotel Costa Vella (Porta da Pena, 17) es uno de esos rincones secretos del casco histórico: manzanos, limoneros y una fuente de piedra entre mesas. Hoy funciona como O Xardín das Delicias, café a cargo de la chef Lucía Freitas (la misma de A Tafona). Ideal para un desayuno o una pausa con té a media tarde.",
      en: "The interior garden of the Hotel Costa Vella (Porta da Pena, 17) is one of the old town's secret little corners: apple trees, lemon trees and a stone fountain among the tables. These days it runs as O Xardín das Delicias, a café run by chef Lucía Freitas (the same chef behind A Tafona). Ideal for breakfast or a mid-afternoon tea break."
    }
  }

  // Añade más paradas copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   3. ¡TENGO COCHE!
   Escapadas fuera de la ciudad. "distance" tipo "30 min en coche".
   -------------------------------------------------------------------------- */

const TENGO_COCHE_ITEMS = [
  {
    image: "https://i.imgur.com/7BrucUk.jpeg",
    rating: 5,
    title: { es: "Cabo Fisterra", en: "Cape Fisterra" },
    distance: { es: "1h en coche", en: "1h by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cabo+Fisterra+Galicia",
    description: {
      es: "El 'fin del mundo' para los romanos. Atardecer espectacular sobre el Atlántico.",
      en: "The 'end of the world' for the Romans. Spectacular sunset over the Atlantic."
    }
  },
  {
    image: "https://i.imgur.com/SIzzHZY.jpeg",
    rating: 4,
    title: { es: "A Coruña", en: "A Coruña" },
    distance: { es: "45 min en coche", en: "45 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Torre+de+H%C3%A9rcules+A+Coru%C3%B1a",
    description: {
      es: "Ciudad de la Torre de Hércules y el paseo marítimo más largo de Europa. Buen marisco en la zona vieja.",
      en: "Home of the Tower of Hercules and the longest seaside promenade in Europe. Great seafood in the old town."
    }
  },
  {
    image: "https://i.imgur.com/pYTAv2g.jpeg",
    rating: 4,
    title: { es: "Costa da Morte", en: "Costa da Morte" },
    distance: { es: "45-60 min en coche", en: "45-60 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Faro+Cabo+Vil%C3%A1n%2C+Camari%C3%B1as",
    description: {
      es: "Acantilados salvajes y faros. Muxía y Cabo Vilán son parada obligatoria.",
      en: "Wild cliffs and lighthouses. Muxía and Cabo Vilán are a must-stop."
    }
  },
  {
    image: "https://i.imgur.com/dyw1Fxu.jpeg",
    rating: 2,
    title: { es: "Fervenza do Toxa", en: "Fervenza do Toxa" },
    distance: { es: "40 min en coche", en: "40 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fervenza+do+Toxa%2C+A+Estrada",
    description: {
      es: "Una de las cascadas más altas de Galicia, escondida entre bosque. Un rincón muy poco masificado, ideal para desconectar un rato de la ciudad.",
      en: "One of Galicia's tallest waterfalls, hidden away in the forest. A quiet, uncrowded spot, ideal for a short break from the city."
    }
  },
  {
    image: "https://i.imgur.com/viYTj1R.jpeg",
    rating: 2,
    title: { es: "Torres do Oeste", en: "Torres do Oeste" },
    distance: { es: "35 min en coche", en: "35 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Torres+do+Oeste+Catoira",
    extraUrl: "https://catoira.gal/wp-content/uploads/2026/07/2026_Programa_Vikinga_Comprimido.pdf",
    extraLabel: { es: "Programa de la Romería Vikinga", en: "Romería Vikinga program" },
    description: {
      es: "En Catoira, las ruinas de las defensas que el obispo Cresconio mandó construir en el siglo XI para proteger Compostela de los ataques vikingos por el río Ulla. Si estás por la zona a principios de agosto, la Romería Vikinga (recreación del desembarco, declarada Fiesta de Interés Turístico Internacional) se celebra aquí mismo el 2 de agosto de 2026.",
      en: "In Catoira, the ruins of the defenses that bishop Cresconio ordered built in the 11th century to protect Compostela from Viking raids coming up the Ulla river. If you're around in early August, the Romería Vikinga (a reenactment of the Viking landing, declared a Festival of International Tourist Interest) takes place right here on 2 August 2026."
    }
  },
  {
    image: "https://i.imgur.com/UfUTMb8.jpeg",
    rating: 4,
    title: { es: "Castro de Baroña", en: "Castro de Baroña" },
    distance: { es: "45 min en coche", en: "45 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Castro+de+Baro%C3%B1a+Porto+do+Son",
    description: {
      es: "Poblado castrexo de la Edad de Hierro sobre una península rodeada de mar, cerca de Porto do Son. Una de las imágenes más fotografiadas de la costa gallega.",
      en: "An Iron Age hillfort settlement on a small peninsula surrounded by the sea, near Porto do Son. One of the most photographed spots on the Galician coast."
    }
  },
  {
    image: "https://i.imgur.com/YfMm14J.png",
    rating: 3,
    title: { es: "Padrón", en: "Padrón" },
    distance: { es: "20 min en coche", en: "20 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Padr%C3%B3n+Santiago+de+Compostela",
    description: {
      es: "Muy cerca de Santiago. Cuna de los famosos pimientos de Padrón, y también de la poeta Rosalía de Castro, cuya casa-museo se puede visitar.",
      en: "Very close to Santiago. Home of the famous Padrón peppers, and also of the poet Rosalía de Castro, whose house-museum is open to visit."
    }
  },
  {
    image: "https://i.imgur.com/QzJZXtZ.jpeg",
    rating: 3,
    title: { es: "Muros", en: "Muros" },
    distance: { es: "55 min en coche", en: "55 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Muros+Galicia",
    description: {
      es: "Pueblo marinero con soportales de piedra, en la ría de Muros e Noia. Puerto pesquero, callejuelas que bajan al mar, y buen punto de partida para la Costa da Morte.",
      en: "A fishing village with stone-arcaded streets, on the Ría de Muros e Noia. A working harbor, lanes running down to the sea, and a good starting point for the Costa da Morte."
    }
  },
  {
    image: "https://i.imgur.com/FmKkgZq.jpeg",
    rating: 3,
    title: { es: "Betanzos", en: "Betanzos" },
    distance: { es: "45 min en coche", en: "45 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Betanzos+A+Coru%C3%B1a",
    description: {
      es: "Casco histórico medieval declarado Conjunto Histórico-Artístico, con iglesias góticas y una plaza mayor con mucho ambiente. Famosa también por su tortilla.",
      en: "A medieval old town declared a Historic-Artistic Site, with Gothic churches and a lively main square. Also famous for its Spanish tortilla."
    }
  },
  {
    image: "https://i.imgur.com/L1Rh7OP.jpeg",
    rating: 2,
    title: { es: "Pazo de Mariñán", en: "Pazo de Mariñán" },
    distance: { es: "55 min en coche", en: "55 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pazo+de+Mari%C3%B1%C3%A1n+Bergondo",
    description: {
      es: "En Bergondo, junto a Betanzos. Pazo gallego con jardines de 17 hectáreas de inspiración francesa, entrada gratuita, con vistas a la ría. Combina bien con una visita a Betanzos el mismo día.",
      en: "In Bergondo, next to Betanzos. A Galician manor house with 17 hectares of French-inspired gardens, free entry, overlooking the estuary. Pairs well with a same-day visit to Betanzos."
    }
  },
  {
    image: "https://i.imgur.com/aZ70NzG.jpeg",
    rating: 5,
    title: { es: "Praia das Catedrais", en: "Praia das Catedrais" },
    distance: { es: "1h 50min en coche", en: "1h 50min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Praia+das+Catedrais+Ribadeo",
    extraUrl: "https://turismoribadeo.gal/playa-de-as-catedrais/mareas/",
    extraLabel: { es: "Tabla de mareas", en: "Tide table" },
    description: {
      es: "La más lejana de esta lista, pero espectacular: arcos y cuevas de roca solo visibles con marea baja, cerca de Ribadeo. Importante: en verano (julio-septiembre) hace falta reserva gratuita previa en la web de la Xunta, y conviene consultar la tabla de mareas antes de ir.",
      en: "The furthest one on this list, but spectacular: rock arches and caves only visible at low tide, near Ribadeo. Important: in summer (July-September) a free advance booking is required on the Xunta's website, and it's worth checking the tide table before heading out."
    }
  },
  {
    image: "https://i.imgur.com/osh3Jzg.jpeg",
    rating: 5,
    title: { es: "Combarro", en: "Combarro" },
    distance: { es: "55 min en coche", en: "55 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Combarro+Pontevedra",
    description: {
      es: "En la ría de Pontevedra. Uno de los pueblos más pintorescos de Galicia, con hórreos junto al mar y un casco antiguo de piedra que llega hasta la orilla.",
      en: "On the Ría de Pontevedra. One of Galicia's most picturesque villages, with granary hórreos right by the sea and a stone old town that runs down to the shore."
    }
  },
  {
    image: "https://i.imgur.com/pdA6AVd.jpeg",
    rating: 3,
    title: { es: "Cambados", en: "Cambados" },
    distance: { es: "45 min en coche", en: "45 min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cambados+Pontevedra",
    description: {
      es: "Capital del Albariño, en las Rías Baixas. Casco histórico de piedra alrededor de la Praza de Fefiñáns, y buena oportunidad para probar vino albariño en alguna bodega.",
      en: "The capital of Albariño wine, in the Rías Baixas. A stone old town around Praza de Fefiñáns, and a good chance to try Albariño wine at a local winery."
    }
  },
  {
    image: "https://i.imgur.com/sGImkv1.jpeg",
    rating: 4,
    title: { es: "Fervenza do Ézaro", en: "Fervenza do Ézaro" },
    distance: { es: "1h 15min en coche", en: "1h 15min by car" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fervenza+do+%C3%89zaro+Dumbr%C3%ADa",
    description: {
      es: "La única cascada de Europa que desemboca directamente en el mar, con una caída de 40 metros en plena Costa da Morte. En verano (del 21 de junio al 21 de septiembre), las noches de sábado se ilumina de 23:00 a 00:00h con un espectáculo de luces — merece la pena planificar la visita para coincidir con eso si podéis.",
      en: "The only waterfall in Europe that flows directly into the sea, with a 40-meter drop right on the Costa da Morte. In summer (21 June to 21 September), on Saturday nights it's lit up from 11 pm to midnight with a light show — worth timing your visit to catch it if you can."
    }
  }
  // Añade más destinos copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   4. ¿POR DÓNDE SALIR?
   Cada sitio tiene estos filtros (todos opcionales excepto music):
     - music:      "celta" | "moderna" | "tranquila"
     - tapa:       true | false  (¿ponen tapa con la bebida?)
     - gay:        true | false  (¿es un sitio gay friendly?)
     - irish:      true | false  (¿es un pub de estilo irlandés?)
     - liveMusic:  true | false  (¿suele haber música en directo?)
   Verifica bien estos datos antes de publicarlos — son ejemplos de partida.

   - image: OPCIONAL. Foto del local para la tarjeta. Usa el enlace DIRECTO
            de imgur (https://i.imgur.com/XXXXX.jpeg), igual que en el Foto
            Explorer — no el enlace de la página normal de imgur.com.
            Si lo dejas vacío, la tarjeta se muestra igual, solo que sin foto.
   -------------------------------------------------------------------------- */

const SALIR_ITEMS = [
  {
    name: "Modus Vivendi",
    music: "celta",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/3IMl92K.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Modus+Vivendi+Santiago+de+Compostela",
    description: {
      es: "Uno de los pubs con más solera de Santiago, ambiente de música celta y folk en un antiguo pajar de piedra.",
      en: "One of Santiago's most iconic pubs, Celtic and folk music vibe inside an old stone hay barn."
    }
  },
,
  {
    name: "Casa das Crechas",
    music: "celta",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/sj1mq2W.jpeg",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+das+Crechas+Santiago+de+Compostela",
    description: {
      es: "El bar de referencia en Santiago para música folk e irlandesa en directo. Sesiones espontáneas de gaita y violín casi cualquier noche, cerca de Praza de Praterías.",
      en: "Santiago's go-to spot for live folk and Irish music. Spontaneous bagpipe and fiddle sessions happen most nights, near Praza de Praterías."
    }
  },
  {
    name: "Pub Atlántico",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/aXBlMvN.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Atl%C3%A1ntico+Santiago+de+Compostela",
    description: {
      es: "Favorito entre estudiantes, con buena selección de cervezas y cócteles y ambiente animado.",
      en: "A student favorite, with a good selection of beers and cocktails and a lively atmosphere."
    }
  },
  {
    name: "A Gramola",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/mz8NuOJ.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Gramola+Santiago+de+Compostela",
    description: {
      es: "Bar de temática retro con buen rollo nostálgico, cerca de Praza de Cervantes.",
      en: "A retro-themed bar with a great nostalgic vibe, near Praza de Cervantes."
    }
  },
  {
    name: "A Novena Porta",
    music: "moderna",
    tapa: true,
    gay: false,
    image: "https://i.imgur.com/m9YtUy9.jpeg",
    irish: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Novena+Porta+Cardeal+Pay%C3%A1+Santiago+de+Compostela",
    description: {
      es: "Pub de estilo irlandés en Cardeal Payá, con TV para deporte, buena selección de cervezas de importación y tapa sencilla (perritos calientes) con la consumición.",
      en: "An Irish-style pub on Cardeal Payá, with sports TVs, a good selection of imported beers, and a simple tapa (hot dogs) with your drink."
    }
  },
  {
    name: "Pub Momo",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/HAMWUG4.jpeg",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Momo+Santiago+de+Compostela",
    description: {
      es: "Uno de los pubs más emblemáticos de Santiago, abierto desde 1984, inspirado en la novela \"Momo\". Cuatro ambientes distintos y una preciosa terraza-jardín en verano, frente al Mercado de Abastos.",
      en: "One of Santiago's most iconic pubs, open since 1984 and inspired by the novel \"Momo.\" Four distinct areas and a lovely garden terrace in summer, across from the Mercado de Abastos."
    }
  },
  {
    name: "Way Club",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/CskOuQw.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Way+Club+R%C3%BAa+Nova+13+Santiago+de+Compostela",
    description: {
      es: "Discoteca universitaria en pleno casco histórico, en la Rúa Nova. Dos plantas, iluminación integrada en la estructura del local y ambiente muy joven.",
      en: "A university nightclub right in the old town, on Rúa Nova. Two floors, lighting built into the structure of the venue, and a very young crowd."
    }
  },
  {
    name: "Gabanna",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/GBS5Gfb.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gabanna+Discoteca+R%C3%BAa+da+Rep%C3%BAblica+Arxentina+Santiago+de+Compostela",
    description: {
      es: "Discoteca de referencia para universitarios, sobre todo música urbana. Entrada gratuita, en la zona de República de Arxentina.",
      en: "A go-to nightclub for university students, mostly urban music. Free entry, in the República de Arxentina area."
    }
  },
  {
    name: "Maycar",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/1rLvTmw.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Discoteca+Maycar+R%C3%BAa+do+Doutor+Teixeiro+Santiago+de+Compostela",
    description: {
      es: "Discoteca mítica de Santiago abierta desde 1969, con identidad muy marcada: rock, reggae, metal y música de los 90. Atrae a un público algo mayor que otras discotecas.",
      en: "An iconic Santiago nightclub open since 1969, with a strong identity: rock, reggae, metal and 90s music. Attracts a slightly older crowd than other clubs."
    }
  },
  {
    name: "Chocolate",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/FlFTNMo.jpeg",
    liveMusic: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Chocolate+Santiago+de+Compostela",
    description: {
      es: "Pub cerca del Mercado de Abastos, acogedor y decorado de forma moderna. Los jueves suele haber conciertos en directo.",
      en: "A cozy, modern-decorated pub near the Mercado de Abastos. Thursdays usually feature live concerts."
    }
  },
  {
    name: "La Quintana Pub",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/ng316dy.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Quintana+Pub+Praza+da+Quintana+Santiago+de+Compostela",
    description: {
      es: "Justo frente a la Catedral, en la Praza da Quintana. Tiene la terraza más grande de la ciudad, con vistas impresionantes. Ambiente moderno y juvenil.",
      en: "Right in front of the Cathedral, on Praza da Quintana. Has the biggest terrace in the city, with striking views. A modern, youthful atmosphere."
    }
  },
  {
    name: "Albaroque",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/TIZvHp9.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Albaroque+R%C3%BAa+da+Acibecher%C3%ADa+12+Santiago+de+Compostela",
    description: {
      es: "Pub del casco histórico con música actual y ambiente de baile. Buen sitio para empezar la noche.",
      en: "An old-town pub with current music and a dance-floor vibe. A good place to start the night."
    }
  },
  {
    name: "Bar Marte",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/LBcRwmJ.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Marte+Avenida+Rodrigo+del+Padr%C3%B3n+Santiago+de+Compostela",
    description: {
      es: "Bar mítico en la Avenida de Rodrigo del Padrón, muy conocido por sus tapas de tortilla. Buena terraza para cenar tranquilo antes de salir.",
      en: "An iconic bar on Avenida de Rodrigo del Padrón, well known for its tortilla tapas. A nice terrace for a calm dinner before heading out."
    }
  },
  {
    name: "Café Casino",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/enagKOa.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Casino+Santiago+de+Compostela",
    description: {
      es: "Café histórico de finales del siglo XIX, con ambiente literario y tranquilo. Ideal si buscáis algo con menos ruido.",
      en: "A historic late-19th-century café with a calm, literary atmosphere. Ideal if you're after something quieter."
    }
  },
  {
    name: "O Filandón",
    music: "tranquila",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/3Y9xTvM.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Vinoteca+O+Filand%C3%B3n+R%C3%BAa+da+Acibecher%C3%ADa+Santiago+de+Compostela",
    description: {
      es: "Vinoteca de piedra en la esquina de Rúa da Acibechería con Rúa da Troia, con chimenea y carta de vinos muy amplia. Ambiente familiar y tranquilo.",
      en: "A stone wine bar on the corner of Rúa da Acibechería and Rúa da Troia, with a fireplace and a very extensive wine list. A cozy, calm atmosphere."
    }
  },
  {
    name: "O Bandullo do Lambón",
    music: "tranquila",
    tapa: true,
    gay: false,
    image: "https://i.imgur.com/Ggj9nnO.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Bandullo+do+Lamb%C3%B3n+R%C3%BAa+da+Ra%C3%AD%C3%B1a+Santiago+de+Compostela",
    description: {
      es: "Bar de cervezas artesanas gallegas e internacionales en la Rúa da Raíña, con tapa gratis (aceitunas, quesos) con cada bebida. Ambiente relajado.",
      en: "A Galician and international craft beer bar on Rúa da Raíña, with a free tapa (olives, cheese) with every drink. A relaxed vibe."
    }
  },
  {
    name: "Damajuana",
    music: "tranquila",
    tapa: true,
    gay: false,
    image: "https://i.imgur.com/cWFDkRH.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Damajuana+R%C3%BAa+da+Acibecher%C3%ADa+5+Santiago+de+Compostela",
    description: {
      es: "Mezcla de vida nocturna y gastronomía en la Rúa da Acibechería, con terraza y ambiente acogedor. Buenas tapas y raciones gallegas.",
      en: "A mix of nightlife and dining on Rúa da Acibechería, with a terrace and a cozy atmosphere. Good Galician tapas and shared plates."
    }
  },
  {
    name: "Tarasca",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/hZ5Sf0G.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tarasca+V%C3%ADa+Sacra+3+Santiago+de+Compostela",
    description: {
      es: "Música variada (de los 80 a la actualidad) y muy buen ambiente, con público diverso.",
      en: "Varied music (80s to today) and a great atmosphere, with a diverse crowd."
    }
  },
  {
    name: "O Curruncho",
    music: "moderna",
    tapa: false,
    gay: true,
    image: "https://i.imgur.com/RFJ2MWg.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Curruncho+R%C3%BAa+da+Algalia+de+Abaixo+Santiago+de+Compostela",
    description: {
      es: "Frente a Tarasca; cuando ambos se juntan por la noche se conoce como \"Tarruncho\". Ambiente LGTBI+ acogedor que atrae también a público diverso.",
      en: "Across from Tarasca; when both venues merge for the night it's known as \"Tarruncho.\" A welcoming LGBTQI+ vibe that also draws a diverse crowd."
    }
  },
  {
    name: "Bloom",
    music: "moderna",
    tapa: false,
    gay: true,
    image: "https://i.imgur.com/E115JHG.jpeg",
    mapsUrl: "https://www.google.es/maps/place/Bloom+(Santiago+de+Compostela)/@42.8821522,-8.5418256,17z",
    description: {
      es: "Club LGBT con espectáculos de drag, dos plantas con ambientes musicales distintos. Se anima especialmente a partir de la 1am.",
      en: "An LGBT club with drag shows, two floors with different musical vibes. Gets especially lively after 1am."
    }
  },
  {
    name: "TS - A Casa",
    music: "tranquila",
    tapa: false,
    gay: true,
    image: "https://i.imgur.com/UABvCVr.jpeg",
    mapsUrl: "https://www.google.es/maps/place/TS+-+A+Casa+(Santiago+de+Compostela)/@42.8817913,-8.5356725,17z",
    description: {
      es: "Bar vegetariano en el barrio de San Pedro (considerado el barrio gay friendly de la ciudad), ambiente colorido e inclusivo.",
      en: "A vegetarian bar in the San Pedro neighborhood (considered the city's gay-friendly area), colorful and inclusive atmosphere."
    }
  },
  {
    name: "A Medusa Pub",
    music: "tranquila",
    tapa: false,
    gay: true,
    image: "https://i.imgur.com/W5PkQW8.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Medusa+Pub+Praza+de+Salvador+Parga+Santiago+de+Compostela",
    description: {
      es: "Pub de ambiente bohemio y muy LGTBI+ friendly, con juegos de mesa, opciones veganas, y conciertos ocasionales en el sótano.",
      en: "A bohemian, very LGBTQ+-friendly pub, with board games, vegan options, and occasional gigs in the basement."
    }
  },
  {
    name: "Embora",
    music: "moderna",
    tapa: false,
    gay: false,
    liveMusic: true,
    image: "https://i.imgur.com/MvyIOdZ.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Embora+R%C3%BAa+de+Tras+San+Fiz+de+Solovio+Santiago+de+Compostela",
    description: {
      es: "Bar musical cerca del Mercado de Abastos, ambiente acogedor y decoración moderna, con música en directo algunos días. Público muy variado: estudiantes, vecinos y visitantes por igual.",
      en: "A music bar near the Mercado de Abastos, cozy and modern, with live music some days. A very mixed crowd of students, locals, and visitors alike."
    }
  },
  {
    name: "Xuntanza",
    music: "tranquila",
    tapa: true,
    gay: false,
    image: "https://i.imgur.com/29jlhpA.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cervexer%C3%ADa+Xuntanza+R%C3%BAa+de+Xelm%C3%ADrez+28+Santiago+de+Compostela",
    description: {
      es: "Cervecería artesanal en la Rúa de Xelmírez, muy cerca de la Catedral, desde 2013. Buena selección de cervezas gallegas, con tapa a elegir (tostas, arepas, panpizza...) incluida en cada consumición. Terraza agradable en la calle.",
      en: "A craft beer bar on Rúa de Xelmírez, very close to the Cathedral, open since 2013. A good selection of Galician craft beers, with a choice of tapa (tostas, arepas, mini pizza...) included with every drink. A pleasant street-side terrace."
    }
  },
  {
    name: "Garoa",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/Qjw5La7.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pub+Garoa+Avenida+de+Figueroa+3+Santiago+de+Compostela",
    description: {
      es: "Coctelería en una de las entradas al casco histórico. Especializado en \"la copa buena\": gin-tonics y mojitos muy bien valorados, con una de las bartenders más reconocidas de España tras la barra. Terraza amplia y agradable.",
      en: "A cocktail bar at one of the entrances to the old town. Known for serious drinks: highly rated gin & tonics and mojitos, with one of Spain\'s most recognized bartenders behind the bar. A spacious, pleasant terrace."
    }
  },
  {
    name: "Blaster",
    music: "moderna",
    tapa: false,
    gay: false,
    image: "https://i.imgur.com/T3IBFdl.jpeg",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Discoteca+Blaster+R%C3%BAa+da+Rep%C3%BAblica+Arxentina+6+Santiago+de+Compostela",
    description: {
      es: "Discoteca abierta hasta las 6 de la mañana, uno de los sitios más frecuentados cuando cierran los bares de la zona vieja. Música variada (EDM, hip hop, clásicos), pista de baile animada.",
      en: "A nightclub open until 6am, one of the most popular spots once the old town bars close. A mix of music (EDM, hip hop, classics), lively dance floor."
    }
  }
  // Añade más sitios copiando un bloque como los de arriba.
  // "mapsUrl" -> en Google Maps, busca el sitio, pulsa "Compartir" y copia el enlace aquí.
];


/* --------------------------------------------------------------------------
   5. DÓNDE COMER
   Cada sitio tiene:
     - category: "marisco" | "tradicional" | "tapas" | "cafeteria"  (define el icono)
     - mapsUrl:  enlace de Google Maps (botón "Compartir" > copiar enlace)
     - description: por qué lo recomiendas
   -------------------------------------------------------------------------- */

const COMER_ITEMS = [
  {
    name: "Bar La Tita",
    terrace: true,
    image: "https://i.imgur.com/3GDkjVE.jpeg",
    category: "tapas",
    breakfast: false,
    rating: 4.4,
    ratingApprox: true,
    price: 1,
    website: "https://latitacompostela.com",
    menuUrlEs: "https://qr.mi-nube.es/latita/carta",
    instagram: "https://www.instagram.com/latitacompostela/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+La+Tita+R%C3%BAa+Nova+Santiago+de+Compostela",
    description: {
      es: "Cl\u00e1sico de la R\u00faa Nova: con cada ca\u00f1a te ponen una tapa de tortilla poco hecha, sea la hora que sea. Suele llenarse, as\u00ed que llegad con hambre y paciencia.",
      en: "A R\u00faa Nova classic: every beer comes with a soft, barely-set tortilla tapa, no matter the time of day. It fills up fast, so come hungry and patient."
    }
  },
  {
    name: "A Taberna do Bispo",
    image: "https://i.imgur.com/tJOsMVM.jpeg",
    category: "tapas",
    breakfast: false,
    rating: 4.4,
    ratingApprox: true,
    price: 2,
    website: "https://atabernadobispo.es",
    instagram: "https://www.instagram.com/atabernadobispo/",
    menuUrlEs: "https://atabernadobispo.es/es-es/comamos",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Taberna+do+Bispo+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "En la R\u00faa do Franco, tapas gallegas con mucho marisco desde 2003. Ambiente animado y elegante a la vez.",
      en: "On R\u00faa do Franco, Galician tapas with a strong seafood focus, open since 2003. A lively yet elegant atmosphere."
    }
  },
  {
    name: "Mercado de Abastos \u2014 puestos de marisco",
    image: "https://i.imgur.com/CEyH1Ta.jpeg",
    category: "marisco",
    breakfast: false,
    rating: null,
    ratingApprox: false,
    price: 3,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mercado+de+Abastos+Santiago+de+Compostela",
    description: {
      es: "Compra el marisco en el mercado y te lo cocinan al momento en alguno de los puestos-restaurante. Experiencia muy local.",
      en: "Buy the seafood at the market and have it cooked on the spot at one of the stall-restaurants. A very local experience."
    }
  },
  {
    name: "O Dezaseis",
    image: "https://i.imgur.com/I6bR2TR.jpeg",
    category: "tradicional",
    breakfast: false,
    rating: 4.5,
    ratingApprox: false,
    price: 1,
    website: "https://dezaseis.com",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Dezaseis+R%C3%BAa+de+San+Pedro+16+Santiago+de+Compostela",
    description: {
      es: "Cl\u00e1sico de cocina tradicional gallega en la R\u00faa de San Pedro, con encanto de casa de comidas. Buena opci\u00f3n para el men\u00fa del d\u00eda.",
      en: "A traditional Galician cooking classic on R\u00faa de San Pedro, with the charm of an old-school eatery. A good choice for the daily set menu."
    }
  },
  {
    name: "O Sendeiro",
    image: "https://i.imgur.com/myKg5DD.jpeg",
    category: "altacocina",
    breakfast: false,
    rating: 4.8,
    ratingApprox: false,
    price: 4,
    website: "https://osendeiro.com",
    menuUrlEs: "https://osendeiro.com/carta-sendeiro/",
    menuUrlEn: "https://osendeiro.com/english-menu/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Sendeiro+Rua+Olvido+Santiago+de+Compostela",
    description: {
      es: "Cocina gallega moderna en el patio de piedra de una antigua curtidur\u00eda del siglo XIX. Men\u00fa degustaci\u00f3n muy cuidado, algo alejado del centro pero merece la pena.",
      en: "Modern Galician cuisine in the stone courtyard of a 19th-century former tannery. A carefully crafted tasting menu, a bit outside the center but worth the walk."
    }
  },
  {
    name: "Casa Marcelo",
    terrace: true,
    michelin: true,
    image: "https://i.imgur.com/SUKNquK.jpeg",
    category: "altacocina",
    breakfast: false,
    rating: 4.3,
    ratingApprox: true,
    price: 5,
    website: "https://casamarcelo.net/es",
    menuUrlEs: "https://casamarcelo.net/es/menu",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Marcelo+R%C3%BAa+das+Hortas+Santiago+de+Compostela",
    description: {
      es: "Una estrella Michelin, del chef Marcelo Tejedor. Men\u00fa degustaci\u00f3n sorpresa que mezcla cocina gallega con toques asi\u00e1ticos y latinoamericanos, con la cocina integrada en la sala. Reservar con tiempo.",
      en: "One Michelin star, by chef Marcelo Tejedor. A surprise tasting menu blending Galician cuisine with Asian and Latin American touches, with the kitchen built right into the dining room. Book ahead."
    }
  },
  {
    name: "O Curro da Parra",
    terrace: true,
    image: "https://i.imgur.com/CR5dB0F.jpeg",
    category: "tapas",
    breakfast: false,
    rating: 4.6,
    ratingApprox: false,
    price: 3,
    website: "https://www.ocurrodaparra.com",
    menuUrlEs: "https://www.ocurrodaparra.com/es/carta",
    menuUrlEn: "https://www.ocurrodaparra.com/en/carta",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Curro+da+Parra+Rua+Travesa+Santiago+de+Compostela",
    description: {
      es: "Cocina de mercado moderna pero con ra\u00edces gallegas, cerca del Mercado de Abastos. Terraza agradable arriba, tapeo abajo.",
      en: "Modern market cuisine with Galician roots, near the Mercado de Abastos. A pleasant terrace upstairs, tapas downstairs."
    }
  },
  {
    name: "A Tafona",
    michelin: true,
    image: "https://i.imgur.com/GyjpRo4.jpeg",
    category: "altacocina",
    breakfast: false,
    rating: 4.6,
    ratingApprox: true,
    price: 5,
    website: "https://www.luciafreitas.es/a-tafona",
    menuUrlEs: "https://www.luciafreitas.es/wp-content/uploads/2025/04/menu-tafona-espanol-2-2025-04-30-menu-tafona-espanol-2.pdf",
    instagram: "https://www.instagram.com/atafonarestaurante/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Tafona+by+Lucia+Freitas+Santiago+de+Compostela",
    description: {
      es: "Una estrella Michelin, de la chef Luc\u00eda Freitas. Cocina gallega con alma, producto de proximidad comprado a diario en el Mercado de Abastos. Solo men\u00fa degustaci\u00f3n.",
      en: "One Michelin star, by chef Luc\u00eda Freitas. Galician cuisine with soul, using local ingredients bought daily at the Mercado de Abastos. Tasting menu only."
    }
  },
  {
    name: "Mr. Chu",
    image: "https://i.imgur.com/4UybT93.jpeg",
    category: "altacocina",
    breakfast: false,
    rating: 4.3,
    ratingApprox: true,
    price: 3,
    website: "https://mrchu.es",
    instagram: "https://www.instagram.com/mrchusantiago/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mr+Chu+R%C3%BAa+das+Hortas+Santiago+de+Compostela",
    description: {
      es: "En la misma calle que Casa Marcelo (mismo grupo). Cocina de fusi\u00f3n asi\u00e1tica detr\u00e1s de una puerta discreta, ambiente informal y desenfadado.",
      en: "On the same street as Casa Marcelo (same group). Asian fusion cuisine behind a discreet door, with a casual, relaxed vibe."
    }
  },
  {
    name: "Ind\u00f3mito",
    michelin: true,
    image: "https://i.imgur.com/t3QWUyC.jpeg",
    category: "altacocina",
    breakfast: false,
    rating: 4.5,
    ratingApprox: true,
    price: 3,
    website: "https://indomitobistro.es",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Indomito+R%C3%BAa+do+Doutor+Teixeiro+Santiago+de+Compostela",
    description: {
      es: "Del chef Mart\u00edn V\u00e1zquez (ex Casa Marcelo). Carta corta y cambiante seg\u00fan temporada, cocina a la vista tras la barra, seleccionado por la Gu\u00eda Michelin.",
      en: "By chef Mart\u00edn V\u00e1zquez (ex Casa Marcelo). A short, seasonally rotating menu, open kitchen behind the bar, Michelin Guide selected."
    }
  },
  {
    name: "Abastos 2.0",
    image: "https://i.imgur.com/JxXrWA4.jpeg",
    category: "marisco",
    breakfast: false,
    rating: 4.5,
    ratingApprox: true,
    price: 3,
    instagram: "https://www.instagram.com/abastosdouspuntocero/",
    website: "https://www.abastosdouspuntocero.com/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Abastos+2.0+Mercado+de+Abastos+Santiago+de+Compostela",
    description: {
      es: "Dentro del propio Mercado de Abastos, ocupando varias casetas con una gran mesa compartida. Pescado y producto de temporada del propio mercado. Conviene reservar.",
      en: "Inside the Mercado de Abastos itself, occupying several stalls around one big shared table. Fish and seasonal produce straight from the market. Booking recommended."
    }
  },
  {
    name: "O Gato Negro",
    image: "https://i.imgur.com/9yHEUUf.jpeg",
    category: "marisco",
    breakfast: false,
    rating: 4.4,
    ratingApprox: false,
    price: 3,
    website: "https://ogatonegro.com",
    menuUrlEs: "https://ogatonegro.com/carta/#o-gato-negro",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+O+Gato+Negro+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "Taberna centenaria (desde 1922) en pleno casco hist\u00f3rico. Empanadas del d\u00eda, marisco y vino de Ribeiro, sin lujos y sin reservas: hay que apuntarse en lista.",
      en: "A century-old taberna (since 1922) right in the old town. Daily empanadas, seafood and Ribeiro wine, no frills and no reservations: you put your name on the waitlist."
    }
  },
  {
    name: "Petiscos do Cardeal",
    terrace: true,
    image: "https://i.imgur.com/eYJhkF2.jpeg",
    category: "tapas",
    breakfast: false,
    rating: 4.3,
    ratingApprox: true,
    price: 2,
    website: "https://petiscosdocardeal.es",
    menuUrlEs: "https://petiscosdocardeal.es/es-es/comemos",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Petiscos+do+Cardeal+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    description: {
      es: "En plena R\u00faa do Franco. Buena variedad de pinchos y tapas para tapeo r\u00e1pido en barra, con terraza. Precios razonables aunque muy orientado al turismo.",
      en: "Right on R\u00faa do Franco. A good variety of pinchos and tapas for a quick bar-side bite, with a terrace. Reasonable prices, though quite tourist-oriented."
    }
  },
  {
    name: "O Cabalo Branco",
    terrace: true,
    image: "https://i.imgur.com/laUWSh4.jpeg",
    category: "tapas",
    breakfast: false,
    rating: 4.3,
    ratingApprox: true,
    price: 2,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=O+Cabalo+Branco+Praza+da+Pescader%C3%ADa+Vella+Santiago+de+Compostela",
    description: {
      es: "En la Praza da Pescader\u00eda Vella. Buenas tapas y raciones generosas, con una plaza estupenda para sentarse fuera en verano.",
      en: "On Praza da Pescader\u00eda Vella. Good tapas and generous portions, with a lovely square to sit outside in summer."
    }
  },
  {
    name: "La Casa de las Tortillas (Armando Blanco)",
    image: "https://i.imgur.com/nJpvF9J.jpeg",
    category: "tradicional",
    breakfast: false,
    rating: 4,
    ratingApprox: true,
    price: 2,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Armando+Blanco+Traves%C3%ADa+de+Cacheiras+56+Teo",
    description: {
      es: "Ojo, está a unos 10 km de Santiago, en Cacheiras (Teo) — hace falta coche. Es todo un mito gallego de la tortilla, con varias variedades (jamón, chorizo, atún, cebolla...), muy jugosa y a precio muy asequible. Casa de labranza sencilla, sin lujos.",
      en: "Heads up: it's about 10 km from Santiago, in Cacheiras (Teo) — you'll need a car. A true Galician tortilla legend, with several varieties (ham, chorizo, tuna, onion...), very juicy and very affordable. A simple, no-frills old farmhouse."
    }
  },
  {
    name: "The Greenhouse",
    image: "https://i.imgur.com/ITARCKr.jpeg",
    category: "vegano",
    breakfast: false,
    rating: 4.6,
    ratingApprox: true,
    price: 1,
    website: "https://www.facebook.com/ecoflex.online",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Greenhouse+Santiago+de+Compostela+vegano",
    description: {
      es: "Restaurante vegano peque\u00f1o y acogedor. Curry, noodles japonesas y unos brownies muy recomendados, precios muy asequibles.",
      en: "A small, cozy vegan restaurant. Curry, Japanese noodles and highly recommended brownies, very affordable prices."
    }
  },
  {
    name: "A Corre Vexeta",
    image: "https://i.imgur.com/64OQyvf.jpeg",
    category: "vegano",
    breakfast: false,
    rating: 4.9,
    ratingApprox: false,
    price: 2,
    instagram: "https://www.instagram.com/acorrevexeta/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Corre+Vexeta+R%C3%BAa+das+Rodas+Santiago+de+Compostela",
    description: {
      es: "Vegetariano y vegano, una de las mejores valoraciones de Santiago en general (no solo entre vegetarianos). Local peque\u00f1o, colorido y muy acogedor.",
      en: "Vegetarian and vegan, one of the best-rated spots in Santiago overall (not just among vegetarians). A small, colorful and very cozy place."
    }
  },
  {
    name: "A Horta d'Obradoiro",
    terrace: true,
    michelin: true,
    image: "https://i.imgur.com/q1VMcI2.jpeg",
    category: "tradicional",
    breakfast: false,
    rating: 4.5,
    ratingApprox: true,
    price: 3,
    website: "https://ahortadoobradoiro.com",
    menuUrlEs: "https://ahortadoobradoiro.com/menu/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Horta+d%27Obradoiro+R%C3%BAa+das+Hortas+Santiago+de+Compostela",
    description: {
      es: "Bib Gourmand de la Gu\u00eda Michelin, en un edificio del siglo XVII con jard\u00edn interior. Cocina de producto sincera, terraza preciosa con vistas al Obradoiro.",
      en: "A Michelin Guide Bib Gourmand, in a 17th-century building with an interior garden. Honest, product-driven cooking, with a lovely terrace overlooking the Obradoiro."
    }
  },
  {
    name: "Pu\u00f1al",
    image: "https://i.imgur.com/KYriYj4.jpeg",
    category: "tradicional",
    breakfast: false,
    rating: 4.3,
    ratingApprox: false,
    price: 1,
    instagram: "https://www.instagram.com/barpunal/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Restaurante+Punal+Santiago+de+Compostela",
    description: {
      es: "Comida casera cerca del Hostal dos Reis Cat\u00f3licos, con men\u00fa del d\u00eda muy econ\u00f3mico (9-20\u20ac). Callos, tortilla y tarta de Santiago muy recomendados.",
      en: "Home-style cooking near the Hostal dos Reis Cat\u00f3licos, with a very affordable set menu (\u20ac9-20). Highly recommended tripe stew, tortilla and tarta de Santiago."
    }
  },
  {
    name: "Adelia",
    image: "https://i.imgur.com/xIOQRaH.jpeg",
    category: "cafeteria",
    breakfast: true,
    rating: 4.8,
    ratingApprox: false,
    price: 1,
    website: "https://www.adeliacafe.es",
    instagram: "https://www.instagram.com/grupoadelia/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ad%C3%A8lia+Caf%C3%A9+Praza+de+San+Miguel+dos+Agros+Santiago+de+Compostela",
    description: {
      es: "Cafeter\u00eda de especialidad en la Praza de San Miguel dos Agros, junto a San Marti\u00f1o Pinario. Tostadas y tartas caseras muy buenas, ambiente tranquilo y pet friendly.",
      en: "A specialty coffee shop on Praza de San Miguel dos Agros, next to San Marti\u00f1o Pinario. Great toasts and homemade cakes, calm atmosphere, and pet friendly."
    }
  },
  {
    name: "Caf\u00e9 Mori",
    image: "https://i.imgur.com/J1SCyaN.jpeg",
    category: "cafeteria",
    breakfast: true,
    rating: 4.7,
    ratingApprox: false,
    price: 2,
    instagram: "https://www.instagram.com/ilovemoricoffee/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Mori+Rua+da+Troia+Santiago+de+Compostela",
    description: {
      es: "Frente a la Igrexa de Santa Mar\u00eda Salom\u00e9, en una puerta que a\u00fan conserva el antiguo cartel del Rhin. Caf\u00e9 de especialidad y ambiente tranquilo.",
      en: "Facing the Igrexa de Santa Mar\u00eda Salom\u00e9, in a doorway that still keeps the old \"Rhin\" sign. Specialty coffee and a calm atmosphere."
    }
  },
  {
    name: "Tertulia",
    image: "https://i.imgur.com/jNaT1Yf.jpeg",
    category: "cafeteria",
    breakfast: true,
    rating: 4.3,
    ratingApprox: true,
    price: 1,
    instagram: "https://www.instagram.com/cafetertuliasc/",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+Tertulia+Santiago+de+Compostela",
    description: {
      es: "Un cl\u00e1sico para desayunar con calma y leer un libro. Ambiente sencillo, ideal para empezar el d\u00eda sin prisas.",
      en: "A classic spot for a relaxed breakfast and a good book. Simple atmosphere, ideal for starting the day unhurried."
    }
  },
  {
    name: "Café Costa Vella (O Xardín das Delicias)",
    terrace: true,
    image: "https://i.imgur.com/G8fSy9T.jpeg",
    category: "cafeteria",
    breakfast: true,
    rating: 4.7,
    ratingApprox: true,
    price: 2,
    website: "https://www.costavella.com",
    menuUrlEs: "https://www.costavella.com/carta-digital/",
    menuUrlEn: "https://www.costavella.com/en/carta-digital",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Costa+Vella+Porta+da+Pena+Santiago+de+Compostela",
    description: {
      es: "El jardín interior del Hotel Costa Vella (Porta da Pena, 17), hoy a cargo de la chef Lucía Freitas (A Tafona) bajo el nombre O Xardín das Delicias. Manzanos, limoneros y una fuente de piedra entre las mesas. Ideal para desayunar o para una pausa con té a media tarde.",
      en: "The interior garden of the Hotel Costa Vella (Porta da Pena, 17), now run by chef Lucía Freitas (A Tafona) under the name O Xardín das Delicias. Apple trees, lemon trees and a stone fountain among the tables. Ideal for breakfast or a mid-afternoon tea break."
    }
  }
  // Añade más sitios copiando un bloque como los de arriba.
];


/* --------------------------------------------------------------------------
   6. FIESTAS DEL APÓSTOL 2026 — programa oficial (22-31 de julio)
   Datos del programa oficial
   del Concello de Santiago. Si algo cambia de última hora, revisa
   santiagoturismo.com para confirmar horarios.
   -------------------------------------------------------------------------- */

const FIESTAS_ITEMS = [
  {
    isoDate: "2026-07-22",
    date: { es: "Miércoles 22 de julio", en: "Wednesday 22 July" },
    title: { es: "Pregón de apertura", en: "Opening ceremony" },
    description: {
      es: "21:30 h, pregón inaugural desde el balcón del Pazo de Raxoi (Praza do Obradoiro). A continuación, concierto de la Real Filharmonía de Galicia en la Praza da Quintana.",
      en: "9:30 pm, opening address from the balcony of the Pazo de Raxoi (Praza do Obradoiro), followed by a concert by the Real Filharmonía de Galicia in Praza da Quintana."
    }
  },
  {
    isoDate: "2026-07-23",
    date: { es: "Jueves 23 de julio", en: "Thursday 23 July" },
    title: { es: "Alborada y Julian Marley", en: "Alborada and Julian Marley" },
    description: {
      es: "Alborada matinal por el barrio a las 10:00 h, actividades infantiles en el Parque de Galeras desde las 17:30 h, concierto de Julian Marley a las 21:00 h en la Quintana y verbena con la Orquesta Finisterre en la Alameda a las 22:00 h.",
      en: "Morning alborada parade at 10 am, kids' activities in Parque de Galeras from 5:30 pm, a Julian Marley concert at 9 pm in Praza da Quintana, and a verbena with Orquesta Finisterre in the Alameda at 10 pm."
    }
  },
  {
    isoDate: "2026-07-24",
    date: { es: "Viernes 24 de julio", en: "Friday 24 July" },
    title: { es: "Fuegos del Apóstol", en: "Fireworks of the Apóstol" },
    description: {
      es: "Uno de los días grandes: desfile de Cabezudos e Xigantes al mediodía, conciertos de Belém Tajes y Lila Downs en la Quintana a las 21:00 h, y a las 23:30 h el gran espectáculo pirotécnico lanzado desde la Alameda, la Cidade da Cultura y el Parque Carlomagno. Después, videomapping sobre la fachada del Pazo de Raxoi hasta las 2:00 h.",
      en: "One of the big days: the Cabezudos e Xigantes parade at midday, concerts by Belém Tajes and Lila Downs in Praza da Quintana at 9 pm, and at 11:30 pm the main fireworks display launched from the Alameda, the Cidade da Cultura and Parque Carlomagno. Videomapping on the Pazo de Raxoi façade follows until 2 am."
    }
  },
  {
    isoDate: "2026-07-25",
    date: { es: "Sábado 25 de julio", en: "Saturday 25 July" },
    title: { es: "Día de Galicia y Festival do Folclore", en: "Galicia Day and Folk Festival" },
    description: {
      es: "Festividad del Apóstol y Día Nacional de Galicia. Comparsa de Cabezudos por el casco histórico a las 11:30 h y Jornada de Folclore Gallego desde las 21:00 h en la Quintana, con grupos tradicionales locales.",
      en: "Feast of the Apóstol and Galicia's national day. Cabezudos parade through the old town at 11:30 am, and a Galician Folk Festival from 9 pm in Praza da Quintana with local traditional groups."
    }
  },
  {
    isoDate: "2026-07-26",
    date: { es: "Domingo 26 de julio", en: "Sunday 26 July" },
    title: { es: "Día do Traxe (traje tradicional)", en: "Día do Traxe (traditional dress day)" },
    description: {
      es: "Jornada dedicada al folclore y al traje tradicional gallego: desfiles por el casco histórico desde las 11:45 h, y música tradicional todo el día en distintas plazas, con Felisa Segade y Budiño cerrando la noche en la Quintana.",
      en: "A day devoted to folklore and traditional Galician dress: parades through the old town from 11:45 am, and traditional music all day across several squares, with Felisa Segade and Budiño closing the night in Praza da Quintana."
    }
  },
  {
    isoDate: "2026-07-27",
    date: { es: "Lunes 27 de julio", en: "Monday 27 July" },
    title: { es: "Arranca Compostela Cinema", en: "Compostela Cinema begins" },
    description: {
      es: "Comienza el ciclo de cine al aire libre por distintos barrios de la ciudad. Por la noche, concierto de La Perra Blanco en la Quintana desde las 21:00 h.",
      en: "The open-air film series across the city's neighborhoods kicks off. In the evening, a concert by La Perra Blanco in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-28",
    date: { es: "Martes 28 de julio", en: "Tuesday 28 July" },
    title: { es: "Ajedrez al aire libre y Festa Xitana", en: "Outdoor chess and Festa Xitana" },
    description: {
      es: "Ajedrez al aire libre en la Alameda de 17:00 a 20:00 h, cine al aire libre desde las 20:00 h, y por la noche Festa Xitana Galega en la Quintana desde las 21:00 h.",
      en: "Outdoor chess in the Alameda from 5 to 8 pm, open-air cinema from 8 pm, and a Festa Xitana Galega (Galician Roma festival) in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-29",
    date: { es: "Miércoles 29 de julio", en: "Wednesday 29 July" },
    title: { es: "Música emergente en la Quintana", en: "Emerging music in Praza da Quintana" },
    description: {
      es: "Alborada matinal, ajedrez al aire libre en la Alameda, y por la noche uno de los conciertos más esperados: Bewis de la Rosa y Eris Mackenzie en la Quintana desde las 21:00 h.",
      en: "Morning alborada, outdoor chess in the Alameda, and in the evening one of the most anticipated concerts: Bewis de la Rosa and Eris Mackenzie in Praza da Quintana from 9 pm."
    }
  },
  {
    isoDate: "2026-07-30",
    date: { es: "Jueves 30 de julio", en: "Thursday 30 July" },
    title: { es: "Concierto de Shego", en: "Shego concert" },
    description: {
      es: "Cine al aire libre desde las 20:00 h y concierto de Shego en la Quintana a partir de las 21:00 h, seguido de verbena con la Orquestra Costa Dorada en la Alameda.",
      en: "Open-air cinema from 8 pm and a Shego concert in Praza da Quintana from 9 pm, followed by a verbena with Orquestra Costa Dorada in the Alameda."
    }
  },
  {
    isoDate: "2026-07-31",
    isClosingNight: true,
    date: { es: "Viernes 31 de julio · cierre de fiestas", en: "Friday 31 July · closing night" },
    title: { es: "Cierre de fiestas: The Rapants y fuegos finales", en: "Closing night: The Rapants and final fireworks" },
    description: {
      es: "Último día de las fiestas. Cantos de Taberna por San Lázaro y rúa de San Pedro desde las 21:00 h, concierto de cierre de The Rapants en la Quintana a las 22:00 h, verbena con la Orquestra Suavecito en la Alameda, y a las 23:30 h el espectáculo pirotécnico de fin de fiestas, lanzado desde la Alameda. Buenos puntos para verlos: el Paseo da Ferradura, en la propia Alameda, o la Praza do Obradoiro.",
      en: "The last day of the festivities. Cantos de Taberna in San Lázaro and rúa de San Pedro from 9 pm, a closing concert by The Rapants in Praza da Quintana at 10 pm, a verbena with Orquestra Suavecito in the Alameda, and the closing fireworks display at 11:30 pm, launched from the Alameda. Good spots to watch from: the Paseo da Ferradura, right in the Alameda, or Praza do Obradoiro."
    }
  },

  /* ---- Atardecer no Gaiás — ciclo de conciertos gratuitos en la Cidade
     da Cultura (jueves y viernes, 2 de julio - 14 de agosto de 2026,
     21:00 h, entrada libre). Solo incluimos aquí las fechas que caen
     dentro de este rango de fechas; el ciclo sigue después en agosto,
     consulta cidadedacultura.gal si os quedáis más días. ---- */
  {
    isoDate: "2026-07-23",
    isGaias: true,
    date: { es: "Jueves 23 de julio", en: "Thursday 23 July" },
    title: { es: "Atardecer no Gaiás: Bala", en: "Atardecer no Gaiás: Bala" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Bala, dúo de stoner rock gallego, dentro del ciclo gratuito de conciertos al atardecer en el Gaiás.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Bala, a Galician stoner rock duo, part of the free sunset concert series at the Gaiás."
    }
  },
  {
    isoDate: "2026-07-30",
    isGaias: true,
    date: { es: "Jueves 30 de julio", en: "Thursday 30 July" },
    title: { es: "Atardecer no Gaiás: Sheila Patricia", en: "Atardecer no Gaiás: Sheila Patricia" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Sheila Patricia dentro del ciclo gratuito de conciertos al atardecer en el Gaiás.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Sheila Patricia, part of the free sunset concert series at the Gaiás."
    }
  },
  {
    isoDate: "2026-07-31",
    isGaias: true,
    date: { es: "Viernes 31 de julio · cierre de fiestas", en: "Friday 31 July · closing night" },
    title: { es: "Atardecer no Gaiás: Lisdexia", en: "Atardecer no Gaiás: Lisdexia" },
    description: {
      es: "21:00 h, Praza Central da Cidade da Cultura, entrada libre. Concierto de Lisdexia, la misma noche del cierre de las fiestas — para quien prefiera un plan más tranquilo para cerrar la noche.",
      en: "9 pm, Praza Central at the Cidade da Cultura, free entry. A concert by Lisdexia, the same night as the festival closing — a calmer option for anyone who'd rather take it easy."
    }
  }
  // Nota: no incluimos fechas después del 5 de agosto (límite pedido).
  // El siguiente Atardecer no Gaiás cae el 6 de agosto, ya
  // fuera de esa ventana — si en el futuro queréis ampliar el rango,
  // el ciclo sigue hasta el 14 de agosto (datos en cidadedacultura.gal).
];


/* --------------------------------------------------------------------------
   7. PASAPORTE PARÍS-DAKAR
   La ruta tradicional de bares de Santiago: empieza en la cafetería O París
   (Porta Faxeira / Rúa dos Bautizados) y termina en el bar Dakar (Rúa do
   Franco), pasando por la Rúa do Franco y la Rúa da Raíña. La costumbre es
   tomar una cunca de vino Ribeiro en cada parada.

   Ya tenemos puestas la parada de salida y la de meta (son fijas, forman
   parte de la tradición). Rellena las paradas intermedias con los bares
   que recomendéis vosotros — no hace falta que sean muchas, con 4-6 basta.
   -------------------------------------------------------------------------- */

const PARIS_DAKAR_ITEMS = [
  {
    name: "Café Bar Paris",
    isStart: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Caf%C3%A9+Bar+Paris+R%C3%BAa+dos+Bautizados+Santiago+de+Compostela",
    tip: {
      es: "El punto de salida histórico de la ruta, en Rúa dos Bautizados. Negocio familiar con casi 30 años detrás de la barra. Empezad aquí con una primera cunca.",
      en: "The route's historic starting point, on Rúa dos Bautizados. A family-run spot with nearly 30 years behind the bar. Start here with your first cunca."
    }
  },
  {
    name: "El Patio",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Patio+R%C3%BAa+do+Franco+33+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 33. Sustituye al antiguo \"Porto\", hoy cerrado. Gastrobar de tapeo, cañita y vinos — con cada consumición ponen una tapa dulce o salada.",
      en: "Rúa do Franco, 33. Replaces the old \"Porto\" stop, now closed. A tapas-and-wine gastro bar — every drink comes with a sweet or savory tapa."
    }
  },
  {
    name: "Bar Restaurante Orella",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Restaurante+Orella+R%C3%BAa+da+Ra%C3%ADña+21+Santiago+de+Compostela",
    tip: {
      es: "En la Rúa da Raíña. Buen marisco a la plancha a precio justo — sencillo y muy recomendable.",
      en: "On Rúa da Raíña. Good grilled seafood at a fair price — simple and well worth it."
    }
  },
  {
    name: "La Jefatura do Franco",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Jefatura+do+Franco+R%C3%BAa+do+Franco+56+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 56. En la ruta original esta parada era el bar Nova Galicia, y después pasó a ser un 100 Montaditos; hoy, tras su cierre, es La Jefatura do Franco, bar de vinos, tapas y raciones abierto de 8:00 a 00:00 todo el año.",
      en: "Rúa do Franco, 56. On the original route this stop was the bar Nova Galicia, and later became a 100 Montaditos; now, after its closure, it's La Jefatura do Franco, a wine, tapas and portions bar open from 8 am to midnight all year round."
    }
  },
  {
    name: "Nómade",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=N%C3%B3made+bar+de+vi%C3%B1os+R%C3%BAa+do+Franco+48+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 48. En la ruta original esta parada era el bar Carpe Diem; hoy en ese mismo local hay un bar de vinos y tapas llamado Nómade, abierto desde 2023.",
      en: "Rúa do Franco, 48. On the original route this stop was the bar Carpe Diem; that same spot is now a wine and tapas bar called Nómade, open since 2023."
    }
  },
  {
    name: "O'46",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+O+46+R%C3%BAa+do+Franco+46+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 46. Sustituye al antiguo \"Catedral\", hoy cerrado. Bar familiar y pequeño, vino de barril servido en cunca de cerámica, muy buen pulpo á feira.",
      en: "Rúa do Franco, 46. Replaces the old \"Catedral\" stop, now closed. A small, family-run bar, barrel wine served in a ceramic cunca, very good pulpo á feira."
    }
  },
  {
    name: "El Submarino",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Submarino+bar+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "Producto fresco de mercado en plena Rúa do Franco, formato de barra pequeña.",
      en: "Fresh market produce right on Rúa do Franco, small bar-style spot."
    }
  },
  {
    name: "Mesón 42",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mes%C3%B3n+42+R%C3%BAa+do+Franco+42+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 42. También conocido como O'42. Buenas raciones para compartir, sobre todo si vais en grupo.",
      en: "Rúa do Franco, 42. Also known as O'42. Good sharing plates, especially if you're in a group."
    }
  },
  {
    name: "Bar Trafalgar",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Trafalgar+R%C3%BAa+da+Ra%C3%ADña+Santiago+de+Compostela",
    tip: {
      es: "Uno de los clásicos de la Rúa da Raíña, famoso por sus \"tigres rabiosos\" (mejillones picantes) y la tapa gratis con cada bebida.",
      en: "One of the Rúa da Raíña classics, famous for its spicy stuffed mussels (\"tigres rabiosos\") and a free tapa with every drink."
    }
  },
  {
    name: "A Barrola",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Barrola+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "Marisquería de las de mantel, un punto más elegante de la ruta — ideal si os apetece darse un capricho con marisco.",
      en: "A proper white-tablecloth seafood restaurant, a slightly more upscale point on the route — great if you fancy splurging on shellfish."
    }
  },
  {
    name: "San Jaime",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+San+Jaime+R%C3%BAa+da+Ra%C3%ADña+4+Santiago+de+Compostela",
    tip: {
      es: "En la Praza de Fonseca, con terraza a la plaza. Muy frecuentado por gente local.",
      en: "On Praza de Fonseca, with terrace seating on the square. Popular with locals."
    }
  },
  {
    name: "Orense",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar+Orense+R%C3%BAa+da+Ra%C3%ADña+Santiago+de+Compostela",
    tip: {
      es: "Bar de barrica en la Rúa da Raíña, vino de la casa servido directo del tonel. Ambiente muy local, nada turístico.",
      en: "A barrel-wine bar on Rúa da Raíña, house wine served straight from the cask. Very local vibe, not touristy at all."
    }
  },
  {
    name: "O Gato Negro",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Taberna+O+Gato+Negro+R%C3%BAa+do+Franco+40+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco, 40. Más de 100 años de historia. Está escondido en un callejón — buscad el gato negro en la fachada y la puerta verde. Suele llenarse rápido.",
      en: "Rúa do Franco, 40. Over 100 years of history. It's tucked down a small alley — look for the black cat on the façade and the green door. Fills up fast."
    }
  },
  {
    name: "El Cayado",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Asador+El+Cayado+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "Hoy conocido como Asador El Cayado. Sigue siendo una parada clásica para el pulpo á feira en la ruta.",
      en: "Now known as Asador El Cayado. Still a classic stop for pulpo á feira on the route."
    }
  },
  {
    name: "Restaurante Dakar",
    isFinish: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+Dakar+R%C3%BAa+do+Franco+13+Santiago+de+Compostela",
    tip: {
      es: "La meta tradicional de la ruta, en Rúa do Franco 13, con terraza a la calle. Si llegáis hasta aquí, ¡ya sois parte de la historia del París-Dakar!",
      en: "The route's traditional finish line, at Rúa do Franco 13, with street-side terrace seating. If you make it here, you're officially part of Paris-Dakar history!"
    }
  }
,

  // ---- Paradas opcionales (fuera de la ruta clásica Franco/Raíña) ----
  {
    name: "A Taberna do Bispo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=A+Taberna+do+Bispo+R%C3%BAa+do+Franco+Santiago+de+Compostela",
    tip: {
      es: "Rúa do Franco 37. Tapas servidas en formato barra: te sientas y vas señalando lo que te apetece de lo que hay expuesto.",
      en: "Rúa do Franco 37. Bar-style tapas: sit down and point at whatever looks good from what's on display."
    }
  },
  {
    name: "Casa de Xantar O Dezaseis",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+de+Xantar+O+Dezaseis+R%C3%BAa+de+San+Pedro+16+Santiago+de+Compostela",
    tip: {
      es: "Rúa de San Pedro 16, un poco fuera del núcleo Franco/Raíña. Ambiente acogedor y muy querido por los vecinos del barrio.",
      en: "Rúa de San Pedro 16, a bit outside the core Franco/Raíña stretch. Cozy atmosphere, well loved by neighborhood regulars."
    }
  },
  {
    name: "Mesón do Pulpo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mes%C3%B3n+do+Pulpo+Santiago+de+Compostela",
    tip: {
      es: "Algo alejado del centro (Rúa de Vista Alegre), conocido sobre todo por su pulpo. Más plan tranquilo de sobremesa que parada rápida.",
      en: "A bit outside the center (Rúa de Vista Alegre), known especially for its octopus. More of a relaxed sit-down stop than a quick one."
    }
  },
  {
    name: "Casa Camilo",
    isOptional: true,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Camilo+R%C3%BAa+da+Ra%C3%AD%C3%B1a+24+Santiago+de+Compostela",
    tip: {
      es: "Rúa da Raíña 24. Restaurante de marisco con ambiente animado, buena opción si queréis alargar la noche con algo más de comida.",
      en: "Rúa da Raíña 24. A lively seafood restaurant, a good option if you want to stretch the night out with a proper sit-down bite."
    }
  }
];


/* --------------------------------------------------------------------------
   8. DATOS DE INTERÉS
   Información práctica suelta: teléfonos, transportes, y cualquier otro
   dato útil para los invitados. Cada bloque tiene:
     - icon: "taxi" | "bus" | "phoneEmergency"  (o cualquier otro que añadas
       a js/icons.js más adelante)
     - title / description: como siempre, versión es/en
   -------------------------------------------------------------------------- */

const DATOS_INTERES_ITEMS = [
  {
    icon: "taxi",
    title: { es: "Radio Taxi Compostela", en: "Radio Taxi Compostela" },
    description: {
      es: "981 56 92 92 — servicio 24 horas todos los días del año. También se puede pedir con la app Taxiclick. Otra opción es Taxi Santiago: 619 492 393.",
      en: "981 56 92 92 — 24-hour service, every day of the year. You can also book through the Taxiclick app. Another option is Taxi Santiago: 619 492 393."
    }
  },
  {
    icon: "bus",
    title: { es: "Autobús al aeropuerto (línea 6A)", en: "Airport bus (line 6A)" },
    description: {
      es: "El autobús urbano línea 6A conecta el Aeropuerto de Santiago (Lavacolla) con el centro (Praza de Galicia, Rúa da Rosa, Estación Intermodal). Sale cada 20-30 minutos, aproximadamente de 7:00 a 23:00. El billete cuesta 1€ y se paga en efectivo al subir (no aceptan billetes de más de 20€). El trayecto dura unos 25-30 minutos.",
      en: "Urban bus line 6A connects Santiago Airport (Lavacolla) with the city center (Praza de Galicia, Rúa da Rosa, Estación Intermodal). It runs every 20-30 minutes, roughly from 7:00 am to 11:00 pm. The fare is €1, paid in cash on board (no bills over €20 accepted). The ride takes about 25-30 minutes."
    }
  },
  {
    icon: "phoneEmergency",
    title: { es: "Emergencias", en: "Emergencies" },
    description: {
      es: "112 — número de emergencias gratuito válido en toda España (ambulancia, policía, bomberos). Se puede llamar desde cualquier teléfono, incluso sin cobertura o saldo, y atienden en varios idiomas.",
      en: "112 — free emergency number valid throughout Spain (ambulance, police, fire). It can be called from any phone, even without signal or credit, and operators are available in multiple languages."
    }
  }
  // Añade más datos prácticos copiando un bloque como los de arriba.
];
