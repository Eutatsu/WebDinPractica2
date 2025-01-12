<template>
  <div id="app">
    

  <b-navbar toggleable="md" type="dark" class="vermell justify-content-md-center">
    <div class="d-flex d-md-flex col-12 col-lg-12 col-xl-8 justify-content-between flex-wrap">
    <b-navbar-brand href="./"><img src="./assets/Mosaic-Logo-SF.png" width="50rem" class="mx-3">Mosaic Casteller</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        
        <b-nav-item to="./">Mosaic</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            Daltonisme
          </template>
         <b-dropdown-item to="/deuteranopia">Deuteranopia</b-dropdown-item>
          <b-dropdown-item to="/tritanopia">Tritanopia</b-dropdown-item>
          <b-dropdown-item to="/achromatopsia">Achromatopsia</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item to="/baixavisio">Baixa Visió</b-nav-item>
        
        <b-nav-item to="./cognitiu">Cognitiu</b-nav-item>
        <b-nav-item to="/motriu">Motriu</b-nav-item>
        
        <b-nav-item to="/about">Sobre el Mosaic</b-nav-item>
        <!--<b-nav-item ><router-link to="/hello">HelloWorld</router-link></b-nav-item>-->
      </b-navbar-nav>

      <!-- Right aligned nav items 
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Idioma" right>
          <b-dropdown-item href="#">CA</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>

      
      </b-navbar-nav>-->
    </b-collapse>
    
</div>
  </b-navbar>
  <main>

    <router-view/>

  </main>
  <footer class="vermell text-white pt-4 d-flex justify-content-center">
    <div class="row container" >
      <div class="col-sm">
      <h5>Creat per:</h5>
      <p>Eudald Cardozo Vallhonrat<br>@eutatsu</p>
      <p>David Garcia Aybar<br>@david_dga05</p>
    </div>
    <div class="col-sm">
      <h5>Referencies:</h5>
      <p>Dades extretes de ca.wikipedia.org</p>
    </div>
    <div class="col-sm d-flex">
      <b-nav vertical class="text-white col-6">
      <h6>Principal:</h6>
      <b-nav-item href="/">Mosaic</b-nav-item>
      <b-nav-item href="/about">Sobre el Mosaic</b-nav-item>
      </b-nav>
      <div>
      
      <b-nav vertical class="text-white col-6 text-nowrap">
        <h6>Simulacions d'accesibilitat:</h6>
      <b-nav-item href="/deuteranopia">Deuteranopia</b-nav-item>
      <b-nav-item href="/tritanopia">Tritanopia</b-nav-item>
      <b-nav-item href="/protanopia">Protanopia</b-nav-item>
      <b-nav-item href="/achromatopsia">Achromatopsia</b-nav-item>
      <b-nav-item href="/baixavisio">Baixa Visió</b-nav-item>
      <b-nav-item href="/cognitiu">Cognitiu</b-nav-item>
      <b-nav-item href="/motriu">Motriu</b-nav-item>
      </b-nav>
    </div>
    </div>
  </div>
    </footer>
    </div>

</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a242e;
  
  min-height: 100vh;
  display:grid;
  grid-template-rows: auto 1fr auto;
}

nav {
  padding: 30px;
}


main{

  flex:1
}

a{
  color:rgba(255, 255, 255, 0.60);
  font-weight: bold;
}

a:hover{
  color:rgba(255, 255, 255, 0.80);
  text-decoration: none;
}

.dropdown-item a{
  color: #2c3e50;
}

footer p{
  color:rgba(255, 255, 255, 0.75);
}

footer .nav-link{
  font-weight: normal;
}


.vermell{
  
    background-color:#dd1725
}

input[type="range"]::-webkit-slider-thumb{
  background-color:#dd1725
}

input[type="range"]::-moz-range-thumb{
  background-color:#dd1725
}

.vermell-vora{
  border: 3px solid #dd1725; 
}

.form-control{
  border-radius: 0px
}

.custom-control-input:checked ~ .custom-control-label::before{
    background-color:#dd1725;
    border-color:#dd1725
}

.casella p{
  color:white
}

.casella p.desconegut{
  color: #1a242e;
}

</style>
