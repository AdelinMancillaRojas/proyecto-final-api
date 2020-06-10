import express from 'express';
import productoRoutes from './routes/productos.route';
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/productos', productoRoutes);

app.set('port', process.env.PORT || 3001);
export default app;
