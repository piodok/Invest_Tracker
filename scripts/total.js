//let ipaddress = '192.168.0.13';
let ipaddress = '192.168.0.182';

const api1 = `http://${ipaddress}:8000/total`;
fetch(api1)
.then((response) => {
  return response.json();
})
.then((data) => {
  let apiTotal = data['total_value'];
  console.log(apiTotal)
  let apiInvested = data['invested_capital'];
  console.log(apiInvested)
  document.getElementById('apiTotal').innerHTML = JSON.stringify(apiTotal)
  document.getElementById('apiInvested').innerHTML = JSON.stringify(apiInvested)
});
