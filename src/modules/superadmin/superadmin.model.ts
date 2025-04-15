import mongoose from 'mongoose';

const superAdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // No hashing
});

export const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
