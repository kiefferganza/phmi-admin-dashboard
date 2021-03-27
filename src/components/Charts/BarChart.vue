  <template>
  <div class="Chart text-left">
    <BarChart :labels="labels" :datasets="datasets"></BarChart>
    {{ datasets }}
  </div>
  
</template>

<script>
import BarChart from '../../plugins/barChart'
import axios from 'axios'
export default {
    name: 'Bar',
    components: {
        BarChart
    },
    data() {
        return {
            labels: [],
            datasets: {
                label: 'Current Inventory',
                backgroundColor: '#FC2525',
                data : []
            },
        }
    },
    computed: {
        getKey() {
            return this.$store.state.token
        }
    },
    mounted() {
        this.loadChartData()
    },
    methods: {
        loadChartData() {
            this.token = this.getKey;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token

            axios
                .get('http://127.0.0.1:8000/api/inventory')
                .then(response => {
                    var arr = response.data
                    var labels = this.labels
                    for (let key in arr) {
                            labels.push(response.data[key].ItemName)
                    }
                    for (let key in arr) {
                            this.datasets['data'].push(response.data[key].quantity)
                    }
                    // console.log(response.data[0].quantity)
                })
        }
    }

}
</script>

