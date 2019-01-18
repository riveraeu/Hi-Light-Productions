<template>
  <div class="">
    <v-toolbar
      color="#010019" 
      fixed 
      app>
      <v-toolbar-side-icon 
        class="hidden-md-and-up white--text" 
        @click="drawer = !drawer" />
      <v-toolbar-items class="ml-0">
        <v-btn 
          flat 
          to="/" 
          color="white">
          <v-icon >highlight</v-icon>
          <v-toolbar-title class="anton primary--text">Hi Light Productions</v-toolbar-title>
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down mr-0">
        <v-btn  
          v-for="(link, index) in navigation" 
          :key="index" 
          :to="link.to"
          flat
          color="white">
        <v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
        <v-btn 
          v-show="showCart"  
          to="/lights/rentals/cart"
          flat>
          <v-badge 
            right 
            overlap>
            <span slot="badge">{{ cartTotal }}</span>
            <v-icon 
              large 
              color="white">shopping_cart</v-icon>
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer 
      v-model="drawer"
      dark
      temporary
      fixed>
      <v-btn  
        v-show="showCart"
        to="/lights/rentals/cart"
        flat
        class="mt-3"
      >
        <v-badge overlap>
          <span slot="badge">{{ cartTotal }}</span>
          <v-icon large>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-divider />
      <div 
        v-for="(link, index) in navigation" 
        :key="index">
        <v-list-tile   
          :to="link.to"
          avatar>
          <v-list-tile-avatar>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="title">{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navigation: [
        {title: 'Services', to: '/lights/services', icon: 'lightbulb_outline'},
        {title: 'Events & Productions', to: '/events-productions/gallery', icon: 'wb_incandescent'},
        {title: 'About', to: '/about', icon: 'face'}
      ]
    }
  },
  computed: {
    cartTotal () {
      return this.$store.state.rentals.cartTotal
    },
    showCart () {
      return this.$store.state.rentals.showCart
    }
  }
}
</script>

<style>
.v-toolbar__content {
  padding: 0 !important;
  margin-left: 6px !important;
}
.theme--dark.v-navigation-drawer {
  background-color: #010019;
  color: white;
}
</style>

