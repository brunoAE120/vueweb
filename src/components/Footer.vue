<template>
  <footer>
    {{text}}
  </footer>
</template>

<script>
export default {
  data: () => ({
    text: 'Footer',
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  footer {
    width: 100%;
    color: black;
    padding: 1rem 0;
    background: green;
    text-align: center;
  }
</style>
