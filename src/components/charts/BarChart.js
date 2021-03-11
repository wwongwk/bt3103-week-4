import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#F0E68C"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales : {
                yAxes :[{
                    ticks : {
                        beginAtZero : true
                    }
                }]
            }
        }
    }
  },
  methods: {
    updateDataCollection (order) {
        for (let key of Object.keys(order)) {
            if (!this.datacollection.labels.includes(key)) {
                this.datacollection.labels.push(key);
                this.datacollection.datasets[0].data.push(order[key]);
            } else {
                let index = this.datacollection.labels.indexOf(key)
                this.datacollection.datasets[0].data[index] += order[key]
            }
        }
    }, 
    fetchItems: function () {
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.updateDataCollection(doc.data().count)
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}