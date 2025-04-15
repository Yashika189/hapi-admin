import { Request, ResponseToolkit } from '@hapi/hapi';
import { createSuperAdmin, loginSuperAdmin } from './superadmin.service';
import { generateToken } from '../../utils/jwt';

export const registerHandler = async (req: Request, h: ResponseToolkit) => {
  const payload = req.payload as { email: string; password: string };
  try {
    const admin = await createSuperAdmin(payload);
    return h.response({ message: 'SuperAdmin created', admin }).code(201);
  } catch (err: any) {
    return h.response({ error: err.message }).code(400);
  }
};

export const loginHandler = async (req: Request, h: ResponseToolkit) => {
  const { email, password } = req.payload as any;
  try {
    const admin = await loginSuperAdmin(email, password);
    const token = generateToken({ id: admin._id, role: 'superadmin' });
    return h.response({ token }).code(200);
  } catch (err: any) {
    return h.response({ error: err.message }).code(401);
  }
};
