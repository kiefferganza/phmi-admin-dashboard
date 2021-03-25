<template>
  <div class="home">
    <b-container class="p-5">
      <b-card-group deck>
        <b-card header="Transaction Logs" header-tag="header" header-class="text-left">
          <b-card-text>
            <b-table striped hover :per-page="perPage" :current-page="currentPage" :items="logs" id="my-table">
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table">
            </b-pagination>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Home",
  components: {
  },
  data () {
      return {
      perPage: 10,
      currentPage: 1,
      logs: [],
    }
  },
  computed: {
    rows() {
      return this.logs.length
    },
    getKey() {
      return this.$store.state.token
    }
  },
   mounted() {
     this.token = this.getKey;
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token

    axios.get('http://127.0.0.1:8000/api/logs/index')
      .then(response => {
        console.log(response.data)
         this.logs = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
};
</script>
