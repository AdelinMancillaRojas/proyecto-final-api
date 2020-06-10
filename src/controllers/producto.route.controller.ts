import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../models/producto.model';

import {
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  addProduct,
} from './producto.controller';

export const deleteProductRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    res.status(200).json({
      message: 'deleted',
      id: deletedProduct._id,
    });
  } catch (error) {
    console.log(error);
    if (error == 'No valid Id') {
      res.status(400).json({
        message: 'Id no valido',
      });
      return next();
    }
    res.status(500).json({
      message: 'Error inesperado',
    });
  }
  return next();
};
export const getProductRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.params.id);
    const product = await getProduct(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    if (error == 'No valid Id') {
      res.status(400).json({
        message: 'Id no valido',
      });
      return next();
    }
    res.status(500).json({
      message: 'Error inesperado',
    });
  }
  return next();
};
export const getProductsRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error Inesperado' });
  }
  return next();
};
export const updateProductRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedProduct = await updateProduct(req.body.data);
    res.status(200).json({
      message: 'Producto Actualizado',
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    if (error == 'No valid Id') {
      res.status(400).json({ message: 'Id no valido' });
      return next();
    }
    res.status(500).json({
      message: 'Error inesperado',
    });
  }
  return next();
};
export const addProductRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: IProduct = { ...req.body.data };
    delete data._id;
    const savedProduct = await addProduct(data);
    res.status(200).json({
      message: 'Guardado',
      savedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      messagge: 'Error inesperado',
    });
  }
  return next();
};
