<template>
    <div id="mosaic">
    <div class="container d-flex flex-wrap my-4" id="contenidor_mosaic">
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color!=='#ffffff'"
            class="casella" 
            :id="'colla'+index"
            :style="{backgroundColor:colla.codi_color}"
            >
            </div>
            <b-popover :target="'colla'+index" triggers="hover" placement="bottom">
               <p>{{colla.nom}}<br>{{ colla.color_camisa }}</p>
            </b-popover>
        </div>
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color=='#ffffff'"
            class="casella" 
            :style="{backgroundColor:colla.codi_color}"
            v-b-popover.hover.bottom="colla.nom<br>colla.nom_color">
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
    width: 80px;
    height: 80px;
 }
 
</style>

