<template>
  <Page ref="page" :class="pageClasses" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <GridLayout row="0" columns="44, *, auto" class="action-bar-custom">
      <Label col="1" text="Test"></Label>
    </GridLayout>
  </Page>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      //
    },

    data() {
      return {
        //
      }
    },

    computed: {
      //
    },

    methods: {

    },
  }
</script>

<style lang="scss">
</style>