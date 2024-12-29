<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" class="vermell">
    <b-navbar-brand href="\"><img src="./assets/Mosaic-Logo.png" width="50rem" class="mx-3">Mosaic Casteller</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse " is-nav>
      <b-navbar-nav >
        <b-nav-item href=".\">Mosaic</b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            Daltonisme
          </template>
          <b-dropdown-item href="\deuteranopia">Deuteranopia</b-dropdown-item>
          <b-dropdown-item href="\tritanopia">Tritanopia</b-dropdown-item>
          <b-dropdown-item href="#">Achromatopsia</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="\about">Sobre el Mosaic</b-nav-item>
        <b-nav-item href="\hello">HelloWorld</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Idioma" right>
          <b-dropdown-item href="#">CA</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
        </b-nav-item-dropdown>

      
      </b-navbar-nav>
    </b-collapse>
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
    <div class="col-sm">
      <b-nav vertical class="text-white">
      <b-nav-item href="/">Mosaic</b-nav-item>
      <b-nav-item href="/">Deuteranopia</b-nav-item>
      <b-nav-item href="/">Tritanopia</b-nav-item>
      <b-nav-item href="/">Protanopia</b-nav-item>
      <b-nav-item href="/">Achromatopsia</b-nav-item>
      </b-nav>
    </div></div>
    </footer>
    </div>

</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  min-height: 100vh;
  display:grid;
  grid-template-rows: auto 1fr auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

main{

  flex:1
}


footer p{
  color:rgba(255, 255, 255, 0.75);
}

footer a{
  color:rgba(255, 255, 255, 0.5);
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


</style>
