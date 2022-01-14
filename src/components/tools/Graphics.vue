<template>
  <div class="container styles">
    <div class="graphics">
      <canvas class="canvas" :id="hola"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  props: ["pais", "hola"],
  data() {
    return {
      itemList: [],
      anio: parseInt(process.env.VUE_APP_ANIO),
      graphicData: null,
      myChart: null,
      graphicOne: [],
      name: [],
      cases: [],
      identifier: null,
      casos: [],
    };
  },
  watch: {
    pais: async function () {
      this.name = this.pais.map((i) => i.location);

      this.cases = this.pais.map((i) => i.new_cases);
      // console.log(this.pais)
      await this.graficasTwo();
    },
  },
  methods: {
    graficasTwo: function () {
      var ctx = document.getElementById(this.hola);
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: this.name,
          datasets: [
            {
              label: "Relación Presupuesto Final",
              data: this.cases,
              backgroundColor: [
                "#770BAA",
                "#2ECC71",
                "#AD0800",
                "#F1C40F",
                "#096496",
                "#5bc0de",
                "#FF2301",
                "#4f52ff",
                "#BDC3C7",
                "#FF1AFF",
              ],
              borderColor: [
                "#770BAA",
                "#2ECC71",
                "#AD0800",
                "#F1C40F",
                "#096496",
                "#5bc0de",
                "#FF2301",
                "#4f52ff",
                "#BDC3C7",
                "#FF1AFF",
              ],
              barThickness: 40,
            },
          ],
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: "Relación Laboral",
                  font: {
                    weight: "bold",
                  },
                },
                grid: {
                  display: false,
                },
              },
              y: {
                max: this.highestValue,
                display: true,
                title: {
                  display: true,
                  text: "Personas",
                  font: {
                    weight: "bold",
                  },
                },
                suggestedMin: -10,
                suggestedMax: 2000,
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
              tooltip: {},
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
          },
        },
      });
    },
  },
  mounted() {
    setTimeout(() => {
      this.graphics;
    }, 3000);
  },
};
</script>

<style scoped>
.graphics {
  width: 450px !important;
  height: 450px;
}
.styles {
  display: flex;
  justify-content: center;
}

.canvas {
  font-size: 14px;
  color: #052333;
  padding-bottom: 2rem;
  padding: 1rem 1rem;
  width: 100% !important;
}
</style>
