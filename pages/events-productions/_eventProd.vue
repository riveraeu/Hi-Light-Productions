<template>
  <v-container>
    <v-layout 
      class="pb-3" 
      text-xs-center 
      justify-center 
      row>
      <v-flex 
        xs12
        sm10
        lg8>
        <p class="primary--text center lato line text-xl pt-3">{{ eventProd.title }}</p>
        <div class="text-xs grey--text py-3"> {{ eventProd.text }}</div>
      </v-flex>
    </v-layout>
    <div class="image-cards">
      <div  
        v-for="(image, index) in eventProd.images" 
        :key="index"
        class="image-card">
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
.image-cards {
  column-count: 3;
  column-gap: 1em;
}
.image-card {
  margin: 0 0 1em;
  width: 100%;
  transition: all 100ms ease-in-out;
  display: inline-block;
  cursor: pointer;
}
.image-card >>> img {
  width: 100%;
}
@media (max-width: 1264px) {
  .image-cards {
    column-count: 2;
  }
}
@media (max-width: 600px) {
  .image-cards {
    column-count: 1;
  }
  .image-cards {
    margin: 0 0 0;
  }
}
.image-cards >>> img {
  display: block;
  width: 100%;
}
</style>
