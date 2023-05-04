const fs = require('fs');
const http = require("http");
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 700; //px
const height = 500; //px
const backgroundColour = 'white'; 
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour });








const stackedbarChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Stacked 1',
    backgroundColor: '#20c997',
    stack: 'Stack 0',
    data: [
      1520,
      8547,
      8530,
      1477,
      5267,
      4587,
      4758
    ]
  }, {
    label: 'Stacked 2',
    backgroundColor: '#ffc107',
    stack: 'Stack 0',
    data: [
      1500,
      1922,
      4722,
      4711,
      1020,
      1477,
      5000
    ]
  }, {
    label: 'Not Stacked',
    backgroundColor: '#0d6efd',
    stack: 'Stack 1',
    data: [
      7800,
      1400,
      5620,
      1477,
      2010,
      7000,
      2000
    ]
  }]
};

const Dualaxis = {
  type: 'line',
  data: {
    labels: ["2020/02/17", "2020/02/23", "2020/02/25", "2020/02/29", "2020/03/5", "2020/02/15", "2020/03/20"],
    datasets: [

      {
        type: "bar",
        backgroundColor: "#5ab7e8",
        borderColor: "#5ab7e8",
        borderWidth: 1,
        label: "page view",
        data: [60, 49, 68, 33, 44, 37, 57],
        order: 1,
        barPercentage: 0.5,
        // barThickness: 40,
        categoryPercentage: 0.6,
        minBarLength: 20,
        borderStyle: 'dashed',
        strokeStyle: "red",
        lineDashOffset: 4,
      },
      {
        type: "line",
        yAxisID: 'B', // <-- the Y axis to use for this data set
        label: 'Revenue',
        data: [6.5, 4, 7, 5.5, 5.3, 5.8, 7.1, 6.6],
        backgroundColor: '#3265aa',
        borderColor: '#3265aa',

        order: 0,
        pointBackgroundColor: '#FFFFFF',
        PointRadius: 5,
        strokeStyle: "red",
        lineDashOffset: 4,



      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      A: {
        type: 'linear',
        position: 'left',
        ticks: { beginAtZero: true, color: '#616161' },
        // Hide grid lines, otherwise you have separate grid lines for the 2 y axes
        grid: {
          display: true,
          borderDash: [8, 4],
          lineDashOffset: 4,
        },



      },
      B: {
        type: 'linear',
        position: 'right',
        ticks: { beginAtZero: true, color: '#616161' },
        grid: { display: false }
      },
      // x: { ticks: { beginAtZero: true } }
      x: {
        grid: {
          display: false, borderStyle: 'dashed',
          borderDash: [8, 4],
          //  color: "#348632",
          // strokeStyle : "#616161",
          lineDashOffset: 4,
        },


      },

    }
  }
};


const configuration = {
  type: 'line',   // for line chart
  data: {
    labels: [2018, 2021, 2022, 2023],
    datasets: [{
      label: "Sample 1",
      data: [1, 2, 3, 4],
      fill: false,
      borderColor: ['rgb(51, 204, 204)'],
      borderWidth: 1,
      xAxisID: 'xAxis1' //define top or bottom axis ,modifies on scale
    },
    {
      label: "Sample 2",
      data: [10, 30, 20, 10],
      fill: false,
      borderColor: ['rgb(255, 102, 255)'],
      borderWidth: 1,
      xAxisID: 'xAxis1'
    },
    ],

  },
  options: {
    scales: {
      y: {
        suggestedMin: 0,
      }
    }
  }
}

const configuration2 = {
  type: 'line',   // for line chart
  data: {
    labels: [2020, 2021, 2022, 2023],
    datasets: [{
      label: "Sample 1",
      data: [1, 2, 3, 4],
      fill: false,
      borderColor: ['rgb(51, 204, 204)'],
      borderWidth: 1,
      xAxisID: 'xAxis1' //define top or bottom axis ,modifies on scale
    },
    {
      label: "Sample 2",
      data: [4, 3, 2, 1],
      fill: false,
      borderColor: ['rgb(255, 102, 255)'],
      borderWidth: 1,
      xAxisID: 'xAxis1'
    },
    ],

  },
  options: {
    scales: {
      y: {
        suggestedMin: 0,
      }
    }
  }
}

const myChart = {
  type: 'bar',
  data: {
    labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
    datasets: [{
      label: '# of Tomatoes',
      data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: false,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 90,
          minRotation: 80
        },
        gridLines: {
          offsetGridLines: true // à rajouter
        }
      },
      {
        position: "top",
        ticks: {
          maxRotation: 90,
          minRotation: 80
        },
        gridLines: {
          offsetGridLines: true // et matcher pareil ici
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    run()
    async function run() {
      const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);
      const base64Image = dataUrl

      console.log(base64Image)


      var base64Data = base64Image.replace(/^data:image\/png;base64,/, "");


      fs.writeFile("out.png", base64Data, 'base64', function (err) {
        if (err) {
          console.log(err);
        }
      });
      return dataUrl
    }

  }


  if (req.url == "/Dual") {
    run()
    async function run() {
      const dataUrl = await chartJSNodeCanvas.renderToDataURL(Dual);
      const base64Image = dataUrl

      console.log(base64Image)


      var base64Data = base64Image.replace(/^data:image\/png;base64,/, "");


      fs.writeFile("Duala.png", base64Data, 'base64', function (err) {
        if (err) {
          console.log(err);
        }
      });
      return dataUrl
    }
  } else if (req.url == "/donut") {
    run()
    async function run() {
      const dataUrl = await chartJSNodeCanvas.renderToDataURL(myChart);
      const base64Image = dataUrl

      console.log(base64Image)


      var base64Data = base64Image.replace(/^data:image\/png;base64,/, "");


      fs.writeFile("out1.png", base64Data, 'base64', function (err) {
        if (err) {
          console.log(err);
        }
      });
      return dataUrl
    }

  } else if (req.url == "/contact") {
    let svg = window.d3.select("svg")
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("width", 100)
      .attr("height", 100);

    svg.append("rect")
      .attr("x", 10)
      .attr("y", 10)
      .attr("width", 80)
      .attr("height", 80)
      .style("fill", "orange");

    let data = "data:image/svg+xml;base64,";
    let svgString = svg[0][0].outerHTML;
    let base64 = window.btoa(svgString);
    let dataURI = data + base64;

    console.log(dataURI);

    document.querySelector("iframe").src = dataURI;
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error pages. Page doesn't exist </h1>");
  }
});


server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
