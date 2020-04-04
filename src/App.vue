<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import "@/assets/css/_variables.scss";
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: $blue;
}
h1, h2 {
  color: $darkgrey;
}
h2 {
  font-weight: normal;
}
.container {
  max-width: 900px;
  margin: auto;
  float: none;
  padding: 16px 24px;
}
.buy-button {
      padding: 8px 24px;
      background-color: $green;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
</style>
