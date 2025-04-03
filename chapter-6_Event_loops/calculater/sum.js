const sumRequestHandler = (req, res) =>{
  console.log('1. In sum Request Handler', req.url);

  const body = [];
  let result;

  req.on('data', (chunk) =>{
    body.push(chunk);
    console.log("2. chunk came");
  });

  req.on('end', ()=>{
    console.log("3. End event came")
    const bodyStr = Buffer.concat(body).toString();

   const params =  new URLSearchParams(bodyStr);

   const bodyObject = Object.fromEntries(params);


   result =Number( bodyObject.first) + Number(bodyObject.second);
   console.log(result);
});

console.log("4. sending the response")
  res.setHeader("Content-Type", "text/html");
   res.write(`
     <html>
     <head>
     <title>Pratice Set</title>
     </head>
     <body>
        <h1>Your sum is ${result}</h1>
       
     </body>
   </html>`
   );

   return res.end(); 
 
  }


exports.sumRequestHandler = sumRequestHandler;