import { Request, ResponseToolkit } from '@hapi/hapi';
import {
  createSubAdmin, deleteSubAdmin, getSubAdmin,
  listSubAdmins, updateSubAdmin
} from './subadmin.service';

export const createHandler = async (req: Request, h: ResponseToolkit) => {
  const data = req.payload as any;
  const subadmin = await createSubAdmin(data);
  return h.response(subadmin).code(201);
};

export const listHandler = async (_req: Request, h: ResponseToolkit) => {
  const subadmins = await listSubAdmins();
  return h.response(subadmins);
};

export const viewHandler = async (req: Request, h: ResponseToolkit) => {
  const subadmin = await getSubAdmin(req.params.id);
  if (!subadmin) {
    return h.response({ message: 'Subadmin not found' }).code(404);
  }

  return h.response(subadmin);
};

export const updateHandler = async (req: Request, h: ResponseToolkit) => {
  const subadmin = await updateSubAdmin(req.params.id, req.payload);
  if (!subadmin) {
    return h.response({ message: 'Subadmin not found' }).code(404);
  }

  return h.response(subadmin);
};

export const deleteHandler = async (req: Request, h: ResponseToolkit) => {
  await deleteSubAdmin(req.params.id);
  return h.response({ message: 'Deleted successfully' });
};
