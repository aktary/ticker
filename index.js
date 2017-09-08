const fetch = require('node-fetch');
let i = 0, high = 0;
const go = () => {
    fetch('https://bittrex.com/api/v1.1/public/getticker?market=BTC-LTC').then(s => s.json()).then(s => {
    if(high < Number(s.result.Last)){
      high = s.result.Last; 
      i++;
      console.log(`Yes: last: ${s.result.Last}, high count: ${i}`);
    } else {
      console.log(`No: last: ${s.result.Last}, current high: ${high}`);
    }
    setTimeout(go, 500);
  })
};

go();