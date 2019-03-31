<template>
  <div>
    <v-container>
      <h1 class="primary--text center lato text-lg my-5">Rental Process</h1>
      <v-layout 
        row 
        wrap 
        text-xs-center 
        justify-space-around>
        <v-flex
          v-for="(service, index) in content" 
          :key="index"
          class="card"
          xs12
          sm8
          md5
          lg4>
          <img 
            :src="service.icon" 
            alt="service.title">
          <h2 class="text-sm grey--text py-3">{{ service.title }}</h2>
          <p class="text-xs grey--text">{{ service.text }}</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <h1 class="primary--text center lato text-lg my-5">Rental Items</h1>
      <v-layout 
        row 
        wrap 
        justify-center>
        <v-flex 
          v-for="(product, index) in products" 
          :key="index"
          xs12
          sm6
          lg4>
          <productItem :product="product" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import rentalSteps from "~/assets/content/rental-steps.json"
import rentalItems from "~/assets/content/rental-items.json"
import productItem from "~/components/product-item"

export default {
  components: {
    productItem
  },
  data () {
    return {
      content: rentalSteps,
      products: rentalItems
    }
  },
  mounted () {
    this.$store.dispatch('rentals/showCart')
  }
}
</script>

