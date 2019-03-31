<template>
  <div class="">
    <v-toolbar
      color="#010019"
      dark
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
        <v-menu :nudge-width="100">
          <v-toolbar-title 
            slot="activator">
            <span>Services</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
          <v-list>
            <v-list-tile
              v-for="(service, index) in services"
              :key="index"
              :to="service.to">
              <v-list-tile-title v-text="service.title" />
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn  
          v-for="(link, index) in navigation" 
          :key="index" 
          :to="link.to"
          flat
          color="white">
        <v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
        <v-btn 
          v-show="showCart"  
          to="/services/cart"
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
    <!-- Mobile Nav -->
    <v-navigation-drawer 
      v-model="drawer"
      dark
      temporary
      fixed>
      <v-btn  
        v-show="showCart"
        to="/services/cart"
        flat
        class="mt-3">
        <v-badge overlap>
          <span slot="badge">{{ cartTotal }}</span>
          <v-icon large>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-list>
        <v-list-group>
          <template slot="activator">
            <v-list-tile>
              <v-list-tile-title>Services</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(service, i) in services"
            :key="i"
            :to="service.to">
            <v-list-tile-content>
              <v-list-tile-title>{{ service.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-for="(link, index) in navigation"
          :key="index" 
          :to="link.to"
          avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      navigation: [
        // {title: 'Services', to: '/lights/services', icon: 'lightbulb_outline'},
        {title: 'Events & Productions', to: '/events-productions/', icon: 'wb_incandescent'},
        {title: 'About', to: '/about', icon: 'face'}
      ],
      services: [
        {title: 'Full Service', to: '/services/full-service'},
        {title: 'Consultation', to: '/services/consultation'},
        {title: 'Rentals', to: '/services/rentals'}
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

