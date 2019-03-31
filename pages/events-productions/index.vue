<template>
  <v-container grid-list-md>
    <v-layout 
      justify-center 
      text-sm-center 
      row>
      <v-flex
        xs12
        sm10
        lg8>
        <p class="primary--text center lato line text-xl pt-3">Events and Productions</p>
        <p class="text-xs grey--text pa-3">Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed.
        Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic. 
        Synth shabby chic trust fund knausgaard whatever microdosing. Prism tumblr selvage farm-to-table banjo. Post-ironic pour-over direct trade irony, drinking vinegar woke migas knausgaard meditation jianbing schlitz four loko ramps.</p>
      </v-flex>
    </v-layout>
    <v-layout 
      row 
      wrap
      justify-center>
      <overlay 
        v-for="(eventProd, index) in gallery" 
        :key="index" 
        :event-prod="eventProd"/>
    </v-layout>
  </v-container>
</template>

<script>
import overlay from '~/components/globals/image-overlay.vue'
import content from '~/assets/content/gallery.json'

export default {
  components: {
    overlay
  },
  data () {
    return {
      gallery: content
    }
  }
}
</script>
