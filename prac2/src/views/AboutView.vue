<template>
<div class="about py-4 container">
  <h2>Sobre el Mosaic</h2>
    <p class="text-right">El Mosaic Casteller és un experiment visual que recull dades sobre les diferents Colles Castelleres de Catalunya i més enllà, tant les actualment actives com les que han desaparegut per una raó o altra.
    Cada colla està representada per una tessel·la del color de la seva camisa. <br>
    La camisa d'un casteller és l'element principal de la seva identitat castellera, cada membre de la colla se sent unit amb els seus companys a través del color de la camisa.
    El Mosaic és una recopilació de totes aquestes identitats, unint-les en una obra que representa la totalitat del món casteller, i permetent a l'usuari jugar amb els colors i aprendre sobre les colles.
    </p>
  <h3>Investigació</h3>
    <p class="text-right">
    Al mosaic s'inclouen més de 150 colles, des de les colles convencionals de municipis catalans actuals fins a colles internacionals desaparegudes anys enrere.
    La llista de colles s'ha extret de la <a href="https://ca.wikipedia.org/wiki/Llista_de_colles_castelleres" target="_blank" rel="noopener noreferrer">Llista de Colles Castelleres</a> de Viquipèdia, per tant, s'han inclòs colles de les quals no es té completa certesa de tots els seus detalls o de la fiabilitat de la informació, és per això que aquest projecte
    ha esdevingut també una tasca de recerca i investigació.</p>
    <p class="text-justify">
    La succinta vigència d'algunes de les colles esmentades a la llista fa que trobar documentació o qualsevol mena de material sigui tot un treball arqueològic.
    És per això que al peu de la pàgina apareixen totes les colles de les quals no s'ha trobat una referència precisa del color, o en casos ni tan sols el nom d'aquest.
    Aquests requadres provisionals omplen buits i demanen ser pintats amb el color que els pertoca, completar el Mosaic presenta un emocionant repte, recopilar tota la informació necessària per poder completar el puzle i admirar el quadre sencer del món casteller.
    </p>
    <p class="text-left">
    Un exemple d'investigació és el de California Kids, una colla internacional i universitària de la Universitat de Califòrnia, fundada entre el 2003 i el 2004 i desapareguda pocs anys després per incompliments amb els requisits de seguretat dels EUA.
    Encara queden detalls que s'han de complementar sobre aquesta colla, com la data de dissolució o trobar una imatge de l'escut d'alta resolució, però rebuscant els anhels de
    l'internet es pot trobar una antiga web dels <a href="http://web.archive.org/web/20070906004806/http://www.california-kids.org:80/" target="_blank" rel="noopener noreferrer">California Kids arxivada</a>, d'on s'ha extret el color.

    </p>
    <div class="embed-responsive embed-responsive-4by3 col-lg-6 mx-auto d-block">
    <iframe src="https://www.youtube.com/embed/T3IznB09Liw?si=SdwvPelo6eVzUzjg&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
    <br>
  <h3>Precisió de les dades</h3>
    <p class="text-right">
    En la majoria de casos, com ja s'ha esmentat, les dades, principalment el codi de color de cada colla, està extret del seu article de Viquipèdia, per a d'altres, però, s'han buscat publicacions i referències oficials d'on s'ha extret un color el més acurat possible.
    Aquest pretendria ser un dels altres objectius del mosaic, servir com a base de dades on es puguin trobar codis i referències de colors precises per a cada colla.
    <br> A la <a href="https://castellscat.cat/ca/les-colles-llistat" target="_blank" rel="noopener noreferrer">web de la Coordinadora de les Colles Castelleres de Catalunya</a>, algunes colles, com per exemple Bordegassos de Vilanova, tenen estipulat el codi Pantone exacte del seu color de camisa, però d'altres simplement el descriuen com a "Blau".
    Seria molt interessant poder llistar tots els colors de colles amb un sistema estandarditzat, per un element tan essencial de les colles com és la seva camisa identificativa, sovint l'ús d'aquest color en xarxes, cartells o inclòs en les camises mateixes, és inconsistent.
    </p>
    <p class="text-left">
    Per ara, el Mosaic inclou només informació bàsica sobre cada colla, la visió, però, és poder reunir moltes més dades i complementar les funcions de la pàgina amb elles, de manera que es converteixi en un base de dades i un punt de referència del món casteller.
  </p>
  <br>
  <br>
  <h3>Barreres d'accesibilitat</h3>
  <p class="text-left">Per simular possibles dificultats d'accesibilitat que podrien tenir els usuaris hem creat visualitzacions alternes de la pàgina a la que s'apliquen diferents filtres i funcions als elements de la web.</p>
  <h4>Barreres visuals</h4>
  <p class="text-left">Hi ha varies simulacions de diferents tipologies de daltonisme, aquests essent <router-link to="/deuteranopia"><a>deuteranopia</a></router-link>, <router-link to="/tritanopia"><a>tritanopia</a></router-link> i <router-link to="/achromatopsia"><a>achromatopsia</a></router-link>.</p>
  <p class="text-left">També es pot veure un exemple de com pot ser l'experiencia de la web per a un usuari amb <router-link to="/baixavisio"><a>ceguera parcial</a></router-link>, el la que no pot diferenciar correctament les caselles entre si.</p>
  <h4>Barreres Cognitives</h4>
  <p class="text-left">Per a les <router-link to="/cognitiu"><a>barreres cognitives</a></router-link>, hem fet que tot el funcionament de la pàgina provoqui distraccions, les opcions tenen colors intermitents que criden l’atenció, quan se selecciona una casella aquesta creix i mou totes les altres, i té una animació continua,</p>
  <h4>Barreres Motrius</h4>
  <p class="text-left">Per a les <router-link to="/motriu"><a>barreres motrius</a></router-link> hem fet que la majoria d’elements es moguin quan s’intenta clicar, les opcions canvien de posició quan es van a clicar, o un cop s’han clicat, la barra de mida de les caselles canvia constantment fent-la incòmode d’utilitzar i l’ordre del mosaic canvia quan es vol anar a clicar algun quadre. </p>
  <h4>Barreres Auditives</h4>
  <p class="text-left">El video que es presenta en aquesta mateixa pàgina per defecte es presenta sense volum, i en la seva major part manca subtitols, tret dels automatics de YouTube, nomes estan incorporats a les parts on els entrevistats parlen altres idiomes</p>
  <p class="text-left">A més d'això, alguns dels paragrafs d'aquesta pagina estan justificats de maneres poc convencionals, dificultant-ne la comprensió.</p>

  <h3>Conclusions i reflexions</h3>
  <p class="text-left">La realització d’aquesta pràctica ha sigut un repte, no només per tota la documentació i procés de creació de la web en si, sinó en la investigació de les discapacitats i com aquestes persones s’enfronten a les dificultats a l’hora de navegar per la web. Buscar maneres d’implementar aquestes barreres i que siguin coherents amb el tema principal de la pàgina ha sigut difícil, no només en l’apartat tècnic, sinó també en trobar una manera de representar correctament per a les persones sense discapacitats els problemes que poden tindre les persones que sí que en tenen.  
  </p>
</div>
</template>

<style scoped>
  a{
    color:#dd1725;
    text-decoration:underline
  };

  a:hover{
    color:brown;
  };
</style>