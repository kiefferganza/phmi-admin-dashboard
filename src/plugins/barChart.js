import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins


export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    labels: Array,
    datasets: Object
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets,
    }, {responsive: true, maintainAspectRatio: false})
  }
}