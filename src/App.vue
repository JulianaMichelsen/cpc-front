<template>
  <div id="app">
    <header>
    <h1>Projeto UPX - Facens - Análises de Sistemas</h1>
    </header>
    
     
    <img alt="Pegada de Carbono" src="./assets/banner.jpg" class="img-fluid">
    <br><br>
    <h2>Calculadora Pegada de Carbono</h2>

  <form>
    <div class="container">
      <div class="col-md-6 offset-md-3">
  <div class="mb-3 p-3 boxForm">
    
    <label for="consumoMensalDeAgua" class="form-label"><img src = "./assets/water-icon.svg" alt="water icon" width="40px"/> Qual seu consumo médio de água por mês (Litros)</label>
    <select class="form-select" aria-label="consumoMensalDeAgua">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="50">Em média 50 litros mensais</option>
      <option value="75">Em média 75 litros mensais</option>
      <option value="100">Em média 100 litros mensais</option>
      <option value="150">Em média 150 litros mensais</option>
      <option value="200">Em média 200 litros mensais</option>
    </select>
  </div>

  <div class="mb-3 p-3 boxForm">
    <label for="consumoMensalDeEnergia" class="form-label"><img src = "./assets/energy-icon.svg" alt="energy icon" width="40px"/>Qual seu consumo médio de energia elétrica por mês (kWh)</label>
    <select class="form-select" aria-label="consumoMensalDeEnergia">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="50">Em média 50 kWh mensais</option>
      <option value="75">Em média 75 kWh mensais</option>
      <option value="100">Em média 100 kWh mensais</option>
      <option value="150">Em média 150 kWh mensais</option>
      <option value="200">Em média 200 kWh mensais</option>
      <option value="250">Em média 250 kWh mensais</option>
    </select>
  </div>

  <div class="mb-3 p-3 boxForm">
    <label for="consumoMensalDeEnergia" class="form-label"><img src = "./assets/meat-icon.svg" alt="water icon" width="40px"/>Qual seu consumo médio de carne por mês (Kg)</label>
    <select class="form-select" aria-label="consumoMensalDeEnergia">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="0">Não consumimos carne</option>
      <option value="10">Em média 10 kg mensais</option>
      <option value="15">Em média 15 kg mensais</option>
      <option value="20">Em média 20 kg mensais</option>
      <option value="30">Em média 30 kg mensais</option>
      <option value="50">Em média 50 kg mensais</option>
    </select>
  </div>

  
  <button type="submit" class="btn btn-primary">Calcular</button>
  <hr>
  </div>
</div>
</form>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Roboto Mono", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  background: rgb(5, 5, 61);
  color: #ffffff;
  font-family: "Roboto Mono";
  padding: 10px;
  margin: 0;
  border-bottom: 4px solid rgb(1, 1, 109);
  position: fixed;
  width: 100%;
}

h1{
  

}

.boxForm{
  background: #dddddd;
  border-radius: 10px;
}

</style>
