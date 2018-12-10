import Boom from 'boom';

export const errorHandler = (error) => {
  switch (error.name) {
  case 'SequelizeUniqueConstraintError':
    const e = error.errors.map(err => err.message);
    return Boom.conflict(e[0]);
  case 'SequelizeForeignKeyConstraintError':
    return Boom.forbidden('Phone number does not exist');

  default:
    return Boom.serverUnavailable();
  }
};

export default errorHandler;
