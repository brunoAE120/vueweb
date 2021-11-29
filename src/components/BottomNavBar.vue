<template>
  <v-bottom-navigation
    :value="value"
    color="black"
  >
    <v-btn>
      <span><Menu>Menu</Menu></span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Extra</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>

    <v-btn>
      <span>Fale conosco</span>

      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: 'recent',
  }),
}
</script>