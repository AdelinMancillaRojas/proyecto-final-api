import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    await connect('mongodb://localhost:27017/crudreact', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Base de datos conectada');
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
export default connectDB;
