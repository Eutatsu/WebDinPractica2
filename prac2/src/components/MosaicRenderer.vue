<template>
    <div id="mosaic" class="d-flex flex-wrap justify-content-center">
        <div v-for="(colla,index) in filtrarDades" 
        :key="index"
        class="casella" 
        tabindex="0"
        :id="'colla-'+id+'-'+index"
        :style="{ 
            width:mida + 'px',
            height:mida + 'px', 
            backgroundColor:colla.codi_color
            }">

            <p v-if="seleccio=='desconeguts'" 
            :style="{fontSize:text+'px'}">
            {{ colla.color_camisa }}
        </p>
            <b-popover custom-class="text-center" :title=colla.nom :target="'colla-'+id+'-'+index" triggers="hover focus blur" placement="bottom" >
                <p>
                <strong>{{ colla.color_camisa }}</strong><br>
                    
                <strong>Tipus:</strong> {{ formatDada(colla.tipus) }}<br>
                <strong>Estat:</strong> {{ formatDada(colla.estat) }}</p>
                
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
            }
                },
        computed:{
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