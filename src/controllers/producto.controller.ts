/* // @ts-ignore
  const { _id: id } = (await ProductModel.create({
    nombre: 'a',
    precio: 54,
    stock: 5,
    marca: 'channel',
  })) as Producto;
  console.log(id); */
import { ProductModel, IProduct } from '../models/producto.model';
import { isValidObjectId } from 'mongoose';

export const getProducts = async (): Promise<IProduct[]> => {
  return (await ProductModel.find()) as IProduct[];
};
export const getProduct = async (id: String): Promise<IProduct> => {
  if (id && isValidObjectId(id))
    return (await ProductModel.findById(id)) as IProduct;
  throw 'No valid Id';
};
export const updateProduct = async (data: IProduct): Promise<IProduct> => {
  console.log(isValidObjectId(data._id));
  if (data._id && isValidObjectId(data._id))
    return (await ProductModel.findByIdAndUpdate(data._id, data, {
      new: true,
    })) as IProduct;
  throw 'No valid Id';
};
export const deleteProduct = async (id: any): Promise<IProduct> => {
  if (id && isValidObjectId(id))
    return (await ProductModel.findByIdAndDelete(id)) as IProduct;
  throw 'No valid Id';
};
export const addProduct = async (data: IProduct): Promise<IProduct> => {
  return (await ProductModel.create(data)) as IProduct;
};
