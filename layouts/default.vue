<template>
  <v-app>
    <navbar/>
    <v-content>
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import navbar from '~/components/globals/navbar.vue'
import Footer from '~/components/globals/footer.vue'

export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style>
/* custom classes */
.card {
  padding: 2rem 1rem;
}
.card img {
  width: 5rem;
}
/* elements */
a {
  text-decoration: none;
}
img {
  width: 100%;
}
/* Sizing */
.w-h-100{
  width: 100%;
  height: 100%;
}
/* override */
.v-content {
  background: white;
}
/* typography */
.text-xl {
  font-size: 3.5rem;
}
.text-lg {
  font-size: 3rem;
}
.text-md {
  font-size: 2.5rem;
}
.text-sm {
  font-size: 2rem;
}
.text-xs {
  font-size: 1.5rem;
}
.bold {
  font-weight: bold;
}
.medium {
  font-weight: 500;
}
/* fonts */
.lato {
  font-family: 'Lato', sans-serif;
}
.abril {
  font-family: 'Abril Fatface', cursive;
}
.lobster {
  font-family: 'Lobster', cursive;
}
.anton {
  font-family: 'Anton', sans-serif;
}
/* Spacing */
.center {
  text-align: center;
}
.mar-left{
  margin-left: 5%;
}
.mar-right{
  margin-right: 5%;
}
.vertical-align-2{
  margin: 20vh 0;
}
.vertical-align-1{
  margin-top: 15vh;
  margin-bottom: 15vh;
}
.grey-darken-1 {
  color: #757575;
}
/* fonts and colors */
.sub-header{
  color: #1DE9B6;
  font-family: 'Lobster', cursive;
  text-align: center;
}
.body-text {
  font-size: 18px;
  color: #9E9E9E;
  font-family: 'Oxygen', sans-serif;
}
.secondary {
  background-color: #1DE9B6;
}
.secondary--text {
  color: #1DE9B6;
}
.primary {
  background-color: #FF9800;
}

/* SweetAlert */
.swal2-title {
  color: #9e9e9e !important;
  font-family: 'lato', sans-serif !important;
}
.swal2-content {
  font-family: 'roboto', sans-serif !important;
  color: #9e9e9e !important;
}

/* responsive */
@media (max-width: 600px) {
  .text-lg {
  font-size: 2.5rem;
  }
  .text-md {
    font-size: 2rem;
  }
  .text-sm {
    font-size: 1.5rem;
  }
  .mt-5 {
    margin-top: 24px !important;
  }
  .mb-5 {
    margin-bottom: 24px !important;
  }
  .ml-5 {
    margin-left: 24px !important;
  }
  .mr-5 {
    margin-right: 24px !important;
  }
  .vertical-align-2{
    margin: 5vh 0;
  }
}

</style>
