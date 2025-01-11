//let ipaddress = '192.168.0.13';
const api2 = `http://${ipaddress}:8000/all`;
fetch(api2)
.then((response) => {
  return response.json();
})
.then((data) => {
      console.log(data)
   // Call the function with the JSON data
     anychart.onDocumentReady(function () {
              // create a data set
        var dataSet = anychart.data.set(data);

        // map the data for all series
        var firstSeriesData = dataSet.mapAs({x: 1, value: 3});
        var secondSeriesData = dataSet.mapAs({x: 1, value: 2});

        // create a line chart
        var chart = anychart.line();

        // create the series and name them
        var firstSeries = chart.line(firstSeriesData);
        firstSeries.name("Total Asset");
        firstSeries.stroke({color:"green", thickness: 5})
        var secondSeries = chart.line(secondSeriesData);
        secondSeries.name("Invested Capital");
        secondSeries.stroke({color:"black", thickness: 5})

        // add a legend
        chart.legend().enabled(true);

        // add a title
        chart.title("Total asset and invested capital");

        // specify where to display the chart
        chart.container("line");
        //chart.container("lineChart");
        chart.background().fill("white")

        // draw the resulting chart
        chart.draw();

      });
});

