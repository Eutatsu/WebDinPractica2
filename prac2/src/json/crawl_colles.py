import requests
from bs4 import BeautifulSoup
import json


RED = "\033[91m"
RESET = "\033[0m" 

llistes = [
    {"llista":"convencionals_actives",
     "heading":"h2",
     "id":"Colles_castelleres_actuals",
     "tipus":"convencional",
     "estat":"activa",
     "idx_nom":1},

    {"llista":"convencionals_formacio",
     "heading":"h3",
     "id":"Colles_castelleres_en_formació",
     "tipus":"convencional",
     "estat":"formacio",
     "idx_nom":0},

    {"llista":"convencionals_desaparegudes",
     "heading":"h2",
     "id":"Colles_castelleres_desaparegudes",
     "tipus":"convencional",
     "estat":"desapareguda",
     "idx_nom":0},

    {"llista":"universitaries_actives",
     "heading":"h3",
     "id":"Colles_castelleres_universitàries",
     "tipus":"universitaria",
     "estat":"activa",
     "idx_nom":1},

    {"llista":"universitaries_desaparegudes",
     "heading":"dt",
     "id":None,
     "text":"Colles castelleres universitàries desaparegudes",
     "tipus":"universitaria",
     "estat":"desapareguda",
     "idx_nom":0},

     {"llista":"internacionals_actives",
     "heading":"h2",
     "id":"Colles_castelleres_fora_de_l'àmbit_cultural_català",
     "tipus":"internacional",
     "estat":"activa",
     "idx_nom":0,
     "idx_estat":3},

     {"llista":"internacionals_desaparegudes",
     "heading":"h2",
     "id":"Colles_castelleres_fora_de_l'àmbit_cultural_català",
     "tipus":"internacional",
     "estat":"desapareguda",
     "idx_nom":0,
     "idx_estat":3}
]

dades_colles=[]
llista_activa=None

Llistat_Colles="https://ca.wikipedia.org/wiki/Llista_de_colles_castelleres"

def entrada():
    global llista_activa
    while True:
        seleccio_llista=input('Selecciona Llista:')

        try:
            selec=int(seleccio_llista)

            if selec >= 1 and selec <= len(llistes):
                llista_activa = selec-1
                print(f"{llistes[llista_activa]['llista']}")
                return
            elif selec == 10:
                dump()
            else:
                print('Llista Invalida')
            
        except ValueError:
            print('Valor Invalid')
        
def crawl(soup):
    heading={llistes[llista_activa]['heading']}
    ident={llistes[llista_activa]['id']}


    if ident=={None}:
        seccio = soup.find(string=llistes[llista_activa]['text'])
    
    else:
        seccio = soup.find(heading,id=ident)
    
    if seccio:
         print("Secció Ubicada")
         

         taula=seccio.find_next("table")
         files=taula.find_all("tr")[1:]
         idx_estat=llistes[llista_activa].get('idx_estat')
         if idx_estat is not None:
            crawl_internacionals(files,idx_estat)
         else:
            crawl_taula(files)
    else:
         print("Secció no trobada")

        
def crawl_taula(files):
     for fila in files:
        caselles=fila.find_all("td")
        crawl_link(caselles)
        

def crawl_internacionals(files,idx):
    for fila in files:
        caselles = fila.find_all("td")
        estat_colla = caselles[idx].get_text(strip=True)
        if "Desapareguda" in estat_colla and llistes[llista_activa]['estat']=='desapareguda':
            crawl_link(caselles)
        elif not estat_colla and llistes[llista_activa]['estat']=='activa':
            crawl_link(caselles)

def crawl_link(caselles):
    
    idx_nom=llistes[llista_activa]['idx_nom']
    link_colla=caselles[idx_nom].find('a')
    if link_colla:  
        print(f"Enllaç Ubicat")
        nom_colla = link_colla.text.strip()
        url_colla = "https://ca.wikipedia.org" + link_colla['href']
    else:
        print("Enllaç no trobat, utilitzant text pla")
        nom_colla = caselles[idx_nom].text.strip()
        url_colla = "Nul"
    tipus_colla = llistes[llista_activa]['tipus']
    estat_colla = llistes[llista_activa]['estat']
    print(f"Nom Colla:{nom_colla}")
    print(f"Enllaç:{url_colla}")
    print(f"Tipus Colla: {tipus_colla}")
    print(f"Estat:{estat_colla}")
    dades_colles.append({
        'nom': nom_colla,
        'url': url_colla,
        'tipus':tipus_colla,
        'estat':estat_colla
    })

def dump():
    global dades_colles
    print(dades_colles)

    print("Vols exportar les dades?")
    print("[1] Si")
    print("[2] No (Torna al menú)")

    export=input()

    if export == "1":
        filename = input("Nom de l'arxiu: ").strip()
        if not filename:
            print("El nom de l'arxiu no pot estar buit.")

        try:
            with open(f"{filename}.json", "w", encoding="utf-8") as json_file:
                json.dump(dades_colles, json_file, ensure_ascii=False, indent=4)
            print(f"Exportat a {filename}.json")
        except Exception as e:
            print(f"Error en exportar les dades: {e}")
        return

    elif export == "2":
        print("Tornant al menú.")
        return

