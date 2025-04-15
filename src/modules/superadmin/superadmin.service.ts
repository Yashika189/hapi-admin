import { SuperAdmin } from './superadmin.model';

export const createSuperAdmin = async (payload: { email: string; password: string }) => {
  const exists = await SuperAdmin.findOne({});
  if (exists) throw new Error('SuperAdmin already exists');
  return await SuperAdmin.create(payload);
};

export const loginSuperAdmin = async (email: string, password: string) => {
  const admin = await SuperAdmin.findOne({ email });
  if (!admin || admin.password !== password) {
    throw new Error('Invalid credentials');
  }
  return admin;
};
