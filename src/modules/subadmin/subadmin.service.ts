import { SubAdmin } from './subadmin.model';

export const createSubAdmin = (payload: any) => SubAdmin.create(payload);
export const listSubAdmins = () => SubAdmin.find();
export const getSubAdmin = (id: string) => SubAdmin.findById(id);
export const updateSubAdmin = (id: string, data: any) => SubAdmin.findByIdAndUpdate(id, data, { new: true });
export const deleteSubAdmin = (id: string) => SubAdmin.findByIdAndDelete(id);