def compilar_llista():
    response = requests.get(Llistat_Colles)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        while True:
            print('Quin llistat vols inspeccionar?')
            
            
            for i,llista in enumerate(llistes,1):
                    print(f"[{i}] {llista['llista']}")
            print('[10] Exportar a arxiu')

            entrada()
            
            print(f"Seleccio completa")

            crawl(soup)
            return
    else:
        print("No s'ha pogut connectar amb l'enllaç")

def compilar_info():
    dades_colles=[]

    nom_arxiu=input("Importar JSON:")
    
    with open(f'{nom_arxiu}', 'r', encoding='utf-8') as json_file:
      dades_colles = json.load(json_file)
    
    for colla in dades_colles:
        nom_colla = colla["nom"]
        url_colla = colla["url"]
        print(f"Processant {nom_colla}")
        if url_colla == "Nul" or "&action=edit&redlink=1" in url_colla:
            print(f"{RED}Colla sense article Wikipedia, declarant valors desconeguts {RESET}")
            color_camisa="Desconegut"
            codi_color="#ffffff"
        else:
            print(f"Enllaç correcte, inciant recopilació de dades")
            color_camisa, codi_color=crawl_info(url_colla)
        
        colla['color_camisa']=color_camisa
        colla['codi_color']=codi_color  
        print(colla["color_camisa"])
        print(colla["codi_color"])
    
    print(dades_colles)
    dump()
    

def crawl_info(url_colla):       
    response = requests.get(url_colla)

    if response.status_code==200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        infotaula = soup.find("table",class_="infobox")

        if infotaula:
            fila_color = infotaula.find("th", string="Color camisa")
            if fila_color:
                color=fila_color.find_next("td")
                nom_color=color.text.strip()
                color_camisa= nom_color
                requadre=color.find(attrs={"style":True})

                if requadre and "background-color" in requadre["style"]:
                    style=requadre["style"]
                    inici=style.find("background-color:")
                    codi_color = style[inici+len("background-color:"):].split(";")[0].strip()

                else:
                    print(f"{RED}Requadre de color no present, declarant codi desconegut {RESET}")
                    codi_color="#ffffff"
            else:
                print(f"{RED}Color de camisa no present, declarant valors desconeguts {RESET}")
                color_camisa="Desconegut"
                codi_color="#ffffff"
                    
        else:
            print(f"{RED}Infotaula no present, declarant valors desconeguts {RESET}")
            color_camisa="Desconegut"
            codi_color="#ffffff"
    else:
        print(f"{RED} Article no acessible, declarant valors desconeguts {RESET}")
        color_camisa="Desconegut"
        codi_color="#ffffff"

    return color_camisa,codi_color

def hex2rgb(hex_value):
    h = hex_value.strip("#") 
    rgb = tuple(int(h[i:i+2], 16) for i in (0, 2, 4))
    return rgb

def rgb2hsv(r, g, b):
	# Normalize R, G, B values
        r, g, b = r / 255.0, g / 255.0, b / 255.0
    
        # h, s, v = hue, saturation, value
        max_rgb = max(r, g, b)    
        min_rgb = min(r, g, b)   
        difference = max_rgb-min_rgb 
    
        # if max_rgb and max_rgb are equal then h = 0
        if max_rgb == min_rgb:
            h = 0
        
        # if max_rgb==r then h is computed as follows
        elif max_rgb == r:
            h = (60 * ((g - b) / difference) + 360) % 360
    
        # if max_rgb==g then compute h as follows
        elif max_rgb == g:
            h = (60 * ((b - r) / difference) + 120) % 360
    
        # if max_rgb=b then compute h
        elif max_rgb == b:
            h = (60 * ((r - g) / difference) + 240) % 360
    
        # if max_rgb==zero then s=0
        if max_rgb == 0:
            s = 0
        else:
            s = (difference / max_rgb) * 100
    
        # compute v
        v = max_rgb * 100
        # return rounded values of H, S and V
        return list(map(round, (h, s, v)))
 
def hex_a_hsv():
    global dades_colles
    nom_arxiu=input("Importar JSON:")
    
    with open(f'{nom_arxiu}', 'r', encoding='utf-8') as json_file:
      dades_colles = json.load(json_file)
      
    for colla in dades_colles:
        color_hsv=rgb2hsv(*hex2rgb(colla["codi_color"]))

        colla["color_hsv"]=color_hsv

        print(f"Nom Colla:{colla["nom"]}")
        print(f"Color Camisa:{colla["color_camisa"]}")
        print(f"Codi HEX: {colla["codi_color"]}")
        print(f"Color HSV:{colla["color_hsv"]}")


    #print(dades_colles)
    dump()

        



while True:
    print('Quin procés vols dur a terme?')
    print('[0] Compilar Llista')
    print('[1] Compilar Informació')
    print('[2] Convetir HEX a HSV')
    print('[3] Sortir')

    proces=input()
    try:
        selec=int(proces)
        if selec==0:
            compilar_llista()
        if selec==1:
            compilar_info()
        if selec==2:
            hex_a_hsv()
        if selec==3:
            break
    except:
        print('Procés no valid')







