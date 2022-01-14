<template>
  <form>
    <b-row>
      <b-col cols="12">
        <label class="label-leyes">
          <span class="label-leyes-span">Empleados</span>
          <i @click="removeItem(objTest)" class="bx bxs-trash"></i
        ></label>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Nombre</span>
        </label>
        <b-form-input
          v-model="objTest.name"
          class="input-employes"
        ></b-form-input>
      </b-col>

      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Apellido</span>
        </label>
        <b-form-input
          v-model="objTest.lastName"
          class="input-leyes"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Email</span>
        </label>
        <b-form-input
          v-model="objTest.email"
          class="input-employes"
        ></b-form-input>
      </b-col>

      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Celular</span>
        </label>
        <b-form-input
          v-model="objTest.phone"
          class="input-leyes"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Pais</span>
        </label>
        <b-form-input
          v-model="objTest.pais"
          class="input-employes"
        ></b-form-input>
      </b-col>

      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Ciudad</span>
        </label>
        <b-form-input v-model="objTest.city" class="input-leyes"></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Fecha de Nacimiento</span>
        </label>
        <b-form-input
          v-model="objTest.dateOfBirth"
          class="input-employes"
        ></b-form-input>
      </b-col>

      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Genero</span>
        </label>
        <b-form-input
          v-model="objTest.gender"
          class="input-leyes"
        ></b-form-input>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Hijos</span>
        </label>
        <b-form-select
          class="select-employes"
          v-model="objTest.children"
          :options="options"
        ></b-form-select>
      </b-col>

      <b-col cols="6">
        <label class="label-leyes">
          <span class="label-leyes-span">Cantidad de hijos</span>
        </label>
        <div v-if="objTest.children === 'si'">
          <b-form-input
            v-model="objTest.numberOfChildren"
            class="input-leyes"
          ></b-form-input>
        </div>
        <div v-else>
          <b-form-input
            disabled
            v-model="objTest.numberOfChildren"
            class="input-leyes"
          ></b-form-input>
        </div>
      </b-col>
    </b-row>
    <hr />
  </form>
</template>

<script>
export default {
  props: ["objTest", "removeItem", "index", "readOnly"],
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "si", text: "Si" },
        { value: "no", text: "No" },
      ],
    };
  },
};
</script>

<style scoped>
.label-leyes {
  font-weight: bold;
  color: #052333;
}
.label-leyes-span {
  font-size: 1rem;
  margin-right: 5px;
}
.input-employes {
  width: 100% !important;
  margin-bottom: 20px;
  border: none;
  border: 1px solid #ccc;
  font-size: 0.9rem;
}

.select-employes {
  width: 100% !important;
  margin-bottom: 20px;
  border: none;
  border: 1px solid #ccc;
  font-size: 0.9rem;
  height: 38px;
  border-radius: 5px;
}
.input-leyes:focus {
  border: #24c6ab;
}

.bxs-trash {
  color: #24c6ab;
  cursor: pointer;
  font-size: 20px;
}

.bxs-trash:hover {
  color: red;
}
</style>
