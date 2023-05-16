import express from 'express'
import cors from "cors";
import axios from "axios";

const app=express();
app.use(cors());
const port = 3000

const options = {
  method: 'GET',
 url: 'https://api.render.com/v1/services?limit=20',
  headers: {
    accept: 'application/json',
    authorization: 'Bearer rnd_IYfuLxO4VBurXgp0UfqDv6lyFN6a'
  }
};
app.get('/',(req,res)=>{res.send("hi")})

app.get('/i',(req,res)=>{
     axios.request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  })

app.listen(port,()=>{console.log(`example app listening on http://localhost:${port}`);})
