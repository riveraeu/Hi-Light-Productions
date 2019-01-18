<template>
  <v-flex sm3>
    <v-card raised>
      <v-img
        :src="icon" 
        height="10vh" 
        contain />
      <v-card-title primary-title>
        <v-spacer />
        <div class="grey-darken-1 text-sm">{{ title }}</div>
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <div class="text-xs grey--text mar-left mar-right">{{ text }}</div>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.v-card {
  height: 50vh !important;
}
@media (max-width: 600px) {
  .v-card {
    height: 60vh !important;;
  }
}
</style>
