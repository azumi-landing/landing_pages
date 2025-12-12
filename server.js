import express from 'express';
import { handler } from './dist/server/entry.mjs'; // apunta a tu entry.mjs

const app = express();


app.use(handler);


const PORT = process.env.PORT || 4321;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
