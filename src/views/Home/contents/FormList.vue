<template>
  <div>
    <FormEmployes
      v-for="(item, index) in employes"
      :key="index"
      :removeItem="removeItem"
      :objTest="item"
      :index="index"
    />

    <div class="add-btn" @click="addItemList" v-b-tooltip.hover title="Agregar">
      <hr class="separator-hr" />
      <b-button class="button-leyes"><i class="bx bx-plus"></i></b-button>
      <hr class="separator-hr" />
    </div>
  </div>
</template>

<script>
import FormEmployes from "./FormEmployes.vue";
export default {
  components: { FormEmployes },
  props: ["employes", "addItemList", "removeItem"],
};
</script>

<style>
.add-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
}
.separator-hr {
  width: 45%;
}
.button-leyes {
  height: 30px;
  width: 30px;
  border-radius: 50px !important;
  border: 2px solid #6f00a3 !important;
  background: #fff !important;
  color: #6f00a3 !important;
  padding: 0;
}
.bx-plus {
  font-size: 23px;
  position: relative;
  left: -10px;
  top: -5px;
}


.btn-check:focus + .btn,
.btn-secondary:hover,
.btn:focus {
  color: #fff !important;

  box-shadow: none;
  border: none;
  background: #6f00a3 !important;
}
</style>
