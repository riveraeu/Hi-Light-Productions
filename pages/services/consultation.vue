<template>
  <v-container>
    <v-layout>
      <v-flex>
        <h1 class="primary--text center lato text-lg my-5">Consultations</h1>
      </v-flex>
    </v-layout>
    <v-layout 
      wrap
      justify-center>
      <v-flex 
        xs6
        sm2
        lg1>
        <img 
          src="/images/lights/consultation/ideas.svg" 
          alt="ideas"
          class="px-2">
      </v-flex>
      <v-flex 
        xs12
        md10
        lg6>
        <p class="text-xs grey--text px-4">Not sure what you need? Don’t worry we can help. Lighting, Sound, Projection, Staging. We can help you figure out exactly what you need, and what you don’t.
        We offer free phone consultations or we can come and help you design on the spot, with your budget in mind. We’ll even help you get the equipment and set up if needed.
        Click the button below to send us an email to get started!</p>
      </v-flex>
    </v-layout>
    <Form />
  </v-container>
</template>

<script>
import Form from '~/components/globals/form'
export default {
  components: {
    Form
  }
}
</script>
