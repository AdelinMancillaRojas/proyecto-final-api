import connectDB from './db';
import app from './server';
// import { ProductModel, IProduct } from './models/producto.model';

const main = async () => {
  connectDB();
  app.listen(app.get('port'));
  console.log(`Server on port ${app.get('port')}`);
};
main();
