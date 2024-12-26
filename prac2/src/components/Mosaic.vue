<template>
    <div>
    <div class="container my-4 d-block" id="contenidor_mosaic">
        <form id="opcions" class="my-4">
            <div id="opcions-l1" class="d-flex justify-content-between mb-3">
                <b-form-input class="col-lg-3 col-md-5 col-sm-6 col-6" placeholder="Cerca colles o colors..."></b-form-input>
                <div class="d-flex algin-items-center">
                <label class="text-nowrap align-self-center m-0" for="ordena">Ordena per: </label>
                <b-form-select id="ordena" class="">
                    <b-form-select-option>Defecte</b-form-select-option>
                    <b-form-select-option>Color </b-form-select-option>
                    <b-form-select-option>Nom Color</b-form-select-option>
                </b-form-select>
                </div>
            </div>
            <div id="opcions-l2" class="text-left">
                <div class="d-flex justify-content-between">
                    <h4>Mostra:</h4>
                <div class="col-6 d-flex text-nowrap" >
                    <label for="mida_rajoles">Mida rajoles:</label>
                    <b-form-input id="mida_rajoles" type="range" ></b-form-input>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="col-6">
                        <div class="d-flex justify-content-between">
                    <h5>Tipus:</h5>
                    <b-form-checkbox>Secciona</b-form-checkbox>
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
                    <b-form-checkbox>Secciona</b-form-checkbox>
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
        <div v-for="(colla,index) in data" :key="index">
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
        <div v-for="(colla,index) in data" :key="index">
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
import data from '../json/dades_colles_color.json'
export default{
          data(){
              return{
                  data
              }
          }
      }
</script>

<style>


 .casella{
    width: 5rem;
    height: 5rem;
 }
 
</style>

