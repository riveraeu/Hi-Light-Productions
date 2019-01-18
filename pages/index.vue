<template>
  <div>
    <div id="hero-image">
      <div 
        id="hero-image-text"
        class="white--text">
        <h1 class="abril text-lg">Hi Light Productions</h1>
        <h2 class="text-md">Bay Area Event Lighting</h2>
        <p class="text-sm">Looking for a suberb lighting experience? Hi Light is here to solve your problems, with profesional event and stage lighting. Get in contact today for your next big event.</p>
        <v-btn
          color="#010019" 
          class="mt-3 white--text bold" 
          dark 
          to="/lights/services">Get Started</v-btn>
      </div>
    </div>
    <v-container 
      class="mt-5" 
      fluid>
      <h1 class="primary--text center lato text-lg my-5">Services</h1>
      <v-layout 
        row 
        wrap 
        text-xs-center 
        justify-space-around>
        <v-flex
          v-for="(service, index) in content.services" 
          :key="index"
          class="card"
          md4>
          <img 
            :src="service.icon" 
            alt="service.title">
          <h2 class="text-sm grey--text py-3">{{ service.title }}</h2>
          <p class="text-xs grey--text">{{ service.text }}</p>
        </v-flex>
        <v-btn
          class="mb-5 mt-5" 
          color="primary" 
          to="/lights/services">Services</v-btn>
      </v-layout>
    </v-container>
    <v-container 
      class="my-5 grey lighten-4" 
      fluid>
      <v-layout 
        row
        wrap
        justify-space-around>
        <v-flex 
          md4 
          text-xs-center>
          <p class="primary--text center lato text-md mt-5">{{ content.eventsProductions.title }}</p>
          <p class="text-xs grey--text">{{ content.eventsProductions.text }}</p>
          <v-btn 
            class="my-5" 
            to="/events-productions/gallery">View more</v-btn>
        </v-flex>
        <v-flex 
          md4
          elevation-1>
          <VueResponsiveImage
            :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,%width%,%height%/v1524165567/HiLightProduction/The%20Heathers/heathers0.jpg'"
            :alt="'Heathers Production'"
            :width-on-screen="50"
            :width-on-screen-tablet="75"
            :width-on-screen-smartphone="100"
            :image-class="'w-h-100'"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container 
      class="mt-5" 
      fluid>
      <v-layout 
        row 
        wrap
        justify-space-around>
        <v-flex 
          class="vertical-align-2" 
          md4 
          text-xs-center>
          <v-icon x-large>highlight</v-icon><span class="anton primary--text text-md">Hi Light Productions</span>
        </v-flex>
        <v-flex 
          md6 
          text-xs-center >
          <p class="primary--text center lato text-md mt-5">{{ content.about.title }}</p>
          <p class="text-xs grey--text">{{ content.about.text }}</p>
          <v-btn 
            class="mt-5" 
            to="/about">Read More</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import frontPageContent from "~/assets/content/front-page.json"
import VueResponsiveImage from "~/components/ResponsiveImage.vue"

export default {
  components: {
    VueResponsiveImage
  },
  data () {
    return {
      content: frontPageContent
    } 
  }
}
</script>

<style scoped>
  .card {
    padding: 2rem 1rem;
  }
  .card img {
    width: 5rem;
  }
  #hero-image {
    height: 90vh;
    background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_50,c_scale,w_663/v1547755669/HiLightProduction/chris-barbalis-1283444-unsplash-min.jpg");
    background-size: cover;
    background-position: initial;
    display: flex;
    align-items: center;
  }
  #hero-image-text {
    text-align: center;
    margin: 0 1rem;
  }
  @media (min-width: 768px) {
    #hero-image {
      background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_50,c_scale,w_873/v1547598009/HiLightProduction/chris-barbalis-1283444-unsplash-min.jpg");
    }
  }
  @media (min-width: 1024px) {
    #hero-image {
      background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/b_black,o_50,c_scale,w_1139/v1547598009/HiLightProduction/chris-barbalis-1283444-unsplash-min.jpg");
    }
    #hero-image-text {
      width: 60%;
      margin: 0 auto;
    }
  }
  @media (min-width: 1264px) {
    #hero-image {
      background-image: url("https://res.cloudinary.com/rivera-web-solutions/image/upload/c_scale,w_2194/v1547598009/HiLightProduction/chris-barbalis-1283444-unsplash-min.jpg");
    }
    #hero-image-text {
      position: absolute;
      right: 5%;
      top: 15%;
      text-align: center;
      width: 40%;
    }
  }
</style>
