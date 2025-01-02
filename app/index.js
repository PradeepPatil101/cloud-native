import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 8080;

// Handler for the /hello route
function handleHello(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}

// Handler for the /health route
function handleHealth(req, res) {
  res.statusCode = 200;
  res.end(); // Only 200 status, no body
}

// Default handler for unknown routes
function handleNotFound(req, res) {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Not Found');
}

// Main server logic
const server = createServer((req, res) => {
  switch (req.url) {
    case '/hello':
      handleHello(req, res);
      break;
    case '/health':
      handleHealth(req, res);
      break;
    default:
      handleNotFound(req, res);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
