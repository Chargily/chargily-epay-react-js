
# 🚀 About Me
I'm a mern stack developer and currently a student in the highest school of computer science in Algeria (Esi -oued Smar-).

I hope you will like the package and i am available if you have any issues.

Big thank's to chargily for this great competition!


### Tech Stack

**Client:** React, Redux, TailwindCSS, Next js

**Server:** Node, Express



# Chargily epay -React js- package

Integrate ePayment gateway with Chargily easily.

- Currently support payment by CIB / EDAHABIA cards and soon by Visa / Mastercard
- This is a react js package, If you are using another framework Browse [here](https://github.com/Chargily/) or look to API [documentation](https://dev.chargily.com/docs/#/).


# Requirements
- Node 8, 10 or higher.
- Node package manager (npm).
- Get your API Key/Secret from [ePay by Chargily](https://epay.chargily.com.dz) dashboard for free.

 
              
# Installation

Install this package with npm

```bash
  npm install chargily-epay-react-js
```
    
# Environment Variables
To run this project, you will need to add the following environment variables to your .env file.



Open the project and create .env file in the root directory.

Create-react-app does not allow you to define Environment Variables that do not start with the REACT_APP_ prefix.


`REACT_APP_CHARGILY_APP_KEY`

If you are wondering about the app_secret, it will be used in the backend to validate the incoming webhooks. 

# Get started

Check [this](https://youtu.be/41NOoEz3Tzc) video to more understand about webhooks.

Use [beeceptor](https://beeceptor.com) to actually observe some details(body, headers) about 
the post request (webhook).

You need to validate the incoming webhooks in the backend, here is where you will need the app_secret that you got from [ePay by Chargily](https://epay.chargily.com.dz) previously.
 
check the documentaion of laravel or express packages in github(depends on what you're using in the backend) too see how validate incoming webhooks.

# Usage/Examples

```javascript
import {create_payement} from 'chargily-epay-react-js'

function App() {

  const handleClick = async()=>{

    const invoice = {
      "amount":600,
      "invoice_number":23,
      "client":"Ahmed malek", // add a text field to allow the user to enter his name, or get it from a context api (depends on the project architecture)
      "mode":"CIB",
      "webhook_url":"https://your_beeceptor_url.free.beeceptor.com", // here is the webhook url, use beecptor to easly see the post request and it's body, you will use this in backened to save and validate the transactions.
      "back_url":"https://www.youtube.com/", // to where the user will be redirected after he finish/cancel the payement 
      "discount" :0
  }
    try {
      await create_payement(invoice)
    } catch (error) {
      // handle your error here 
      console.log(error)
    }
  }

  return (
    <>
      {/* Here you can add a form, to get te client name, the mode Edahabiya or CIB, the amount & discount */}
      {/* It really depends on the project architecture, for example you will not need 
      to add a text field input to get the name of the user if he is  logged in
      (get the name from redux toolkit or react context api for example) */}
      
      
      <button onClick={handleClick}>testing</button>
    </>
  );
}

export default App;

```


