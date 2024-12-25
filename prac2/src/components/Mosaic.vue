<template>
    <div id="mosaic">
    <div class="container d-flex flex-wrap my-4 justify-content-center" id="contenidor_mosaic">
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color!=='#ffffff'"
            class="casella" 
            :id="'colla-'+index"
            :style="{backgroundColor:colla.codi_color}">
            </div>
            <b-popover custom-class="text-center" :title=colla.nom :target="'colla-'+index" triggers="hover" placement="bottom" >
                <p>
                {{ colla.color_camisa }}<br>
                    
                <strong>Tipus:</strong> {{ colla.tipus }}<br>
                <strong>Estat:</strong> {{ colla.estat }}</p>
            </b-popover>
        </div>
        <div v-for="(colla,index) in data" :key="index">
            <div 
            v-if="colla.codi_color=='#ffffff'"
            class="casella" 
            :id="'colla-desconeguda-'+index"
            :style="{backgroundColor:colla.codi_color}">
            x
            </div>
            <b-popover class="justify-center" :title=colla.nom :target="'colla-desconeguda-'+index" triggers="hover" placement="bottom">
                <p>
                {{ colla.color_camisa }}<br>
                    
                <strong>Tipus:</strong> {{ colla.tipus }}<br>
                <strong>Estat:</strong> {{ colla.estat }}</p>
            </b-popover>
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

