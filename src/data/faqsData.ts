const startDateSTA = new Date("2018-05-15");
const currentDate = new Date();

let yearsPassed = currentDate.getFullYear() - startDateSTA.getFullYear();
const isAnniversaryYet = currentDate.getMonth() < startDateSTA.getMonth() || (currentDate.getMonth() === startDateSTA.getMonth() && currentDate.getDate() < startDateSTA.getDate());

if (isAnniversaryYet) {
    yearsPassed--;
}

const daysDifference = Math.floor((currentDate.getTime() - startDateSTA.getTime()) / (1000 * 60 * 60 * 24));

export const faqs = [
    {
        question: "¿Por qué no subís vídeos?",
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
        question: "¿Por qué no tenés netherite?",
        answer: "No me gusta usar netherite porque lo considero un material demasiado caro de conseguir para la poca mejora que ofrece respecto al diamante. Además, es un material no renovable, y el diamante sí lo es :)."
    },
    {
        question: "¿Has abandonado YouTube?",
        answer: "No, el canal de YouTube sigue en pie, pero la frecuencia de subida de vídeos es baja debido al trabajo que estos me llevan y al hecho de que siempre priorizo la calidad antes que la cantidad."
    },
    {
        question: "¿Por qué no usás Litematica?",
        answer: "Me gusta mantener el juego lo más puro posible y, aunque no me cierro la puerta a usar mods, no me gusta abusar de ellos. Por eso, pese a que no estoy en contra de Litematica, a mí personalmente no me gusta usarlo en mi mundo."
    },
    {
        question: "¿Cómo colocás bloques tan rápido?",
        answer: "Para poner bloques así de rápido utilizo una tecla asignada al clic derecho. Es decir, en el menú de configuración, en vez de tener el clic derecho asignado para colocar bloques, tengo la tecla R en su lugar, y así, manteniéndola, puedo poner muchos bloques por segundo. Si querés saber más, entrá a <a href='https://www.twitch.tv/aurigas/clip/FaithfulDarkBeefOneHand-wwfFRtsnAe5GGYso' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este clip</a>."
    },
    {
        question: "¿Cómo picás tan rápido?",
        answer: "Estoy utilizando un pico de diamante con eficiencia 5 y, además, tengo un beacon con prisa minera 2. Por esa razón, puedo instaminar bloques como la stone y la diorita."
    },
    {
        question: "¿Qué música utilizás en tus directos?",
        answer: "Yo, en el fondo de mis directos, tengo música lofi que se genera automáticamente con IA. Si querés saber más, visitá <a href='https://lofigenerator.com/' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>esta web</a>."
    },
    {
        question: "¿Cómo stackeás shulkers?",
        answer: "Yo lo que utilizo para stackear shulker boxes es una rule del Carpet Mod que tenés disponible <a href='https://modrinth.com/mod/carpet' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>acá</a>. La rule se llama StackableShulkerBoxes y la tengo en la opción de stackeo a 64."
    },
    {
        question: "¿Qué es Vultam?",
        answer: '¡Vultam.net es patrocinador del canal! Vultam es una empresa de hosting de servidores potentes a muy buen precio. Podés acceder a ella pulsando <a href="https://vultam.net/aurigas" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">acá</a> y usar el código "aurigas" para obtener un 10% de descuento.'
    },
    {
        question: "¿Qué es Aurum?",
        answer: "Aurum está planteado como un servidor para reunir a los suscriptores de mi canal de Twitch. En este servidor se juega principalmente la rama técnica de Minecraft Survival en la versión 1.18.2, de una forma muy cercana a vanilla, pero con algunos retoques de CarpetMod. Además, tenemos una comunidad de Discord a la cual podés acceder en <a href='https://vultam.net/aurigas' target='_blank' rel='noopener noreferrer' class='text-blue-700 hover:border-b-1'>este link</a>."
    },
    {
        question: "¿Qué estás estudiando?",
        answer: "Por el momento no quiero decir qué carrera estoy estudiando por temas de privacidad."
    },
    {
        question: "¿Qué texture pack usás?",
        answer: 'Actualmente, el texture pack que uso no es público, pero podés utilizar las versiones anteriores que están disponibles <a href="https://discord.gg/kcqHJDu" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">acá</a>, o, si no, podés crear algo parecido a lo que tengo en <a href="https://vanillatweaks.net/picker/resource-packs/" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">esta web</a> combinando distintas texturas.'
    },
    {
        question: "¿Qué mods utilizás?",
        answer: 'Tenés toda la lista de mods que utilizo y sus respectivos enlaces <a href="/mods" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:border-b-1">acá</a>.'
    },
    {
        question: "¿Cuándo empezó el mundo STA?",
        answer: `El mundo STA lo empecé el ${startDateSTA.toLocaleDateString()} y ya han pasado ${yearsPassed} años desde entonces.`
    },
    {
        question: "¿Cuántos días llevás en tu mundo STA?",
        answer: `STA ya tiene ${daysDifference} días desde que se creó y ¡esperemos que muchos más!`
    },
    {
        question: "¿Cuál es tu horario?",
        answer: "Suelo prender stream de lunes a viernes desde las 16:00 hs a las 20:00 hs hora española."
    }
];