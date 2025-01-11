
//let ipaddress = '192.168.0.13';
let ipaddress = '192.168.0.182';


function fetchStockPl(){
let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>STOCK_UNITS</th> <th>INVESTED_CAPITAL</th> <th>CURRENT_CAPITAL</th> '
const api = `http://${ipaddress}:8000/stock_pl`;
fetch(api)
.then((response) => {
  return response.json();
})
.then((data) => {
  getTH(header)
  getTD(data)
});
}

function fetchStockInt(){
  let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>STOCK_UNITS</th> <th>INVESTED_CAPITAL</th> <th>CURRENT_CAPITAL</th> '
  const api = `http://${ipaddress}:8000/stock_int`;
  fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    getTH(header)
    getTD(data)
  });
  }
  
function fetchCashCurrency(){
   let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>CURRENCY AMOUNT</th> <th>VALUE IN PLN</th> <th>BANK</th> <th>ALLOCATION</th> <th>ACCOUNT</th>'

   const api = `http://${ipaddress}:8000/cash_currency`;
    fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getTH(header)
      getTDCashCurrency(data)
    });
  }

  function fetchCashPLN(){
    let header = '<th>ID</th> <th>VALUE</th> <th>BANK</th> <th>ALLOCATION</th> <th>ACCOUNT</th>'
    const api = `http://${ipaddress}:8000/cash_pln`;
     fetch(api)
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       getTH(header)
       getTDCashPln(data)
     });
   }

   
   function fetchMetals(){
    let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>METAL AMOUNT</th> <th>INVESTED_CAPITAL</th> <th>CURRENT_CAPITAL</th>'
    const api = `http://${ipaddress}:8000/metals`;
     fetch(api)
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       getTH(header)
       getTDMetals(data)
     });
   }

   
   function fetchCrypto(){
    let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>CRYPTO AMOUNT</th> <th>INVESTED_CAPITAL</th> <th>CURRENT_CAPITAL</th>'
    const api = `http://${ipaddress}:8000/crypto`;
     fetch(api)
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       getTH(header)
       getTDCrypto(data)
     });
   }

   function fetchSpendings(){
    let header = '<th>ID</th> <th>DATE</th> <th>VALUE</th> <th>SPENT ON</th> '
    const api = `http://${ipaddress}:8000/spendings`;
    fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getTH(header)
      getTDSpendings(data)
    });
    }

    function fetchCryptoHistpry(){
      let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>DATE</th> <th>CRYPTO AMOUNT</th> <th>UNIT PRICE</th> '
      const api = `http://${ipaddress}:8000/crypto_history`;
      fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        getTH(header)
        getTDCryptoHistpry(data)
      });
      }

      function fetchMetalsHistory(){
        let header = '<th>ID</th> <th>NAME</th> <th>TICKER</th> <th>DATE</th> <th>NO OF METAL OZs</th> <th>METAL OZ PRICE</th> '
        const api = `http://${ipaddress}:8000/metal_history`;
        fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          getTH(header)
          getTDMetalsHistory(data)
        });
        }

function getTH(header) {
  const head = document.getElementById("header1")
  let tags = header;
  head.innerHTML = tags;
}

function getTD(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> </tr>'
  })
  table.innerHTML = tags;
} 

function getTDCashCurrency(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> <td>' + d[6] + '</td> <td>' + d[7] + '</td> </tr>'
  })
  table.innerHTML = tags;
}
function getTDCashPln(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> </tr>'
  })
  table.innerHTML = tags;
}

function getTDMetals(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> </tr>'
  })
  table.innerHTML = tags;
}

function getTDCrypto(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> </tr>'
  })
  table.innerHTML = tags;
}

function getTDSpendings(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> </tr>'
  })
  table.innerHTML = tags;
}

function getTDCryptoHistpry(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> </tr>'
  })
  table.innerHTML = tags;
}

function getTDMetalsHistory(data) {
  const table = document.getElementById("table1")
  let tags = "";
  data.map(d => {
    console.log(d[0])
    tags += '<tr> <td>' + d[0] + '</td> <td>' + d[1] + '</td> <td>' + d[2] + '</td> <td>' + d[3] + '</td> <td>' + d[4] + '</td> <td>' + d[5] + '</td> </tr>'
  })
  table.innerHTML = tags;
}