<template>
    <div id="mosaic">
    <div class="container d-flex flex-wrap my-4" id="contenidor_mosaic">
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color!=='#ffffff'"
            class="casella" 
            :style="{backgroundColor:colla.codi_color}"
            v-b-popover.hover.bottom="colla.nom">
            </div>
        </div>
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color=='#ffffff'"
            class="casella" 
            :style="{backgroundColor:colla.codi_color}"
            v-b-popover.hover.bottom="colla.nom">
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

