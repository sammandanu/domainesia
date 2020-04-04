<template>
  <div class="recomendation">
      <div class="left">
        <div class="name">{{name}}<b>{{dot}}</b></div>
        <div class="price">Rp.{{ rupiah(price) }}</div>
      </div>
      <div class="right">
        <button class="buy-button" @click="buy()">Buy</button>
      </div>

  </div>
</template>

<script>
import currency from '@/mixins/currency'
export default {
  name: "Recomendation",
  props: {
    name: String,
    dot:String,
    price:null
  },
  mixins:[currency],
  methods: {
    buy: function () {
        this.$emit('buy')
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/css/_variables.scss";
.recomendation {
  display: flex;
  align-items: center;
  .left {
    flex: 1;
    .name {
      color: $darkgrey;
      margin-bottom: 8px;
    }
    .price {
      color: $blue;
      font-size: 12px;
    }
  }
}
</style>
