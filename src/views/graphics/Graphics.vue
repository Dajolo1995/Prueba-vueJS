<template>
  <div class="container">
    <div class="div-title">
      <h4 class="title"></h4>
      <h5 class="title"></h5>
    </div>

    <div>
      <details open>
        <summary>Casos de Covid Africa</summary>
        <div class="data">
          <Graphicss :pais="this.africa" :hola="idAfrica" />
          <Table :pais="arrayAfrica" />
        </div>
      </details>
      <details>
        <summary>Casos de Covid Asia</summary>
        <div class="data">
          <Graphicss :pais="this.asia" :hola="idAsia" />
          <Table :pais="arrayAsia" />
        </div>
      </details>

      <details>
        <summary>Casos de covid Europa</summary>
        <div>
          <Graphicss :pais="this.europa" :hola="idEuropa" />
          <Table :pais="arrayEuropa" />
        </div>
      </details>

      <!-- collapse tres -->
      <details>
        <summary>Casos de covid Norte America</summary>
        <div>
          <Graphicss :pais="this.nAmerica" :hola="idNAmerica" />
          <Table :pais="arrayNAmerica" />
        </div>
      </details>
      <!-- collapse cuatro -->
      <details>
        <summary>Casos de covid Sur America</summary>
        <div>
          <div>
            <Graphicss :pais="this.sAmerica" :hola="idSAmerica" />
            <Table :pais="arraySAmerica" />
          </div>
        </div>
      </details>
      <!-- collapse cinco -->
      <details>
        <summary>Casos de covid Oceanía</summary>
        <div>
          <div>
            <Graphicss :pais="this.oceania" :hola="idOceania" />
            <Table :pais="arrayOceania" />
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script>
import Graphicss from "../../components/tools/Graphics";
import Table from "../../components/tools/Table";
import axios from "axios";
export default {
  components: { Graphicss, Table },
  data() {
    return {
      listItems: null,
      //
      asia: null,
      arrayAsia: null,
      //
      europa: null,
      arrayEuropa: null,
      //
      nAmerica: null,
      arrayNAmerica: null,
      //
      sAmerica: null,
      arraySAmerica: null,
      //
      oceania: null,
      arrayOceania: null,
      //
      africa: null,
      arrayAfrica: null,
      //
      idAsia: "asia",
      idEuropa: "europa",
      idNAmerica: "norteAmerica",
      idSAmerica: "surAmerica",
      idOceania: "oceania",
      idAfrica: "africa",
    };
  },

  methods: {
    getData: async function () {
      try {
        let res = await axios.get(
          "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json"
        );

        let array = [];
        Object.keys(res.data).forEach((e) => {
          array.push(res.data[e]);
        });

        array.sort(function (b, a) {
          return a.new_cases - b.new_cases;
        });
        //Oceania
        this.arrayOceania = array.filter(
          (item) => item.continent === "Oceania"
        );
        this.oceania = this.arrayOceania.slice(0, 10);
        //Africa
        this.arrayAfrica = array.filter((item) => item.continent === "Africa");
        this.africa = this.arrayAfrica.slice(0, 10);
        //Asia
        this.arrayAsia = array.filter((item) => item.continent === "Asia");
        this.asia = this.arrayAsia.slice(0, 10);
        //Europa
        this.arrayEuropa = array.filter((item) => item.continent === "Europe");
        this.europa = this.arrayEuropa.slice(0, 10);
        //Norte America
        this.arrayNAmerica = array.filter(
          (item) => item.continent === "North America"
        );
        this.nAmerica = this.arrayNAmerica.slice(0, 10);
        //Sur America
        this.arraySAmerica = array.filter(
          (item) => item.continent === "South America"
        );
        this.sAmerica = this.arraySAmerica.slice(0, 10);
        console.log(this.arrayAfrica);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
*,
*:after,
*:before {
  box-sizing: border-box;
}
.div-title {
  margin-top: 25px;
  margin-bottom: 20px;
}
.title {
  /* font-size: 20px; */
  color: #052333;
  margin-left: 50px;
  font-weight: 600;
}
.loading {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.row {
  margin: 0;
}
.data {
  justify-content: center;
  align-items: center;
}
:root {
  font-size: 16px;
}
body {
  font-family: "Fira Sans", sans-serif;
  line-height: 1.5;
  min-height: 100vh;
  font-size: 1.25rem;
}
*:focus {
  outline: none;
}
body > div {
  width: 90%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
data {
  padding: 2.5em;
}
data > * + * {
  margin-top: 1.5em;
}
details + details {
  margin-top: 20px;
  margin-bottom: 20px;
}
summary {
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
summary {
  padding: 0.75em 1em;
  cursor: pointer;
  position: relative;
  padding-left: calc(1.75rem + 0.75rem + 0.75rem);
  background: #e0e0e0;
  font-weight: 600;
}
/* summary:before {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: .75rem;
	content: "↓";
	width: 1.75rem;
	height: 1.75rem;
	background-color: #000;
	color: #FFF;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
} */
details[open] summary {
  background-color: #eee;
}
details[open] summary:before {
  content: "↑";
}
summary:hover {
  background-color: #eee;
}
a {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 1px 0 0;
}
a:hover {
  box-shadow: 0 3px 0 0;
}
code {
  font-family: "Fira Sans", sans-serif;
  font-weight: 600;
}
</style>
