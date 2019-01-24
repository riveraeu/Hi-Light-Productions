<template>
  <v-flex 
    class="box"
    sm5
    text-xs-center
    @mouseover="active = true"
    @mouseleave="active = false">
    <nuxt-link :to="{path: '/events-productions/'+eventProd.slug, params: {slug: eventProd.slug}}">
      <VueResponsiveImage
        :image-url="eventProd.url"
        :alt="eventProd.slug"
        :width-on-screen="50"
        :width-on-screen-smartphone="100"
        :image-class="'w-h-100'"
      />
      <div 
        v-show="active" 
        class="image-overlay">
        <h3 class="text-md white--text image-title"> {{ eventProd.title }}</h3>
      </div>
    </nuxt-link>
  </v-flex>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue"

export default {
  components: {
    VueResponsiveImage
  },
  props: {
    eventProd: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.box {
  position: relative;
}
.image-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(38, 50, 56, 0.7);
  display: table;
}
.image-title {
  display: table-cell;
  vertical-align: middle;
}
</style>
