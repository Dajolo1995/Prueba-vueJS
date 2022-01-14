<template>
  <div class="home container">
    <div class="row">
      <div class="col-md-9"></div>
      <div class="col-md-3 modal-components">
        <b-button @click="updateData" class="btn-save" pill>Save</b-button>
      </div>
    </div>

    <div class="row">
      <FormList
        :employes="employes"
        :addItemList="addItemList"
        :removeItem="removeItem"
      />
    </div>
  </div>
</template>

<script>
import FormList from "./contents/FormList.vue";
import { mapState, mapMutations } from "vuex";
import Swal from "sweetalert2";

export default {
  components: { FormList },
  data() {
    return {
      employes: [],
      datos: null,
    };
  },

  computed: {
    ...mapState("data", ["items"]),
  },
  methods: {
    ...mapMutations("data", ["updateData"]),
    getData: function () {
      this.employes = this.items;
    },
    updateData: function () {
      this.$store.commit("updateData", this.items);
      Swal.fire({
        icon: "success",
        title: "",
        text: "Guardado sastifacorriamente",
      });
    },
    addItemList: async function () {
      const toAddObj = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        pais: "",
        city: "",
        dateOfBirth: "",
        gender: "",
        children: "",
        numberOfChildren: "",
      };
      this.employes.push(toAddObj);
    },
    removeItem: function (index) {
      const pos = this.employes.indexOf(index);
      this.employes.splice(pos, 1);
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.row {
  margin: 0 !important;
}

.container {
  width: 100%;
}

.btn-save {
  margin-top: 10px;
  background: #4f52ff;
  border: none;
  width: 40%;
}

.btn-save:hover {
  background: #6f00a3;
}
</style>
