<template>
  <v-container>
    <v-layout 
      class="pb-5" 
      text-xs-center 
      justify-center 
      row>
      <v-flex md8>
        <p class="primary--text lato line display-3 mt-5">{{ eventProd.title }}</p>
        <div class="body-text mar-left mar-right"> {{ eventProd.text }}</div>
      </v-flex>
    </v-layout>
    <div class="cards">
      <div  
        v-for="(image, index) in eventProd.images" 
        :key="index"
        class="card">
        <VueResponsiveImage
          :image-url="image.src"
          :width-on-screen="50"
          :width-on-screen-tablet="75"
          :width-on-screen-smartphone="100"
          @click.native="openGallery(index)"/>
      </div>
      <LightBox 
        ref="lightbox"
        :images="eventProd.images"
        :show-light-box="false" 
        :show-thumbs="false"/>
    </div>
  </v-container>
</template>

<script>
import LightBox from "~/components/lightbox/LightBox.vue"
import VueResponsiveImage from "~/components/ResponsiveImage.vue"

export default {
  components: {
    LightBox,
    VueResponsiveImage
  },
  data () {
    return {
      eventProd: {}
    }
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    },
  },
  async asyncData ({ $axios, params }) {
    try {
      const res = await $axios.$get(`/events-productions/${params.eventProd}.json`)
      return {eventProd: res}
    } catch (err) {
      throw err
    }
  }
}
</script>

<style scoped>
.cards {
  column-count: 3;
  column-gap: 1em;
}
.card {
  margin: 0 0 1em;
  width: 100%;
  transition: all 100ms ease-in-out;
  display: inline-block;
  cursor: pointer;
}
@media (max-width: 960px) {
  .cards {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .cards {
    column-count: 1;
  }
  .card {
    margin: 0 0 0;
  }
}
.card >>> img {
  display: block;
  width: 100%;
}
</style>
