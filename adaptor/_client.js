const fetch = require('node-fetch');

const url = 'http://localhost:8844/';
const data = {
  id: 0,
  data: {
    chainId: 97,
    profileId: 2193,
    essenseId: 6
  }
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });