const sumRequestHandler = (req, res) =>{
  console.log('In sum Request Handler', req.url);

  const body = [];
  req.on('data', (chunk) =>{
    console.log(chunk)
    body.push(chunk);

  req.on('end', ()=>{
    const bodyStr = Buffer.concat(body).toString();

   const params =  new URLSearchParams(bodyStr);

   const bodyObject = Object.fromEntries(params);


   const result =Number( bodyObject.first) + Number(bodyObject.second);
   console.log(result);


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
  });


 
  })
} 

exports.sumRequestHandler = sumRequestHandler;