import express from 'express'
import require from 'api'

const app=express()
const port = 3000

const sdk = require('api','@render-api/v1.0#dnrc1ulf088q9j');

sdk.auth('rnd_IYfuLxO4VBurXgp0UfqDv6lyFN6a');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

// const axios = require('axios');
// const options = {
//   method: 'GET',
//  url: 'https://api.render.com/v1/services?limit=20',
//   headers: {
//     accept: 'application/json',
//     authorization: 'Bearer rnd_IYfuLxO4VBurXgp0UfqDv6lyFN6a'
//   }
// };
app.get('/hi',(req,res)=>{res.send("hi")})

app.get('/i',(req,res)=>{res.send(sdk)})
// app.get('/i',(req,res)=>{res.send(
//      axios.request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     })
//     )})

app.listen(port,()=>{console.log(`example app listening on http://localhost:${port}`);})
