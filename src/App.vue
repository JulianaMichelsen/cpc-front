<template>
  <div id="app">
    <header>
    <h1>Projeto UPX - Facens - Análises de Sistemas</h1>
    </header>
    
     
    <img alt="Pegada de Carbono" src="./assets/banner.jpg" class="img-fluid">
    <br><br>
    <h2>Calculadora Pegada de Carbono</h2>

  <form @submit.prevent="calcularPegadaCarbono">
    <div class="container">
      <div class="col-md-6 offset-md-3">
  <div class="mb-3 p-3 boxForm">
    
    <label for="consumoMensalDeAgua" class="form-label"><img src = "./assets/water-icon.svg" alt="water icon" width="40px"/> Qual seu consumo médio de água por mês (Litros)</label>
    <select class="form-select" aria-label="consumoMensalDeAgua" id="consumoMensalDeAgua">
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
    <select class="form-select" aria-label="consumoMensalDeEnergia" id="consumoMensalDeEnergia">
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
    <select class="form-select" aria-label="consumoMensalDeCarne" id="consumoMensalDeCarne">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="0">Não consumimos carne</option>
      <option value="10">Em média 10 kg mensais</option>
      <option value="15">Em média 15 kg mensais</option>
      <option value="20">Em média 20 kg mensais</option>
      <option value="30">Em média 30 kg mensais</option>
      <option value="50">Em média 50 kg mensais</option>
    </select>
  </div>

  <div class="mb-3 p-3 boxForm">
    <label for="consumoMensalDeAlcool" class="form-label"><img src = "./assets/gasoline-icon.svg" alt="water icon" width="40px"/>Qual seu consumo médio de álcool por mês (Litros)</label>
    <select class="form-select" aria-label="consumoMensalDeAlcool" id="consumoMensalDeAlcool">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="0">Não consumimos álcool</option>
      <option value="10">Em média 10 litros mensais</option>
      <option value="15">Em média 15 litros mensais</option>
      <option value="20">Em média 20 litros mensais</option>
      <option value="30">Em média 30 litros mensais</option>
      <option value="50">Em média 50 litros mensais</option>
    </select>
  </div>

  <div class="mb-3 p-3 boxForm">
    <label for="consumoMensalDeGasolina" class="form-label"><img src = "./assets/gasoline-icon.svg" alt="water icon" width="40px"/>Qual seu consumo médio de gasolina por mês (Litros)</label>
    <select class="form-select" aria-label="consumoMensalDeGasolina" id="consumoMensalDeGasolina">
      <option selected>Selecione a opção que se assemelha com o seu consumo</option>
      <option value="0">Não consumimos gasolina</option>
      <option value="10">Em média 10 litros mensais</option>
      <option value="15">Em média 15 litros mensais</option>
      <option value="20">Em média 20 litros mensais</option>
      <option value="30">Em média 30 litros mensais</option>
      <option value="50">Em média 50 litros mensais</option>
    </select>
  </div>

  <button type="submit" class="btn btn-primary">Calcular</button>
  <hr>
  </div>
</div>
</form>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

<div id="resultados">
  <h2>Resultados:</h2>
      <ul v-if="resultados">
        <li>Emissão Água: {{ resultados['Emissão Água'] }}</li>
        <li>Emissão Carne: {{ resultados['Emissão Carne'] }}</li>
        <li>Emissão Energia: {{ resultados['Emissão Energia'] }}</li>
        <li>Emissão Gasolina: {{ resultados['Emissão Gasolina'] }}</li>
        <li>Emissão Álcool: {{ resultados['Emissão Álcool'] }}</li>
        <li>TotalEmissao: {{ resultados['TotalEmissao'] }}</li>
      </ul>
</div>

  </div>

  
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      resultados: null
    }
  },
  methods: {
    async calcularPegadaCarbono() {
      const consumoAgua = parseInt(document.getElementById('consumoMensalDeAgua').value);
      const consumoEnergia = parseInt(document.getElementById('consumoMensalDeEnergia').value);
      const consumoCarne = parseInt(document.getElementById('consumoMensalDeCarne').value);
      const consumoAlcool = parseInt(document.getElementById('consumoMensalDeAlcool').value);
      const consumoGasolina = parseInt(document.getElementById('consumoMensalDeGasolina').value);
      

      const data = {
        numero_consumo_agua: consumoAgua,
        numero_consumo_carne: consumoCarne,
        numero_consumo_energia: consumoEnergia,
        numero_consumo_gasolina: consumoGasolina,
        numero_consumo_alcool: consumoAlcool
      };

      try {
        const response = await fetch('http://127.0.0.1:8000/calcular/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const result = await response.json();
        this.resultados = result;
        console.log(result); // Aqui você pode lidar com a resposta do servidor
      } catch (error) {
        console.error('Erro ao calcular a pegada de carbono:', error);
      }
    }
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
