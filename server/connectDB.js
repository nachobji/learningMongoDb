import mongoose from 'mongoose';

const Run = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected')
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

export default Run;
