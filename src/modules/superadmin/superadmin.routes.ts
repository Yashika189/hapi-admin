import { Server } from '@hapi/hapi';
import { loginHandler, registerHandler } from './superadmin.controller';

export const superAdminRoutes = (server: Server) => {
  server.route([
    {
      method: 'POST',
      path: '/superadmin/register',
      handler: registerHandler,
    },
    {
      method: 'POST',
      path: '/superadmin/login',
      handler: loginHandler,
    },
  ]);
};
