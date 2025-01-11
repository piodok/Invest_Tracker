//let ipaddress = '192.168.0.13';
//let ipaddress = '192.168.0.182';

const apiUrl = `http://${ipaddress}:8000/items`;
fetch(apiUrl)
.then((response) => {
  return response.json();
})
.then((data) => {
  let pln = data['PLN_CASH'];
  console.log(pln)

    var data = [
      {x: "Cash in PLN",           value: data['PLN_CASH']},
      {x: "Cash in Currency",      value: data['CURRENCY']},
      {x: "Polish Stocks",         value: data['POLISH_STOCK']},
      {x: "International Stocks",  value: data['INTERNATIONAL_STOCK']},
      {x: "Crypto",                value: data['CRYPTO']},
      {x: "Metals",                value: data['METALS']}
    ]
  
   // Call the function with the JSON data
  // create a chart and set the data
chart = anychart.pie(data);
//chart.legend(true)


// set the container id
chart.container("pie");
chart.background().fill("white")

// set the position of labels
chart.labels().position("outside");
// configure connectors
chart.connectorStroke({color: "#595959", thickness: 2, dash:"2 2"});
// initiate drawing the chart
chart.draw();
chart.legend(true)

});
