import contactSchema from '../schema/contacts';
import ContactsController from '../controllers/ContactsController';

export const register = (plugin) => {
  plugin.route([
    {
      method: 'POST',
      path: '/contacts',
      handler: async (request, h) => {
        const result = await ContactsController.createContact(request.payload);

        return h.response(result).code(201);
      },
    },
    {
      method: 'DELETE',
      path: '/contacts/{phoneNumber}',
      handler: async (request, h) => ContactsController.deleteContact(
          `${encodeURIComponent(request.params.phoneNumber)}`,
        ),
    },
  ]);
};

export const name = 'contacts';
export default register;
