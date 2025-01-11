<template>
    <div id="mosaic" class="d-flex flex-wrap justify-content-center">
        <div v-for="(colla,index) in filtrarDades" 
        :key="index"
        :class="casella" 
        tabindex="0"
        :id="'colla-'+id+'-'+index"
        :style="{ 
            width:mida + 'px',
            height:mida + 'px', 
            backgroundColor: perfilColor(colla)
            }">

            <p class="desconegut" v-if="seleccio=='desconeguts'" 
            :style="{fontSize:text+'px'}">
            {{ colla.color_camisa }}
        </p>
        <p v-if="perfil_color=='tritanopia'||perfil_color=='deuteranopia'||perfil_color=='monocrom'" 
            :style="{fontSize:text+'px'}">
            {{ colla.color_camisa }}
        </p>
            <b-popover custom-class="text-center" :title=colla.nom :target="'colla-'+id+'-'+index" triggers="hover focus blur" placement="bottom" >
                <p>
                <strong>{{ colla.color_camisa }}</strong><br>
                    
                <strong>Tipus:</strong> {{ formatDada(colla.tipus) }}<br>
                <strong>Estat:</strong> {{ formatDada(colla.estat) }}<br>
                <strong>Fundació:</strong> {{ colla.fundacio }}
                
            </p>
                <p v-if="colla.desaparicio!==null"><strong>
                        Desaparició:
                    </strong> {{ colla.desaparicio }}<br>
                </p>

                <p v-if="colla.refundacio!==null"> <strong>
                        Refundació:
                    </strong> {{ colla.refundacio }}<br>
                </p>
           
                
            </b-popover>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'MosaicRenderer',
    props:{
            llista: {
                type: Array,
                required:true
            },
            cerca: {
                type: String,
                default:""
            },
            mida:{
                type: String,
                default:"80"
            },
            seleccio:{
                type: String,
                default:""
            },
            tipus:{
                type: Array
            },
            estat:{
                type: Array
            },
            id:{
                type:String,
                default:"id"
            },
            perfil_color:{
                type:String,
                default:"default",
                required:false
            }
            
                },
        computed:{
            casella() {
                if (this.$route.name === 'cognitiu') {
                    return 'casella grow'; 
                }
                else{
                return 'casella';} 
    },
        

        filtrarDades(){
            return this.llista.filter(colla=>
            (
                this.eliminarAccents(colla.nom).includes(this.eliminarAccents(this.cerca)) 
                ||
                this.eliminarAccents(colla.color_camisa).includes(this.eliminarAccents(this.cerca))
            )
            &&
            this.tipus.includes(colla.tipus)
            &&
            this.estat.includes(colla.estat)
            &&(
                (
                colla.codi_color!=="#ffffff" 
                && 
                this.seleccio=="coneguts"
            )
            ||(
                (colla.codi_color=="#ffffff"||colla.color_camisa=="Desconegut")
                && 
                this.seleccio=="desconeguts")
            )
            )
            
        },

        
        
        
        text(){
            return this.mida/5
        }
    },
    methods:{

        eliminarAccents(str){
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
            },
            
        formatDada(estat){
            const mapaFormats={
                //Tipus
                convencional:"Convencional",
                universitaria:"Universitària",
                internacional:"Internacional",

                //Estats
                activa:"Activa",
                formacio:"En formació",
                desapareguda:"Desapareguda"
            };
            return mapaFormats[estat]|| "Desconegut"
        },
        perfilColor(colla){
            if (this.perfil_color==="default"){
                return colla.codi_color;
            }
            else if (this.perfil_color==="deuteranopia"){
                return colla.deuteranopia;
            }
            else if (this.perfil_color==="tritanopia"){
                return colla.tritanopia;
            }
            else if (this.perfil_color==="monocrom"){
                return "hsl(0,0%,"+colla.color_hsl[2]+"%)";
            }
            else if (this.perfil_color==="hsl"){
                return "hsl("+colla.color_hsl[0]+","+colla.color_hsl[1]+"%,"+colla.color_hsl[2]+"%)";
            }
            else{
                return "ffffff"
            }

        },




        },
            
    
}
</script>

<style>

.casella:hover{

outline:3px solid rgba(190, 190, 190, 0.75);
cursor: pointer;
z-index: 99999;
position:relative

}

.casella:focus{

outline:3px solid white;
cursor: pointer;
z-index: 99999;
position:relative

}

.popover p{margin-bottom:0px
}

.popover-body{
color:white
}


.popover-header:before{
display:none !important
}
.popover-header{
color:white;
background-color:rgba(42, 42, 42, 0.6);
}

.popover{
background-color:rgba(42, 42, 42, 0.6);
border-radius: 0px;
}

.popover .arrow{
display:none
}

</style>