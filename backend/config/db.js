// backend/config/db.js
import mongoose from "mongoose"; 

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://srupaists20_db_user:RbkN0JuOHy5T0VN4@ac-peuyduf-shard-00-00.uielf2y.mongodb.net:27017,ac-peuyduf-shard-00-01.uielf2y.mongodb.net:27017,ac-peuyduf-shard-00-02.uielf2y.mongodb.net:27017/Expense?ssl=true&replicaSet=atlas-5mmoer-shard-0&authSource=admin&retryWrites=true&w=majority"
    );
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DB CONNECTION ERROR:", error.message);
  }
};