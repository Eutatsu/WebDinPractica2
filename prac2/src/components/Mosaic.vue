<template>
    <div>
    <div class="container my-4 d-block" id="contenidor_mosaic">
        <form id="opcions" class="my-4">
            <div id="opcions-l1" class="d-flex justify-content-between mb-3">
                <b-form-input class="col-lg-3 col-md-5 col-sm-6 col-6" placeholder="Cerca colles o colors..."></b-form-input>
                <div class="d-flex algin-items-center">
                <label class="text-nowrap align-self-center m-0" for="ordena">Ordena per: </label>
                <select id="ordena" @change="ordenar($event)" class="form-control">
                    <b-form-select-option value="default">Defecte</b-form-select-option>
                    <b-form-select-option value="nom">Nom</b-form-select-option>
                    <b-form-select-option value="color">Color</b-form-select-option>
                    <b-form-select-option value="nomcolor">Nom Color</b-form-select-option>
                    <b-form-select-option value="llum">Lluminositat</b-form-select-option>
                </select>
                </div>
            </div>

            <div id="opcions-l2" class="text-left">
                <div class="d-md-flex justify-content-between">
                    <h4>Mostra:</h4>
                <div class="col-lg-6 col-md-8 col-12 d-flex text-nowrap" >
                    <label for="mida_rajoles">Mida tessel·les:</label>
                    <b-form-input id="mida_rajoles" type="range" v-model="mida" min="5" max="200" class="mx-2 col-8"></b-form-input>
                    <p >{{ mida }}px</p>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-6">
                        <div class="d-flex justify-content-between">
                    <h5>Tipus:</h5>
                    <b-form-checkbox>Seccions</b-form-checkbox>
                    </div>
                        <div class="d-md-flex">
                        <b-form-checkbox class="mx-2">Convencionals</b-form-checkbox>
                        <b-form-checkbox class="mx-2">Universitaries</b-form-checkbox>
                        <b-form-checkbox class="mx-2">Internacionals</b-form-checkbox>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex justify-content-between">
                    <h5>Estat:</h5>
                    <b-form-checkbox>Seccions</b-form-checkbox>
                    </div>
                        <div class="d-md-flex">
                        <b-form-checkbox class="mx-2">Actives</b-form-checkbox>
                        <b-form-checkbox class="mx-2">En formació</b-form-checkbox>
                        <b-form-checkbox class="mx-2">Desaparegudes</b-form-checkbox>
                        </div>
                    </div>
                </div>
            </div>
            
        </form>




        <div id="mosaic" class="d-flex flex-wrap justify-content-center">
        <div v-for="(colla,index) in dades_ordenades" :key="index">
            <div 
            v-if="colla.codi_color!=='#ffffff'"
            class="casella" 
            :id="'colla-'+index"
            :style="{backgroundColor:colla.codi_color}">
            <b-popover custom-class="text-center" :title=colla.nom :target="'colla-'+index" triggers="hover" placement="bottom" >
                <p>
                {{ colla.color_camisa }}<br>
                    
                <strong>Tipus:</strong> {{ colla.tipus }}<br>
                <strong>Estat:</strong> {{ colla.estat }}</p>
            </b-popover>
            </div>
            
        </div>

        
            
        </div>
        <h5>Colors desconeguts:</h5>
        
        <div id="mosaic_desconegut" class="d-flex flex-wrap">
            <div v-for="(colla,index) in dades_ordenades" :key="index">
                <div 
                v-if="colla.codi_color=='#ffffff'||colla.color_camisa=='Desconegut'"
                class="casella d-flex align-items-center justify-content-center" 
                :id="'colla-desconeguda-'+index"
                :style="{backgroundColor:colla.codi_color}">
                {{ colla.color_camisa }}
                <b-popover class="justify-center" :title=colla.nom :target="'colla-desconeguda-'+index" triggers="hover" placement="bottom">
                    <p>
                    {{ colla.color_camisa }}<br>
                        
                    <strong>Tipus:</strong> {{ colla.tipus }}<br>
                    <strong>Estat:</strong> {{ colla.estat }}</p>
                </b-popover>
                </div>
            </div>
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
                mida: 50
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
            }
            

        },
        created(){
            
            this.dades_ordenades=[...this.dades]
            },
            }
</script>

<style>


 .casella{
    width: 4rem;
    height: 4rem;
 }
 
</style>

