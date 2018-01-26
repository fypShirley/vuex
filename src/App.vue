<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br/>
    <router-link to="/count">1.简单的vuex</router-link><br/>
    <router-link to="/countState">2.state状态对象</router-link><br/>
    <router-link to="/mutations">3.Mutations修改状态</router-link><br/>
    <router-link to="/getters">4.getters过滤和加工</router-link><br/>
    <router-link to="/actions">5.Actions异步修改状态</router-link><br/>
    <router-link to="/module">6.module模块组</router-link><br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
