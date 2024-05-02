<template>
  <div id="app">
    <header>
    <h1>Calculadora Pegada de Carbono</h1>
    </header>
    
     
    <img alt="Pegada de Carbono" src="./assets/banner.jpg" class="img-fluid">
    <br><br>
    <h2>Projeto UPX - Facens - Análises de Sistemas</h2>

  <form>
    <div class="container">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Qual seu consumo médio de água por mês (Litros)</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
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

</style>
