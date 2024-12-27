<template>
    <div id="mosaic" class="d-flex flex-wrap justify-content-center">
        <div v-for="(colla,index) in dades_ordenades" :key="index">
            <div 
            v-if="
            colla.codi_color!=='#ffffff' 
            && 
            (
                eliminarAccents(colla.nom).includes(eliminarAccents(cerca))
                ||
                eliminarAccents(colla.color_camisa).includes(eliminarAccents(cerca))
                )"
            class="casella" 
            tabindex="0"
            :id="'colla-'+index"
            :style="{ 
                width:mida + 'px',
                height:mida+'px', 
                backgroundColor:colla.codi_color
                }">
            <b-popover custom-class="text-center" :title=colla.nom :target="'colla-'+index" triggers="hover focus blur" placement="bottom" >
                <p>
                <strong>{{ colla.color_camisa }}</strong><br>
                    
                <strong>Tipus:</strong> {{ formatDada(colla.tipus) }}<br>
                <strong>Estat:</strong> {{ formatDada(colla.estat) }}</p>
                
            </b-popover>
            </div>
            
        </div>
    </div>
</template>

<script>
import dades from '../json/dades_colles_color.json'
export default{
        data(){
              return{
                dades,
                dades_ordenades:[],
                mida: 80,
                cerca: '',
                    }
                
                },
        computed:{
            text(){
            return this.mida/5
        }
    },
    methods:{
            ordenarNom(){
                this.dades_ordenades.sort((a,b)=>a.nom.localeCompare(b.nom))
            },
            ordenarColor(){
                this.dades_ordenades.sort((a,b)=>a.color_hsv[0] - b.color_hsv[0])
                this.dades_ordenades.sort((a,b)=>(a.color_hsv[1]<=10) - (b.color_hsv[1]<=10))
            },
            ordenarLlum(){
                this.dades_ordenades.sort((a,b)=>a.color_hsv[2] - b.color_hsv[2])
            },
            ordenarNomColor(){
                this.dades_ordenades.sort((a,b)=>a.color_camisa.localeCompare(b.color_camisa))
            },
            
            ordenar(event){
                const ordre = event.target.value
                console.log(ordre)
                if (ordre=="nom"){
                    this.ordenarNom()
                }
                if (ordre=="color"){
                    this.ordenarColor()
                }
                if (ordre=="nomcolor"){
                    this.ordenarNomColor()
                }
                if (ordre=="llum"){
                    this.ordenarLlum()
                }
                if (ordre=="default"){
                    
            this.dades_ordenades=[...this.dades]        
                }
            },
            
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
            }

        },
        created(){
            
            this.dades_ordenades=[...this.dades]
            this.ordenarNom()
            },
            
    
}
</script>