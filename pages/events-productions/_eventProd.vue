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
        <img 
          v-lazy="image.src" 
          :alt="index"
          @click="openGallery(index)">
      </div>
      <Lightbox 
        ref="lightbox"
        :images="eventProd.images"
        :show-light-box="false" 
        :show-thumbs="false"/>
    </div>
  </v-container>
</template>

<script>
import Lightbox from 'vue-image-lightbox'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
  components: {
    Lightbox
  },
  data () {
    return {
      eventProd: {}
    }
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  },
  async asyncData ({ $axios, params, store }) {
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
/* .lightbox {
  z-index: 99 !important;
  padding: 6rem 8rem !important;
}
.lightbox__image img,
.lightbox__element {
  height: 100% !important;
} */
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
  /* .lightbox {
    padding: 2rem !important;
  } */
}
img {
  display: block;
  width: 100%;
}
</style>
