import app from './app.ts';
const port = 8081;


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});