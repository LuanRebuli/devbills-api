import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log('MongoDB connection is already established.');
      return;
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connection established.');
  } catch {
    throw new Error(' MongoDB connection failed.');
  }
}
