import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{ 
                data: [],
                label: "national",
                borderColor: "#3e95cd",
                fill: false
              }, { 
                data: [],
                label: "west",
                borderColor: "#8e5ea2",
                fill: false
              }, { 
                data: [],
                label: "east",
                borderColor: "#3cba9f",
                fill: false
              }, { 
                data: [],
                label: "central",
                borderColor: "#e8c3b9",
                fill: false
              }, { 
                data: [],
                label: "south",
                borderColor: "#c45850",
                fill: false
              }, { 
                data: [],
                label: "north",
                borderColor: "#F0E68C",
                fill: false
              }
            ]
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            for (var i = 0; i < response.data.items.length; i++) {
                this.datacollection.labels.push(response.data.items[i]["timestamp"])   
                this.datacollection.datasets[0].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['national'])
                this.datacollection.datasets[1].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['west'])
                this.datacollection.datasets[2].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['east'])
                this.datacollection.datasets[3].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['central'])
                this.datacollection.datasets[4].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['south'])
                this.datacollection.datasets[5].data.push(response.data.items[i]['readings']['psi_twenty_four_hourly']['north'])
            }
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}
