import { Server } from '@hapi/hapi';
import { connectDB } from './config/db';
import { routes } from './routes/index';
import dotenv from 'dotenv';

dotenv.config();

const init = async () => {
  await connectDB();

  const server = new Server({
    port: process.env.PORT || 4000,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'] },
    },
  });

  routes(server);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init();
