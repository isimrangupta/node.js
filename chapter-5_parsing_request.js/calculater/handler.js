const { sumRequestHandler } = require("./sum")


const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title>Pratice Set</title>
      </head>
      <body>
         <h1>Welcome to Calculater</h1>
         <a href="/calculater">Go to calculater</a>
      </body>
    </html>`
    );
    return res.end();

  } else if (req.url.toLowerCase() === "/calculater") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title>Pratice Set</title>
      </head>
      <body>
         <h1>Here is the Calculater</h1>

         <form action="/calculater-result" method="POST">
         <input type="text" placeholder="First Num" name="first">
         <input type="text" placeholder="Second Num" name="second">
         <input type="submit" value="Submit">
         </form>
      </body>
    </html>`
    );
    return res.end();

  } 
  
  else if (req.url.toLowerCase() === "/calculater-result" && req.method === 'POST') {
    return sumRequestHandler(req, res);
    
  }


  res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title>Pratice Set</title>
      </head>
      <body>
         <h1>404 page does not Exist</h1>
         <a href="/"> Go to Home</a>
      </body>
    </html>`
    );
    return res.end();
  
};

exports.requestHandler = requestHandler;
