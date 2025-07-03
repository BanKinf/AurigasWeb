const STAVersion = '1.21.0';
const startDateSTA = new Date("2020-06-23");
const currentDate = new Date();

let yearsPassed = currentDate.getFullYear() - startDateSTA.getFullYear();
const isAnniversaryYet = currentDate.getMonth() < startDateSTA.getMonth() || (currentDate.getMonth() === startDateSTA.getMonth() && currentDate.getDate() < startDateSTA.getDate());

if (isAnniversaryYet) {
    yearsPassed--;
}

const daysDifference = Math.floor((currentDate.getTime() - startDateSTA.getTime()) / (1000 * 60 * 60 * 24));

export const faqs = [
    {
        question: "¿Por qué no subes vídeos?",
        answer: "No, el canal de YouTube sigue en pie, pero la frecuencia de subida de vídeos es baja debido al trabajo que estos me llevan y al hecho de que siempre priorizo la calidad antes que la cantidad."
    },
    {
        question: "¿Qué pasó con LastHope?",
        answer: "LastHope SMP cerró en mayo de 2020 y, desde entonces, no he vuelto a jugar en dicho servidor. Lo más probable es que nunca vuelva a abrir sus puertas."
    },
    {
        question: "¿Cuándo acabes el mundo lo dejarás para descargar?",
        answer: "Para mí, el concepto de acabar un mundo no tiene sentido en la modalidad de Minecraft que me gusta jugar. Mi survival no tiene un final como tal; mientras siga disfrutando de este juego, mi mapa seguirá en pie."
    },
    {
        question: "¿Por qué no tienes netherite?",
        answer: "No me gusta usar netherite porque lo considero un material demasiado caro de conseguir para la poca mejora que ofrece respecto al diamante. Además, es un material no renovable, y el diamante sí lo es :), ademas tengo un clip explicandolo te lo dejo <a href='https://clips.twitch.tv/MuddyCrackySalmonGOWSkull' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aqui</a>."
    },
    {
        question: "¿Has abandonado YouTube?",
        answer: "No, el canal de YouTube sigue en pie, pero la frecuencia de subida de vídeos es baja debido al trabajo que estos me llevan y al hecho de que siempre priorizo la calidad antes que la cantidad."
    },
    {
        question: "¿Por qué no usas Litematica?",
        answer: "Me gusta mantener el juego lo más puro posible y, aunque no me cierro la puerta a usar mods, no me gusta abusar de ellos. Por eso, pese a que no estoy en contra de Litematica, a mí personalmente no me gusta usarlo en mi mundo."
    },
    {
        question: "¿Cómo colocas bloques tan rápido?",
        answer: "Para poner bloques así de rápido utilizo una tecla del teclado asignada a la accion de poner bloques. Es decir, en el menú de configuración, en vez de tener el clic derecho asignado para colocar bloques, tengo la tecla R en su lugar, y así, manteniéndola, puedo poner muchos bloques por segundo. Si quieres saber más, entrá a <a href='https://www.twitch.tv/aurigas/clip/FaithfulDarkBeefOneHand-wwfFRtsnAe5GGYso' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>."
    },
    {
        question: "¿Cómo picas tan rápido?",
        answer: "Estoy utilizando un pico de diamante con eficiencia 5 y, además, tengo un beacon con prisa minera 2. Por esa razón, puedo instaminar bloques como la stone y la diorite."
    },
    {
        question: "¿Qué música utilizas en tus directos?",
        answer: "Yo, en el fondo de mis directos, tengo música lofi que se genera automáticamente con IA. Si quieres saber más, visita <a href='https://lofigenerator.com/' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>esta web</a>."
    },
    {
        question: "¿Cómo stackeas shulkers?",
        answer: "Yo lo que utilizo para stackear shulker boxes es una rule del Carpet Mod que tienes disponible <a href='https://modrinth.com/mod/carpet' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aquí</a>. La rule se llama StackableShulkerBoxes y la tengo en la opción de stackeo a 64."
    },
    {
        question: "¿Qué es Vultam?",
        answer: '¡Vultam.net es un patrocinador del canal! Vultam es una empresa de hosting de servidores potentes a muy buen precio. Puedes acceder a ella pulsando <a href="https://vultam.net/aurigas" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">aquí</a> y usar el código "aurigas" para obtener un 10% de descuento.'
    },
    {
        question: "¿Qué es Aurum?",
        answer: "Aurum está planteado como un servidor para reunir a los suscriptores de mi canal de Twitch. En este servidor se juega principalmente la rama técnica de Minecraft Survival en la versión 1.18.2, de una forma muy cercana a vanilla, pero con algunos retoques de CarpetMod. Además, tenemos una comunidad de Discord a la cual podés acceder en <a href='https://discord.gg/jJ8fC7pTxk' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este link</a>."
    },
    {
        question: "¿Qué estás estudiando?",
        answer: "Por el momento no quiero decir qué carrera estoy estudiando por temas de privacidad."
    },
    {
        question: "¿Qué texture pack usas?",
        answer: 'Actualmente, el texture pack que uso no es público, pero puedes utilizar las versiones anteriores que están disponibles <a href="https://discord.gg/kcqHJDu" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">aquí</a>, o, si no, puedes crear algo parecido a lo que tengo en <a href="https://vanillatweaks.net/picker/resource-packs/" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">esta web</a> combinando distintas texturas.'
    },
    {
        question: "¿Qué mods utilizas?",
        answer: 'Tienes toda la lista de mods que utilizo y sus respectivos enlaces <a href="/mods" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">aquí</a>.'
    },
    {
        question: "¿Cuándo empezó el mundo STA?",
        answer: `El mundo STA lo empecé el ${startDateSTA.toLocaleDateString()} y ya han pasado mas de ${yearsPassed} años desde entonces.`
    },
    {
        question: "¿Cuántos días tiene tu mundo STA?",
        answer: `STA ya tiene ${daysDifference} días desde que se creó y ¡esperemos que muchos más!`
    },
    {
        question: "¿Cuál es tu horario?",
        answer: "Suelo hacer stream de lunes a viernes desde las 16:00 hs a las 20:00 hs, hora española."
    },
    {
        question: "¿Qué prefieres, Java o Bedrock?",
        answer: "Yo juego en Java, no tengo conocimiento sobre Bedrock, nunca en mi vida he jugado Bedrock, entonces no puedo decir qué es mejor. Si quieres saber más, te dejo un clip con mi opinión <a href='https://clips.twitch.tv/CarelessMoralDragonflyJKanStyle-1ojQPpwPs8cLE_8X' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aquí</a>."
    },
    {
        question: "¿Por qué dejaste LastHope?",
        answer: "Yo no dejé LastHope SMP, el servidor cerró en mayo de 2020 y, desde entonces, no he vuelto a jugar en dicho servidor. Lo más probable es que nunca vuelva a abrir sus puertas."
    },
    {
        question: "¿En qué versión está tu mundo STA?",
        answer: `Mi mundo STA se encuentra en la versión ${STAVersion}`
    },
    {
        question: "¿Por qué no actualizas a la última versión?",
        answer: `Por el momento me encuentro en la ${STAVersion} y no tengo planes de actualizar hasta que me sea necesario. Yo no soy de esas personas que, apenas sale una versión, actualiza. Mojang suele romper muchas cosas y no tengo la necesidad de actualizar instantáneamente, me lo tomo con calma.`
    },
    {
        question: "¿Por qué tu pico esta rojo?",
        answer: "El pico se pone con un borde rojo cuando está cerca de romperse. Esto ocurre porque tengo un texture pack que desarrollé para saber cuándo le queda poca durabilidad y así poder guardarlo antes de que se rompa sin darme cuenta. Si quieres tener el mismo texture pack, accede a <a href='https://discord.gg/kcqHJDu' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este link</a>."
    },
    {
        question: "¿Por qué no usas tótems?",
        answer: "No utilizo tótems en mi survival porque no es un hardcore. No me importa morir, vuelvo a por mis cosas y sigo jugando. No tengo la necesidad de tener mi mano secundaria ocupada con un ítem inútil. Si quieres saber más sobre mi opinión, mira <a href='https://clips.twitch.tv/SpicyVainTapirM4xHeh-9xenwmb1RhaEhyck' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>."
    },
    {
        question: "¿Por qué haces granjas tan grandes y masivas?",
        answer: "A mí lo que me divierte de jugar Minecraft técnico es hacer proyectos grandes a los que pueda dedicarle tiempo. Si puedo hacer la granja más grande de slime, la voy a hacer. Si quieres saber más sobre mi opinión, mira <a href='https://clips.twitch.tv/TallBraveEchidnaTheRinger-jdGWHE6lycKExVzb' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>."
    },
    {
        question: "⭐ ¿Qué es el proyecto Salem?",
        answer: "El Proyecto Salem es una granja cuádruple de brujas capaz de generar más de 35k de redstone por hora. Esta granja estará ubicada dentro de un perímetro irregular y, en el futuro, se convertirá en una especie de bioma personalizado. Si deseas ver el progreso, entra <a href='https://www.twitch.tv/aurigas/videos?filter=all&sort=time' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aquí</a>.",
        category: "salem"
    },
    {
        question: "¿Por qué picas a mano el perímetro?",
        answer: "Estoy haciendo el perímetro a mano porque, en mis proyectos en STA, suelo utilizar máquinas como World Eters o 3D Dupers; esta vez, sin embargo, quiero hacer algo diferente para variar y disfrutar del proceso. Si deseas saber más, mira <a href='https://www.twitch.tv/aurigas/clip/HumbleMiniatureTildeAMPEnergyCherry-08Q8u8l2dBG63q_Z' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>.",
        category: "salem"
    },
    {
        question: "¿Por qué tiras las shulkers a los beacons?",
        answer: "Lanzo las shulkers llenas a los beacons porque debajo de cada uno hay una corriente de agua que se dirige al centro, donde tengo un almacén temporal. Hago esto porque es mucho más rápido que ir al centro cada vez que quiero vaciar mi inventario.",
        category: "salem"
    },
    {
        question: "¿Por qué se llama Salem?",
        answer: "El proyecto se llama así debido a la historia detrás del nombre. Salem es una ciudad de Estados Unidos en la que se llevaron a cabo los juicios de las brujas, y como el proyecto es una granja de brujas, junto con la gente del chat decidimos llamarlo así. Además, la palabra Salem tiene dos sílabas y me gusta :), si deseas saber más sobre la historia, entra <a href='https://es.wikipedia.org/wiki/Juicios_de_Salem' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aquí</a>.", 
        category: "salem"
    },
    {
        question: "¿Qué son los BBS?",
        answer: "Lo que aparece en el centro de la pantalla mientras pico son los bloques minados por segundo. Los utilizo para saber si estoy picando rápido o muy lento y tener una idea general de cómo va mi ritmo.",
        category: "salem"
    },
    {
        question: "¿Qué forma tiene el perímetro?",
        answer: "El perímetro no tiene una forma definida, es completamente irregular, ya que se creó a partir de un río generado naturalmente. Si deseas ver cómo quedará y cómo se logró esa forma, mira <a href='https://youtu.be/AUdza7UUVcU' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>.",
        category: "salem"
    },
    {
        question: "¿Qué va a ir dentro del perímetro?",
        answer: "Dentro del perímetro habrá una granja cuádruple de brujas que generará aproximadamente 35k/h de redstone. Aún no sé qué diseño utilizaré o si la diseñaré yo mismo, lo único que tengo claro es que no será EOL.",
        category: "salem"
    },
    {
        question: "¿Por qué picas con Silk Touch?",
        answer: "Estoy picando la deepslate con Silk Touch porque es un bloque no renovable que siempre estoy a tiempo de transformar en cobbled deepslate. Esta es la misma razón por la que no uso bone meal ni azada, ya que el musgo también es renovable.",
        category: "salem"
    },
    {
        question: "¿Cómo encuentro una cuádruple witch hut en mi seed?",
        answer: "Si quieres tener una cuádruple witch hut en tu seed y no sabes cómo buscarla, te recomiendo el programa <a href='https://github.com/Cubitect/cubiomes-viewer' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>Cubiomes</a>, con el cual puedes localizar estructuras y biomas específicos en tu seed. Seguramente, si no generaste tu seed con una cuádruple witch hut, no tendrás una o estará muy lejos del spawn. Y, si aún no iniciaste tu survival, puedes generar una seed con una cuádruple witch hut usando el programa que te mencioné anteriormente.",
        category: "salem"
    },
    {
        question: "¿Cuánto va a producir la granja de brujas?",
        answer: "No es una sola granja, son cuatro granjas de brujas que generan aproximadamente 9k/h cada una, lo que suma un total de unos 35k/h de redstone. Estos números son teóricos, pero en la práctica se acercan mucho. Aún no sé qué diseño de granja voy a hacer.",
        category: "salem"
    },
    {
        question: "¿Por qué estas haciendo una granja de brujas?",
        answer: "Estoy haciendo una granja cuádruple de brujas, ya que las granjas de raids en la 1.21 dejaron de funcionar. La mecánica de stackeo de raids fue parcheada al agregar la nueva poción de badomen y otros cambios, por lo que la mejor fuente de redstone ahora es una granja de brujas, ya sea de 1,2,3 o 4 huts.",
        category: "salem"
    },
    {
        question: "¿Por qué no utilizas toolswitch al picar?",
        answer: "Yo intento jugar lo mas vanilla posible, por eso no utilizo toolswitch al picar, me gusta mantener el juego lo mas puro posible, aunque no me cierro a usar mods, no me gusta abusar de ellos. Por eso, pese a que no estoy en contra del toolswitch, a mí personalmente no me gusta usarlo en mi mundo.",
        category: "salem"
    },
    {
        question: "¿Por qué quitas los ores?",
        answer: "Estoy picando los ores porque quiero reemplazar toda la stone y la deepslate por moss, y no es posible reemplazar los ores. Explicación más detallada <a href='https://www.twitch.tv/aurigas/clip/AnnoyingInquisitiveArtichokePrimeMe-k2vgTrCpHb9J1_g5' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aqui</a>.",
        category: "salem"
    },
    {
        question: "¿Por qué pones moss?",
        answer: "Estoy poniendo moss porque quiero realizar una especie de bioma personalizado con la forma del perimetro. Ademas es un bloque renovable y muy facil de colocar, ideal para esta ocacion. Si quieres ver la idea entra <a href='https://gyazo.com/e305658f78d10cf43186b4d4f4e1c702' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>aqui</a>.",
        category: "salem"
    },
    {
        question: "¿Por qué guardas la piedra si es renovable?",
        answer: "Guardo la piedra por dos razones: la primera es por una cuestión de tiempo al picar, ya que si tengo que estar separando lo que voy a guardar, tardo mucho más que si guardo todo, y la segunda es porque es útil tener piedra en el almacén general para craftear cosas como repiters, comparadores, etc.",
        category: "salem"
    },
    {
        question: "¿Cómo encontraste tu cuádruple witch hut?",
        answer: "Cuando empecé mi mundo en la 1.16, busqué una seed que tuviera una cuádruple witch hut cerca del spawn. La encontré en un post de reddit en un listado de cientos de seeds. Mi cuádruple witch hut no es ideal, es decir, no están todas alineadas en un eje ni están a la misma altura. Pero bueno, respondiendo a la pregunta, yo no busque la cuádruple witch hut en mi mundo, empecé con una seed que tuviera esa generación.",
        category: "salem"
    },
    {
        question: "¿Qué diseño harás para la granja de brujas?",
        answer: "Todavía no tengo un diseño de granja definido, no sé si será un diseño mío o de alguien más, pero lo que sí sé es que no será EOL, tampoco sé si voy a llevar a las brujas al nether o las moveré por el overworld con conveyors o piston bolts.",
        category: "salem"
    },
    {
        question: "¿Cómo picas tan rápido?",
        answer: "Estoy utilizando un pico de diamante con eficiencia 5 y, además, tengo un beacon con prisa minera 2. Por esa razón, puedo instaminar bloques como la stone y la diorite.",
        category: "salem"
    }
];