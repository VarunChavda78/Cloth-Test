// import mongoose from "mongoose";
// const connectdb = async () => {
//   mongoose.connection.on("connected", () => console.log("db connected"));
//   await mongoose.connect(`${process.env.MONGO_URL}/e-commerce`);
// };
// export default connectdb
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/mydatabase';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB Connected Successfully!');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
    process.exit(1);
  }
};

export default connectDB;
