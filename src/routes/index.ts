import { Server } from '@hapi/hapi';
import { superAdminRoutes } from '../modules/superadmin/superadmin.routes';
import { subAdminRoutes } from '../modules/subadmin/subadmin.routes';

export const routes = (server: Server) => {
  superAdminRoutes(server);
  subAdminRoutes(server);
};
