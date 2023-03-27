import mongoose from 'mongoose';

const URI_MONGO =
  'mongodb+srv://nmayord:Nat1mayor23@cluster0.sy4jpe7.mongodb.net/GreenCycle?retryWrites=true&w=majority'
try {
  await mongoose.connect(URI_MONGO)
  console.log('Conectado a la base de datos')
} catch (error) {
  console.log(error)
}
