import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("✅ Database Connected Successfully");
    });

    mongoose.connection.on('error', (err) => {
      console.error("❌ Database connection error:", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/WipeBG`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("❌ Could not connect to database:", err);
    process.exit(1);
  }
};

export default connectDB;
