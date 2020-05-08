<script>
  import { Line } from 'vue-chartjs'

  export default {
    extends: Line,
    data: () => ({
      chartdata: {
      labels: ['03/04/20', '07/04/20', '11/04/20', '13/04/20', '16/04/20', '19/04/20', '20/04/20', '22/04/20'],
      datasets: [
        {
          label: 'Programme Volume',
          borderColor: '#282828',
          borderWidth: 2,
          backgroundColor: 'transparent',
          data: [3040, 3255, 3460, 3105, 3600, 3850, 4010, 3705]
        }
      ]
      },
      options: {
      responsive: true,
      maintainAspectRatio: false,
        title: {
          display: 'true',
          text: 'Total Volume',
          fontSize: 20,
          fontFamily: 'Arial',
          fontColor: '#282828',
          padding: 20
        }
      }
    }),

    mounted () {
      this.renderChart(this.chartdata, this.options)
    }
  }
</script>