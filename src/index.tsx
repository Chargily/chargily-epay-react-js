import axios from 'axios';

interface Intinvoice  {
  amount : number,
  invoiceNumber : number,
  client : string,
  discount : number,
  mode : "CIB" | "EDAHABIA",
  webhookUrl : string,
  backUrl : string,
  // appKey : string
}

export const create_payement = async(invoice: Intinvoice)=>{
  // adding some validation here 
  // const appKey:string = process.env.REACT_APP_CHARGILY_APP_KEY ? process.env.REACT_APP_CHARGILY_APP_KEY : "
  const config = {headers : {Accept: "application/json",  "X-Authorization": "api_YWhz6PxwpZFe5ZEfKOPKROXE7vgtmuvPnGJlJJqajQRaiJPaCvzJYOL0Y0gYjS14"},  timeout: 1000,}
  try {
    const {data} = await axios.post("/baseURL/api/invoice", invoice, config)
    const {checkout_url} = data
    // Redirect
    window.location = checkout_url
  } catch (error) {
    console.log(error)
  }
}
