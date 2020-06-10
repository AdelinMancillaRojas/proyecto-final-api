import { Router } from 'express';
const productoRoutes = Router();
import {
  getProductRoute,
  getProductsRoute,
  addProductRoute,
  updateProductRoute,
  deleteProductRoute,
} from '../controllers/producto.route.controller';
productoRoutes.get('/', getProductsRoute);
productoRoutes.get('/:id', getProductRoute);
productoRoutes.post('/', addProductRoute);
productoRoutes.put('/', updateProductRoute);
productoRoutes.delete('/:id', deleteProductRoute);

export default productoRoutes;
