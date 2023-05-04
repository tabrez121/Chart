const fs = require('fs');
const http = require("http");
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 700; //px
const height = 500; //px
const backgroundColour = 'white'; 
const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour });





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


  if (req.url == "/Dualaxis") {
    run()
    async function run() {
      const dataUrl = await chartJSNodeCanvas.renderToDataURL(Dualaxis);
      const base64Image = dataUrl

      console.log(base64Image)


      var base64Data = base64Image.replace(/^data:image\/png;base64,/, "");


      fs.writeFile("Dualaxis.png", base64Data, 'base64', function (err) {
        if (err) {
          console.log(err);
        }
      });
      return dataUrl
    }
  }  else if (req.url == "/contact") {
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
