import json
from time import sleep

archivo_json = "C:\\users\\aurigas\\AppData\\Roaming\\.minecraft\\saves\\STA\\stats\\46a4f5f6-8869-4bca-a9aa-d50389ad5c56.json"
archivo_salida = "mining.txt"
INICIO = 4968031
iniciales_hoy = 5785747

with open(archivo_json, "r", encoding="utf-8") as archivo:
    datos = json.load(archivo)
usos_pico = datos["stats"]["minecraft:used"]["minecraft:diamond_pickaxe"]
usos_pala = datos["stats"]["minecraft:used"]["minecraft:diamond_shovel"]
usos_totales = usos_pico + usos_pala
usos_hoy = usos_totales - iniciales_hoy
print(usos_totales)
while True:
    with open(archivo_json, "r", encoding="utf-8") as archivo:
        datos = json.load(archivo)
    usos_pico = datos["stats"]["minecraft:used"]["minecraft:diamond_pickaxe"]
    usos_pala = datos["stats"]["minecraft:used"]["minecraft:diamond_shovel"]
    usos_totales = usos_pico + usos_pala
    usos_hoy = usos_totales - iniciales_hoy
    usos_totales_formateado = "{:,}".format(usos_totales - INICIO).replace(",", ".")
    usos_hoy_formateado = "{:,}".format(usos_hoy).replace(",", ".")
    cuerpo = f"Bloques picados: {usos_totales_formateado}/5.000.000 ({round(((usos_totales - INICIO)/5000000) * 100, 2)}%)\nPicados hoy: {usos_hoy_formateado} ({round(((usos_hoy)/5000000) * 100, 2)}%)"
    with open(archivo_salida, "w", encoding="utf-8") as salida:
        salida.write(cuerpo)
    sleep(1)