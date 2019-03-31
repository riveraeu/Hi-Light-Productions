<template>
  <v-container>
    <h1 class="primary--text center lato text-lg my-5">Full Service</h1>
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
        md6
        lg4>
        <img 
          :src="service.icon" 
          alt="service.title">
        <h2 class="text-sm grey--text py-3">{{ service.title }}</h2>
        <p class="text-xs grey--text">{{ service.text }}</p>
      </v-flex>
    </v-layout>
    <Form />
  </v-container>
</template>

<script>
import fullServiceContent from "~/assets/content/full-service.json"
import Form from "~/components/globals/form.vue"

export default {
  components: {
    Form
  },
  data () {
    return {
      content: fullServiceContent
    } 
  }
}
</script>
