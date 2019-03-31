<template>
  <v-container>
    <v-layout
      justify-center
      class="mt-5">
      <v-flex
        v-show="cart"
        xs12
        m4>
        <h2 class="primary--text center lato text-lg">Get Started</h2>
      </v-flex>
    </v-layout>
    <v-form
      ref="form"
      value 
      lazy-validation>
      <v-layout
        wrap
        justify-center
        class="my-5">
        <v-flex
          xs12
          sm6
          lg3
          class="pr-4">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            prepend-icon="face"
            color="primary"
            label="Name"
            class="py-3"
            required />
          <v-text-field
            v-model="email"
            :rules="emailRules"
            prepend-icon="email"
            color="primary"
            label="E-mail"
            class="py-3"
            required />
          <v-text-field
            v-model="phone" 
            prepend-icon="phone" 
            color="primary" 
            label="Phone"
            class="py-3"
            required />
        </v-flex>
        <v-flex
          v-show="showOptions" 
          xs12
          sm6
          lg3
          class="px-4">
          <p class="text-xs grey--text">Hi Light offers the additional services listed below, check any you are interested in.</p>
          <v-checkbox 
            v-model="options" 
            color="primary" 
            label="Sound" 
            value="sound" 
            hide-details />
          <v-checkbox
            v-model="options" 
            color="primary" 
            label="Video"  
            value="video" 
            hide-details />
          <v-checkbox
            v-model="options" 
            color="primary"  
            label="Projection" 
            value="projection" 
            hide-details />
          <v-checkbox
            v-model="options" 
            color="primary" 
            label="Staging" 
            value="staging" 
            hide-details />
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        class="py-4">
        <v-flex
          v-show="showMessage"
          xs12
          sm6
          lg4>
          <v-textarea
            v-model="message"
            color="primary" 
            name="message" 
            label="Please tell us about your event"
            outline/>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-btn 
          :disabled="!valid"
          color="primary"
          @click="sendMail()">Send</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    cart: {
      type: Object,
      required: false,
      default () {
        return {}
      }
    },
    cartTotal: {
      type: Number,
      required: false,
      default: 0
    },
    totalCost: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      valid: true,
      service: this.$route.name,
      name: "",
      nameRules: [
        v => !!v || 'Name is required'
      ],
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      phone: "",
      options: [],
      message: "",
      // messageRules: [
      //     v => !!v || 'Message is required',
      //     v => (v && v.length >= 10) || 'Message must be more than 10 characters'
      //   ],
      showOptions: false,
      showMessage: false
    }
  },
  mounted () {
    if (this.service == "services-full-service") {
      this.showOptions = true
      this.showMessage = true
    } else if (this.service == "services-consultation") {
      this.showMessage = true
    }
  },
  methods: {
    sendMail () {
      if (this.$refs.form.validate()){
        var params = {
          service: this.service,
          name: this.name,
          email: this.email,
          phone: this.phone
        }
        var data = {
          service_id: 'gmail',
          user_id: 'user_FB7sBHlaDKaMvKdfJIhR7',
          template_id: 'hi_light_productions'
        }
        // need to change templates for email js
        if (this.service == "services-full-service") {
          var options = `
            <h3>Options</h3>
            <ul>`
            for (var option in this.options) {
              options += `<li>${this.options[option]}</li>`
            }
            options += `</ul>`
          params.options = options
        }
        if (this.service == "services-consultation" || this.service == "services-full-service") {
          var message = `
            <h3>Message</h3>
            <p>${this.message}</p>`
          params.message = message
        } 
        if (this.service == "services-cart") {
          var output = `
            <h3>Products</h3>
            <ul>`
            for (var product in this.cart) {
              output += `<li> <img src="${this.cart[product].url}" width="100" height="100">
              <p>${this.cart[product].title}</p>
              <p>Quantity: ${this.cart[product].count}</p>
              <p>Price: $${this.cart[product].price} per day</p>`
            }
            output += `
            </ul>
            <h3>Total</h3>
            <p>Number of Items: ${this.cartTotal}</p>
            <p>Total Price: $${this.totalCost} per day</p>
          `
          params.cart = output   
        }
        data.template_params = params
        this.$axios.$post('https://api.emailjs.com/api/v1.0/email/send', data)
        .then(function(response) {
          Vue.swal("Request Sent", "Thank you we will be in contact soon!", "success");
          //alert('SUCCESS!', response.status, response.text);
        }, function(error) {
          Vue.swal("Something went wrong", "Please check your connection and try again", "error");
          //alert('FAILED...', error);
        })
      }
    }
  }
}
</script>
