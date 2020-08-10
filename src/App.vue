<template>
  <v-app>
    <v-tabs fixed-tabs  background-color="indigo" dark>
      <v-tab to="/novo">Novo</v-tab>
      <v-tab to="/lista"> Clientes</v-tab>
    </v-tabs>
  <router-view></router-view>
  </v-app>
</template>

<style>

</style>
