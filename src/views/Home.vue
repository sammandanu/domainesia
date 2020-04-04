<template>
  <div class="home">
    <div class="container">
      <div class="content-container">
        <h1>Search Your Domain</h1>
        <div class="search">
          <div class="input-container">
            <input @keyup.enter="search()" :class="{ 'red': alert }" v-model="name" type="text" placeholder="namadomain.com">
            <button @click="search()"><i class="fas fa-search"></i> Search</button>
          </div>
          <span v-if="alert">sorry, domain isn't available</span>
        </div>
        <h2 v-if="recom">Recomendation for you</h2>
        <div class="recomendation-container" v-if="recom">
          <Recomendations v-for="enable in SAvailable" :key="enable.id" :name="namesplit" :dot="enable.dot" :price="enable.price" @buy="buy(enable.id)"/>
        </div>
        <div class="available" v-if="available">
          <div class="text">Domain is Available!</div>
          <button class="buy-button" @click="buy()">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Recomendations from "@/components/Recomendations.vue"

export default {
  name: "Home",
  components: {
    Recomendations
  },
  data: function () {
      return {
          name:null,
          namesplit:null,
          recom:false,
          alert:false,
          available:false,
          SAvailable:null
      }
  },
  mounted: function() {
    this.SAvailable = this.$store.state.available
    console.log(this.SAvailable)
  },
  methods: {
    search: function() {
      this.recom = false
      this.alert = false
      this.available = false
     if (!this.name) {
       alert("Harap Mengisi Data")
     }
     else {
        var splitter = this.name.split(".")
        var split = "." + splitter[1]
        this.namesplit = splitter[0]
        if (this.namesplit == "") {
          alert("Harap Mengisi nama Domain")
          return
        }
        if (splitter.length<2) {
          this.namesplit = this.name
          this.recom = true
          return
        }
       for (var i=0;i<this.SAvailable.length;i++) {
         if (split == this.SAvailable[i].dot) {
           this.available = true
           return
         }
       }
       if (this.available == false) {
          this.alert = true
          this.recom = true
       }
     }
    },
    buy: function(id) {
      if (id) {
        this.$store.state.available.forEach(function (data) {
          if (id == data.id ) {
            this.name = this.namesplit + data.dot 
            this.recom = false
            this.alert= false
            this.available = true
          }
        }.bind(this));
      }
      else {
        this.available = false
        this.name = null
        alert("Terimakasih, Pembelian anda akan Diproses")

      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables.scss";
h2 {
  border-top: 2px dashed $grey;
  padding-top: 16px;
}
.available {
  display: flex;
  border-top: 2px dashed $grey;
  padding-top: 16px;
  .text {
    flex: 1;
    font-size: 24px;
    font-weight: bold;
    color: $green;
  }
}
.recomendation {
  margin: 24px 0;
  &:last-child {
    margin-bottom: 0;
  }
}
.content-container {
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 3px 5px 25px 6px rgba(0,0,0,0.10);
  -moz-box-shadow: 3px 5px 25px 6px rgba(0,0,0,0.10);
  box-shadow: 3px 5px 25px 6px rgba(0,0,0,0.10);
}
.input-container {
  display: flex;
  margin-bottom: 16px;
  input {
    flex: 1;
    padding: 16px;
    border-radius: 24px 0 0 24px;
    border: 1px solid $grey;
    outline: none;
  }
  .red {
    border: 1px solid $red;
  }
  ::placeholder {
    color: $grey;
  }
  button {
    border-radius: 0 24px 24px 0;
    background-color: $blue;
    color: #fff;
    padding: 16px;
    border: 1px solid $blue;
    margin-left: -2px;
    outline: none;
  }
}
span {
  margin: 16px;
  font-style: italic;
  color: $red;
  font-size: 12px;
  margin-bottom: 16px;
}
</style>
