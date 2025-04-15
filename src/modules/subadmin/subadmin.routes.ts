import { Server } from '@hapi/hapi';
import {
  createHandler, deleteHandler, listHandler,
  updateHandler, viewHandler
} from './subadmin.controller';

export const subAdminRoutes = (server: Server) => {
  server.route([
    { method: 'POST', path: '/subadmins', handler: createHandler },
    { method: 'GET', path: '/subadmins', handler: listHandler },
    { method: 'GET', path: '/subadmins/{id}', handler: viewHandler },
    { method: 'PUT', path: '/subadmins/{id}', handler: updateHandler },
    { method: 'DELETE', path: '/subadmins/{id}', handler: deleteHandler },
  ]);
};
