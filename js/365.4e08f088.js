"use strict";(self["webpackChunkmosaiccasteller"]=self["webpackChunkmosaiccasteller"]||[]).push([[365],{5492:function(s,e,a){a.r(e),a.d(e,{default:function(){return m}});var t=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"container my-4 px-0 d-block",attrs:{id:"contenidor_mosaic"}},[e("form",{staticClass:"m-4",attrs:{id:"opcions"}},[e("div",{staticClass:"d-flex justify-content-between flex-wrap",attrs:{id:"opcions-l1"}},[e("b-form-input",{staticClass:"col-lg-3 col-md-5 col-sm-12 mb-3 vermell-vora",attrs:{placeholder:"Cerca colles o colors..."},model:{value:s.cerca,callback:function(e){s.cerca=e},expression:"cerca"}}),e("div",{staticClass:"d-flex algin-items-center mb-3"},[e("label",{staticClass:"text-nowrap align-self-center m-0",attrs:{for:"ordena"}},[s._v("Ordena per: ")]),e("select",{staticClass:"form-control vermell-vora",attrs:{id:"ordena"},on:{change:function(e){return s.ordenar(e)}}},[e("b-form-select-option",{attrs:{value:"nom"}},[s._v("Nom")]),e("b-form-select-option",{attrs:{value:"color"}},[s._v("Color")]),e("b-form-select-option",{attrs:{value:"nomcolor"}},[s._v("Nom Color")]),e("b-form-select-option",{attrs:{value:"llum"}},[s._v("Lluminositat")]),e("b-form-select-option",{attrs:{value:"default"}},[s._v("Default")])],1)])],1),e("div",{staticClass:"text-left",attrs:{id:"opcions-l2"}},[e("div",{staticClass:"d-md-flex justify-content-between"},[e("h4",[s._v("Mostra:")]),e("div",{staticClass:"col-md-8 col-12 d-md-flex text-nowrap align-items-center justify-content-end"},[e("label",{staticClass:"mb-0",attrs:{for:"mida_rajoles"}},[s._v("Mida tessel·les:")]),e("div",{staticClass:"d-flex align-items-center justify-content-end"},[e("b-form-input",{staticClass:"mx-2",attrs:{id:"mida_rajoles",type:"range",min:"5",max:"200"},model:{value:s.mida,callback:function(e){s.mida=e},expression:"mida"}}),e("b-form-input",{staticClass:"form-control-sm col-1",staticStyle:{"min-width":"2.6rem"},attrs:{placeholder:s.mida},model:{value:s.mida,callback:function(e){s.mida=e},expression:"mida"}}),e("p",{staticClass:"mb-0"},[s._v("px")])],1)])]),e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"d-flex justify-content-between"},[e("h5",[s._v("Tipus:")]),e("b-form-checkbox",{attrs:{value:!0},model:{value:s.seccions_tipus,callback:function(e){s.seccions_tipus=e},expression:"seccions_tipus"}},[s._v("Separa")])],1),e("div",{staticClass:"d-lg-flex"},[e("b-form-checkbox-group",{model:{value:s.tipus,callback:function(e){s.tipus=e},expression:"tipus"}},[e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"convencional"}},[s._v("Convencionals")]),e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"universitaria"}},[s._v("Universitàries")]),e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"internacional"}},[s._v("Internacionals")])],1)],1)]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"d-flex justify-content-between"},[e("h5",[s._v("Estat:")]),e("b-form-checkbox",{attrs:{value:!0},model:{value:s.seccions_estat,callback:function(e){s.seccions_estat=e},expression:"seccions_estat"}},[s._v("Separa")])],1),e("div",{staticClass:"d-lg-flex"},[e("b-form-checkbox-group",{model:{value:s.estat,callback:function(e){s.estat=e},expression:"estat"}},[e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"activa"}},[s._v("Actives")]),e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"formacio"}},[s._v("En formació")]),e("b-form-checkbox",{staticClass:"mx-2",attrs:{value:"desapareguda"}},[s._v("Desaparegudes")])],1)],1)])])])])]),1==s.seccions_tipus&&0==s.seccions_estat?e("div",[s.tipus.includes("convencional")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles Convencionals")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"convencional",tipus:["convencional"],estat:s.estat}})],1):s._e(),s.tipus.includes("universitaria")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles Universitàries")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"universitaria",tipus:["universitaria"],estat:s.estat}})],1):s._e(),s.tipus.includes("internacional")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles Internacionals")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"internacional",tipus:["internacional"],estat:s.estat}})],1):s._e()]):s._e(),1==s.seccions_estat&&0==s.seccions_tipus?e("div",[s.estat.includes("activa")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles Actives")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"activa",tipus:s.tipus,estat:["activa"]}})],1):s._e(),s.estat.includes("formacio")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles En formació")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"formacio",tipus:s.tipus,estat:["formacio"]}})],1):s._e(),s.estat.includes("desapareguda")?e("div",[e("h5",{staticClass:"mt-3"},[s._v("Colles Desaparegudes")]),e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"desapareguda",tipus:s.tipus,estat:["desapareguda"]}})],1):s._e()]):0==s.seccions_estat&&0==s.seccions_tipus||1==s.seccions_estat&&1==s.seccions_tipus?e("div",[e("MosaicRenderer",{attrs:{llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"coneguts",id:"coneguts",tipus:s.tipus,estat:s.estat}})],1):s._e(),e("br"),e("h5",[s._v("Colles amb Colors Desconeguts:")]),e("MosaicRenderer",{attrs:{id:"desconeguts",llista:s.dades_ordenades,cerca:s.cerca,mida:s.mida,seleccio:"desconeguts",tipus:s.tipus,estat:s.estat}}),e("svg",{attrs:{height:"0"}},[e("filter",{attrs:{id:"f1"}},[e("feGaussianBlur",{attrs:{stdDeviation:"20"}})],1)])],1)},i=[],o=a(260),c=a(8251),r={components:{MosaicRenderer:c.A},data(){return{dades:o,dades_ordenades:[],mida:"60",cerca:"",tipus:["convencional","universitaria","internacional"],estat:["activa","formacio","desapareguda"],seccions_tipus:!1,seccions_estat:!1,perfil_color:"default"}},methods:{ordenarNom(){this.dades_ordenades.sort(((s,e)=>s.nom.localeCompare(e.nom)))},ordenarColor(){this.dades_ordenades.sort(((s,e)=>s.color_hsv[0]-e.color_hsv[0])),this.dades_ordenades.sort(((s,e)=>(s.color_hsv[1]<=10)-(e.color_hsv[1]<=10)))},ordenarLlum(){this.dades_ordenades.sort(((s,e)=>s.color_hsl[2]-e.color_hsl[2]))},ordenarNomColor(){this.dades_ordenades.sort(((s,e)=>s.color_camisa.localeCompare(e.color_camisa)))},ordenar(s){const e=s.target.value;console.log(e),"nom"==e&&this.ordenarNom(),"color"==e&&this.ordenarColor(),"nomcolor"==e&&this.ordenarNomColor(),"llum"==e&&this.ordenarLlum(),"default"==e&&(this.dades_ordenades=[...this.dades])}},created(){this.dades_ordenades=[...this.dades],this.ordenarNom()}},l=r,n=a(1656),d=(0,n.A)(l,t,i,!1,null,"4d09e320",null),m=d.exports}}]);
//# sourceMappingURL=365.4e08f088.js.map