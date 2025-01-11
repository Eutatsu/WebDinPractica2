"use strict";(self["webpackChunkmosaiccasteller"]=self["webpackChunkmosaiccasteller"]||[]).push([[854],{1168:function(e,s,a){a.r(s),a.d(s,{default:function(){return m}});var t=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"container my-4 px-0 d-block",attrs:{id:"contenidor_mosaic"}},[s("form",{staticClass:"m-4",attrs:{id:"opcions"}},[s("div",{staticClass:"d-flex justify-content-between flex-wrap",attrs:{id:"opcions-l1"}},[s("b-form-input",{staticClass:"col-lg-3 col-md-5 col-sm-12 mb-3 vermell-vora",attrs:{placeholder:"Cerca colles o colors..."},model:{value:e.cerca,callback:function(s){e.cerca=s},expression:"cerca"}}),s("div",{staticClass:"d-flex algin-items-center mb-3"},[s("label",{staticClass:"text-nowrap align-self-center m-0",attrs:{for:"ordena"}},[e._v("Ordena per: ")]),s("select",{staticClass:"form-control vermell-vora",attrs:{id:"ordena"},on:{change:function(s){return e.ordenar(s)}}},[s("b-form-select-option",{attrs:{value:"nom"}},[e._v("Nom")]),s("b-form-select-option",{attrs:{value:"color"}},[e._v("Color")]),s("b-form-select-option",{attrs:{value:"nomcolor"}},[e._v("Nom Color")]),s("b-form-select-option",{attrs:{value:"llum"}},[e._v("Lluminositat")]),s("b-form-select-option",{attrs:{value:"default"}},[e._v("Default")])],1)])],1),s("div",{staticClass:"text-left",attrs:{id:"opcions-l2"}},[s("div",{staticClass:"d-md-flex justify-content-between"},[s("h4",[e._v("Mostra:")]),s("div",{staticClass:"col-md-8 col-12 d-md-flex text-nowrap align-items-center justify-content-end",attrs:{id:"control-mida"}},[s("label",{staticClass:"mb-0",attrs:{for:"mida_rajoles"}},[e._v("Mida tessel·les:")]),s("div",{staticClass:"d-flex align-items-center justify-content-end"},[s("b-form-input",{staticClass:"mx-2",attrs:{id:"mida_rajoles",type:"range",min:"5",max:"200"},model:{value:e.mida,callback:function(s){e.mida=s},expression:"mida"}}),s("b-form-input",{staticClass:"form-control-sm col-1",staticStyle:{"min-width":"2.6rem"},attrs:{placeholder:e.mida},model:{value:e.mida,callback:function(s){e.mida=s},expression:"mida"}}),s("p",{staticClass:"mb-0"},[e._v("px")])],1)])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h5",[e._v("Tipus:")]),s("b-form-checkbox",{attrs:{value:!0},model:{value:e.seccions_tipus,callback:function(s){e.seccions_tipus=s},expression:"seccions_tipus"}},[e._v("Separa")])],1),s("div",{staticClass:"d-lg-flex"},[s("b-form-checkbox-group",{model:{value:e.tipus,callback:function(s){e.tipus=s},expression:"tipus"}},[s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"convencional"}},[e._v("Convencionals")]),s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"universitaria"}},[e._v("Universitàries")]),s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"internacional"}},[e._v("Internacionals")])],1)],1)]),s("div",{staticClass:"col-6"},[s("div",{staticClass:"d-flex justify-content-between"},[s("h5",[e._v("Estat:")]),s("b-form-checkbox",{attrs:{value:!0},model:{value:e.seccions_estat,callback:function(s){e.seccions_estat=s},expression:"seccions_estat"}},[e._v("Separa")])],1),s("div",{staticClass:"d-lg-flex"},[s("b-form-checkbox-group",{model:{value:e.estat,callback:function(s){e.estat=s},expression:"estat"}},[s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"activa"}},[e._v("Actives")]),s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"formacio"}},[e._v("En formació")]),s("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"desapareguda"}},[e._v("Desaparegudes")])],1)],1)])])])])]),s("div",{staticClass:"container-fluid"},[1==e.seccions_tipus&&0==e.seccions_estat?s("div",[e.tipus.includes("convencional")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles Convencionals")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"convencional",tipus:["convencional"],estat:e.estat,perfil_color:e.perfil_color}})],1):e._e(),e.tipus.includes("universitaria")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles Universitàries")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"universitaria",tipus:["universitaria"],estat:e.estat,perfil_color:e.perfil_color}})],1):e._e(),e.tipus.includes("internacional")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles Internacionals")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"internacional",tipus:["internacional"],estat:e.estat,perfil_color:e.perfil_color}})],1):e._e()]):e._e(),1==e.seccions_estat&&0==e.seccions_tipus?s("div",[e.estat.includes("activa")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles Actives")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"activa",tipus:e.tipus,estat:["activa"],perfil_color:e.perfil_color}})],1):e._e(),e.estat.includes("formacio")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles En formació")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"formacio",tipus:e.tipus,estat:["formacio"],perfil_color:e.perfil_color}})],1):e._e(),e.estat.includes("desapareguda")?s("div",[s("h5",{staticClass:"mt-3"},[e._v("Colles Desaparegudes")]),s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"desapareguda",tipus:e.tipus,estat:["desapareguda"],perfil_color:e.perfil_color}})],1):e._e()]):0==e.seccions_estat&&0==e.seccions_tipus||1==e.seccions_estat&&1==e.seccions_tipus?s("div",[s("MosaicRenderer",{attrs:{llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"coneguts",id:"coneguts",tipus:e.tipus,estat:e.estat,perfil_color:e.perfil_color}})],1):e._e(),s("br"),s("h5",[e._v("Colles amb Colors Desconeguts:")]),s("MosaicRenderer",{attrs:{id:"desconeguts",llista:e.dades_ordenades,cerca:e.cerca,mida:e.mida,seleccio:"desconeguts",tipus:e.tipus,estat:e.estat}})],1)])},o=[],i=a(260),c=a(1640),r={components:{MosaicRenderer:c.A},data(){return{dades:i,dades_ordenades:[],mida:"80",cerca:"",tipus:["convencional","universitaria","internacional"],estat:["activa","formacio","desapareguda"],seccions_tipus:!1,seccions_estat:!1,perfil_color:"default"}},methods:{ordenarNom(){this.dades_ordenades.sort(((e,s)=>e.nom.localeCompare(s.nom)))},ordenarColor(){this.dades_ordenades.sort(((e,s)=>e.color_hsv[0]-s.color_hsv[0])),this.dades_ordenades.sort(((e,s)=>(e.color_hsv[1]<=10)-(s.color_hsv[1]<=10)))},ordenarLlum(){this.dades_ordenades.sort(((e,s)=>e.color_hsv[2]-s.color_hsv[2]))},ordenarNomColor(){this.dades_ordenades.sort(((e,s)=>e.color_camisa.localeCompare(s.color_camisa)))},ordenar(e){const s=e.target.value;console.log(s),"nom"==s&&this.ordenarNom(),"color"==s&&this.ordenarColor(),"nomcolor"==s&&this.ordenarNomColor(),"llum"==s&&this.ordenarLlum(),"default"==s&&(this.dades_ordenades=[...this.dades])}},created(){this.dades_ordenades=[...this.dades],this.ordenarNom()}},l=r,n=a(1656),d=(0,n.A)(l,t,o,!1,null,"d84f5c14",null),m=d.exports}}]);
//# sourceMappingURL=854.c61c238f.js.map