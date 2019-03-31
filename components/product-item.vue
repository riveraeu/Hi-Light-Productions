<template>
  <v-card>
    <v-card-media 
      :src="product.url" 
      height="30vh" 
      contain />
    <v-card-title primary-title>
      <div>
        <h3 class="grey--text text--darken-1"> {{ product.title }}</h3>
        <p 
          class="body-text" 
          v-html="product.description" />
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn 
        color="primary" 
        @click="addToCart(product)">
        ${{ product.price }} per day - Add to Cart
      </v-btn>
    </v-card-actions>
    <v-snackbar 
      :timeout="3000" 
      v-model="snackbar">Item added to cart
      <v-btn 
        flat 
        color="primary" 
        to="/services/cart">View Cart</v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>

export default {
  props: {
    "product": {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      snackbar: false
    }
  },
  methods: {
    addToCart (item) {
      this.snackbar = true
      this.$store.commit('rentals/addToCart', item)
    }
  }
}
</script>
