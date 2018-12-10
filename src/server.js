import Glue from 'glue';
import { manifest, options } from './manifest';
import { errorHandler } from './utils/errorHandler';

export const init = async (start) => {
  let server;
  try {
    server = await Glue.compose(
      manifest,
      options,
    );

    if (!start) return server;

    await server.start();
    process.stdout.write(`server running on port ${process.env.PORT}\n`);
    server.ext('onPreResponse', (request, h) => {
      if (request.response.isBoom && request.response.isServer) {
        return errorHandler(request.response);
      }
      return h.continue;
    });
  } catch (err) {
    throw err;
  }
};

process.on('unhandledRejection', (err) => {
  process.exit(1);
});

if (!module.parent) {
  init(true);
}

export default init;
