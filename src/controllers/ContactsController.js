import models from '../models';

export class ContactsController {
  static createContact(contact) {
    const { name, phoneNumber } = contact;

    return models.Contacts.create({ name, phoneNumber })
      .then(result => result)
      .catch((err) => {
        throw err;
      });
  }

  static deleteContact(phoneNumber) {
    return models.Contacts.destroy({
      where: { phoneNumber },
    })
      .then(() => ({
        message: 'phone number successfully deleted',
      }))
      .catch((err) => {
        throw err;
      });
  }
}

export default ContactsController;
