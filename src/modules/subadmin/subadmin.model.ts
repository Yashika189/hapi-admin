import mongoose from 'mongoose';

const subAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
});

export const SubAdmin = mongoose.model('SubAdmin', subAdminSchema);
