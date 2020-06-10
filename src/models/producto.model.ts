import { prop, getModelForClass } from '@typegoose/typegoose';

export interface IProduct {
  _id?: any;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
}

export class Producto {
  @prop({ trim: true, required: true })
  public nombre!: string;
  @prop({ trim: true, required: true })
  public marca!: string;
  @prop({ required: true })
  public precio!: number;
  @prop({ required: true })
  public stock!: number;
}

export const ProductModel = getModelForClass(Producto);
