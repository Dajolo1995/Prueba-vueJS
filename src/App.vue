<template>
  <div id="app">
    <LayoutApp />
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
import LayoutApp from "./components/layout/LayouytApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<style>
.contents {
  width: 100%;
  min-height: 80vh;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #004a87 !important;
  /* border-radius: 5px; */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #770BAA !important;
  border-radius: 5px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #770BAA !important;
}
</style>
