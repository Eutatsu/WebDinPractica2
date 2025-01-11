<template>
    <div>
    <div class="container my-4 px-0 d-block" id="contenidor_mosaic">
        <form id="opcions" class="m-4">
            <div id="opcions-l1" class="d-flex justify-content-between flex-wrap">
                <b-form-input v-model="cerca" class="col-lg-3 col-md-5 col-sm-12 mb-3 vermell-vora" placeholder="Cerca colles o colors..."></b-form-input>
                <div class="d-flex algin-items-center mb-3">
                <label class="text-nowrap align-self-center m-0 " for="ordena">Ordena per: </label>
                <select id="ordena" @change="ordenar($event)" class="form-control vermell-vora">
                    <b-form-select-option value="nom">Nom</b-form-select-option>
                    <b-form-select-option value="color">Color</b-form-select-option>
                    <b-form-select-option value="nomcolor">Nom Color</b-form-select-option>
                    <b-form-select-option value="llum">Lluminositat</b-form-select-option>
                    <b-form-select-option value="default">Default</b-form-select-option>
                </select>
                </div>
            </div>

            <div id="opcions-l2" class="text-left">
                <div class="d-md-flex justify-content-between">
                    <h4>Mostra:</h4>
                <div class=" col-md-8 col-12 d-md-flex text-nowrap align-items-center justify-content-end" >
                    <label for="mida_rajoles" class="mb-0">Mida tessel·les:</label>
                    <div class="d-flex align-items-center justify-content-end">
                    <b-form-input id="mida_rajoles" type="range" v-model="mida" min="5" max="200" class="mx-2"></b-form-input>
                    <b-form-input class="form-control-sm col-1" style="min-width: 2.6rem;" v-model="mida" :placeholder="mida"></b-form-input>
                    <p class="mb-0">px</p>
                    </div>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-6">
                        <div class="d-flex justify-content-between">
                    <h5>Tipus:</h5>
                    <b-form-checkbox v-model="seccions_tipus" :value=true>Separa</b-form-checkbox>
                    </div>
                        <div class="d-lg-flex">
                            <b-form-checkbox-group v-model="tipus">
                                <b-form-checkbox class="mx-2" value="convencional">Convencionals</b-form-checkbox>
                                <b-form-checkbox class="mx-2" value="universitaria">Universitàries</b-form-checkbox>
                                <b-form-checkbox class="mx-2" value="internacional">Internacionals</b-form-checkbox>
                            </b-form-checkbox-group>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex justify-content-between">
                    <h5>Estat:</h5>
                    <b-form-checkbox v-model="seccions_estat" :value=true>Separa</b-form-checkbox>
                    </div>
                        <div class="d-lg-flex">
                        <b-form-checkbox-group v-model="estat">
                            <b-form-checkbox class="mx-2" value="activa" >Actives</b-form-checkbox>
                            <b-form-checkbox class="mx-2" value="formacio">En formació</b-form-checkbox>
                            <b-form-checkbox class="mx-2" value="desapareguda">Desaparegudes</b-form-checkbox>
                        </b-form-checkbox-group>
                        </div>
                    </div>
                </div>
            </div>
            
        </form>
       
        
        </div>
        <div class="container-fluid">
         <!--Seccions segons Tipus-->
         <div v-if="seccions_tipus==true && seccions_estat==false">
                <div  v-if="tipus.includes('convencional')">
                <h5 class="mt-3">Colles Convencionals</h5>
                <MosaicRenderer
                    :llista="dades_ordenades"
                    :cerca="cerca"
                    :mida="mida"
                    seleccio="coneguts"
                    
                    id="convencional"
                    :tipus="['convencional']"
                    :estat="estat"
                    :perfil_color="perfil_color"

                />
                </div>
                <div  v-if="tipus.includes('universitaria')">
                <h5 class="mt-3">Colles Universitàries</h5>
                <MosaicRenderer
                    :llista="dades_ordenades"
                    :cerca="cerca"
                    :mida="mida"
                    seleccio="coneguts"
                    
                    id="universitaria"
                    :tipus="['universitaria']"
                    :estat="estat"
                    :perfil_color="perfil_color"
                />
                </div>
                    <div  v-if="tipus.includes('internacional')">
                    <h5 class="mt-3">Colles Internacionals</h5>
                    <MosaicRenderer
                        :llista="dades_ordenades"
                        :cerca="cerca"
                        :mida="mida"
                        seleccio="coneguts"
                        
                        id="internacional"
                        :tipus="['internacional']"
                        :estat="estat"
                    :perfil_color="perfil_color"
                    />
                </div>
            </div>

        <!--Seccions segons Estat-->
            <div v-if="seccions_estat==true&&seccions_tipus==false">
                <div  v-if="estat.includes('activa')">
                <h5 class="mt-3">Colles Actives</h5>
                    <MosaicRenderer
                        :llista="dades_ordenades"
                        :cerca="cerca"
                        :mida="mida"
                        seleccio="coneguts"
                        
                        id="activa"
                        :tipus="tipus"
                        :estat="['activa']"
                    :perfil_color="perfil_color"
                    />
                </div>
                <div  v-if="estat.includes('formacio')">
                <h5 class="mt-3">Colles En formació</h5>
                    <MosaicRenderer
                        :llista="dades_ordenades"
                        :cerca="cerca"
                        :mida="mida"
                        seleccio="coneguts"
                        
                        id="formacio"
                        :tipus="tipus"
                        :estat="['formacio']"
                    :perfil_color="perfil_color"
                    />
                </div>
                <div  v-if="estat.includes('desapareguda')">
                    <h5 class="mt-3">Colles Desaparegudes</h5>
                    <MosaicRenderer
                        :llista="dades_ordenades"
                        :cerca="cerca"
                        :mida="mida"
                        seleccio="coneguts"
                        
                        id="desapareguda"
                        :tipus="tipus"
                        :estat="['desapareguda']"
                        :perfil_color="perfil_color"
                        />
                </div>
            </div>

            <!-- Mosaic per defecte -->
            <div v-else-if="(seccions_estat==false&&seccions_tipus==false)||(seccions_estat==true&&seccions_tipus==true)">
                <MosaicRenderer
                    :llista="dades_ordenades"
                    :cerca="cerca"
                    :mida="mida"
                    seleccio="coneguts"
                    
                    id="coneguts"
                    :tipus="tipus"
                    :estat="estat"
                    :perfil_color="perfil_color"
                    
                />  
            </div>
            <br>
        <h5>Colles amb Colors Desconeguts:</h5>
        <MosaicRenderer
        id="desconeguts"
        :llista="dades_ordenades"
        :cerca="cerca"
        :mida="mida"
        seleccio="desconeguts"
        
        :tipus="tipus"
        :estat="estat"
        />
        
    </div>
</div>
</template>

<script>
import dades from '../json/dades_colles_hsl.json'
import MosaicRenderer from '@/components/MosaicRenderer.vue';
export default{
        components:{
            MosaicRenderer
        },
        data(){
              return{
                dades,
                dades_ordenades:[],
                mida:"80",
                cerca: '',
                tipus: ["convencional","universitaria","internacional"],
                estat: ["activa","formacio","desapareguda"],
                seccions_tipus: false,
                seccions_estat: false,
                perfil_color:"tritanopia"
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
            

        },
        created(){
            
            this.dades_ordenades=[...this.dades]
            this.ordenarNom()
            },
            }
</script>