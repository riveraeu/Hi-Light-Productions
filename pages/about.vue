<template>
  <v-container>
    <v-layout
      class="mb-5"
      row 
      wrap
      justify-space-around>
      <v-flex 
        sm8 
        lg6
        text-xs-center>
        <h1 class="primary--text bold lato text-lg py-3">About</h1>
        <p class="text-sm medium grey--text">Founder of Hi Light Productions, Harrison Moye</p>
        <VueResponsiveImage
          :image-url="'https://res.cloudinary.com/rivera-web-solutions/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1547832935/HiLightProduction/headshot.jpg'"
          :alt="'picture of harrison'"
          :width-on-screen="50"
          :width-on-screen-tablet="75"
          :width-on-screen-smartphone="100"
          :image-class="'profile-picture w-h-100'"
        />
        <p class="text-xs grey--text py-5"> After obtaining his certificate in Technical Theater Craft and Design from Pacific Conservatory Theatre.
        Harrison returned to the North Bay to continue his passion of working in the arts.
        He gained experience working for different production and theatre companies around The Bay and got to work in places like The Legion of Honor, The Asian Art Museum, Alcatraz, and The Mondavi Center in Davis.
        He’s excited to bring HiLight to life and bring quality service to the Bay Area!</p>
        <v-icon x-large>highlight</v-icon><span class="anton primary--text text-md">Hi Light Productions</span>
        <p class="text-xs grey--text py-5">HiLight brings quality production and consulting to events and theatre both big and small.
        Whether you are in need of equipment for a backyard event or consulting and set up for a large scale production, we’ve got you covered.
        Currently based out of San Rafael, CA, the goal of HiLight Productions is, to bring thoughtful and affordable production elements to local artists and companies. When art thrives so does the humanity.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueResponsiveImage from "~/components/ResponsiveImage.vue"

export default {
  components: {
    VueResponsiveImage
  }
}
</script>

<style>
.profile-picture {
  border-radius: 9999px;
  height: 16rem;
  width: 16rem;
}
</style>
