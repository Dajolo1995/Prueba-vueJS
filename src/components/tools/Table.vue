<template>
  <div>
    <table class="table table-striped">
      <thead class="head">
        <tr>
          <th>Id</th>
          <th>Pais</th>
          <th>Nuevo Casos</th>
          <th>Nuevos Test</th>
          <th>Muertes Hoy</th>
          <th>Nuevos Vacunados</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, pais) in pais" :key="pais">
          <td>{{ pais + 1 }}</td>
          <td>{{ item.location }}</td>
          <td>{{ formattedNumber(parseInt(item.new_cases)) }}</td>
          <td>
            <span v-if="item.new_tests || item.new_tests === null">0</span>
            <span v-else>{{ formattedNumber(parseInt(item.new_tests)) }}</span>
          </td>
          <td>
            <span v-if="!item.new_deaths || item.new_deaths === null">0</span>
            <span v-else>{{ formattedNumber(parseInt(item.new_deaths)) }} </span>
          </td>
          <td>
            <span
              v-if="!item.new_vaccinations || item.new_vaccinations === null"
              >0</span
            >
            <span v-else>{{formattedNumber(parseInt(item.new_vaccinations) ) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["pais"],
  data() {
    return {};
  },

  methods: {
    formattedNumber: function (value) {
      return new Intl.NumberFormat("de-DE").format(value);
    },
  },
};
</script>

<style>
.table {
  --bs-table-striped-bg: #c8f1ea !important;
}
thead {
  background: #efefef !important;
}
th {
  color: #24c6ab;
}
.table > :not(:first-child) {
  border-top: none !important;
}

td {
  color: #052333;
  font-weight: 500;
}
</style>
