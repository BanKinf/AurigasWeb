export interface CarpetRule {
    name: string
    value: string
    desc: string
    image?: string
}

export const carpetRules: CarpetRule[] = [
    {
      name: "ctrlQCraftingFix",
      value: "True",
      desc: "Esta Carpet Rule corrige un error en la interfaz de crafteo donde, al usar Ctrl + Q para craftear un stack de ítems y dropearlos, los items quedan en el inventario en lugar de ser dropeados. Al activar esta opción, el juego maneja mejor esta acción y garantiza que el stack se drope completamente. Esto en las nuevas versiones ya esta arreglado y no hace falta esta carpet rule."
    },
    {
      name: "defaultLoggers",
      value: "tps",
      desc: "Esta Carpet Rule define el tipo de log por defecto para mostrar TPS y MSPT en el tabulador, permitiendo conocer en tiempo real la cantidad de lag en el mundo. Aquí se muestra una imagen de cómo se vería dentro del juego:",
      image: "/images/carpet-rules/tps.webp"
    },
    {
      name: "opPlayerNoCheat",
      value: "True",
      desc: "Esta Carpet Rule evita que los jugadores con permisos de OP utilicen comandos como el cambio de modo de juego. Es útil, ya que a veces se puede activar sin querer, por ejemplo, al presionar F3 + N sin querer, podríamos cambiar el modo a espectador u otros modos no deseados."
    },
    {
      name: "stackeableShulkerBoxes",
      value: "True",
      desc: "Esta Carpet Rule permite apilar shulker boxes al soltarlas en el suelo, sin importar si tienen tag o no. Ofrece dos variantes: stackeado a 16 o a 64, lo que resulta muy útil para mundos técnicos.",
      image: "/images/carpet-rules/shulker-box-stacked.webp"
    }
];