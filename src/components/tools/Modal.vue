<template>
  <div>
    <b-button class="button-modals" id="show-btn" pill @click="showModal"
      >Open Modal</b-button
    >

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="primary" block @click="hideModal"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style>
.button-modals {
  background: #0b5ed7 !important;
}
</style>
