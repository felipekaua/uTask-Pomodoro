const app = require('./app');

const PORT = 3333;
const HOST = 'http://localhost';

app.listen(PORT, () => {
  console.log(`Server is running at ${HOST}:${PORT}`);
});
