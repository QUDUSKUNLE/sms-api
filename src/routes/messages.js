import messagesSchema from '../schema/messages';
import MessagesController from '../controllers/MessagesController';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/sms',
      handler: async (request, h) => {
        const result = await MessagesController.sendMessage(request.payload);

        return h.response(result).code(201);
      },
      options: {
        validate: {
          payload: messagesSchema,
        },
      },
    },
    {
      method: 'GET',
      path: '/sms/sender/{senderId}',
      handler: async (request, h) => MessagesController.getSentMessages(`${encodeURIComponent(request.params.senderId)}`),
    },
    {
      method: 'GET',
      path: '/sms/receiver/{receiverId}',
      handler: async (request, h) => MessagesController.getReceivedMessages(`${encodeURIComponent(request.params.receiverId)}`),
    },
    {
      method: 'DELETE',
      path: '/sms/{id}',
      handler: async (request, h) => MessagesController.deleteMessage(`${encodeURIComponent(request.params.id)}`),
    },
  ]);
};

export const name = 'messages';
export default register;
