import models from '../models';

export class MessagesController {
  static sendMessage(details) {
    const { message, receiverId, senderId } = details;

    return models.Messages.create({ message, receiverId, senderId })
      .then(result => result)
      .catch((err) => {
        throw err;
      });
  }

  static getSentMessages(senderId) {
    return models.Messages.findAll({
      where: { senderId },
    })
      .then((result) => {
        if (!result) return { message: 'You have not sent any messages' };
        return result;
      })
      .catch((err) => {
        throw err;
      });
  }

  static getReceivedMessages(receiverId) {
    return models.Messages.findAll({
      where: { receiverId },
    })
      .then((result) => {
        if (!result) {
          return { message: 'You have not received any messages yet' };
        }
        return result;
      })
      .catch((err) => {
        throw err;
      });
  }

  static deleteMessage(id) {
    return models.Messages.destroy({
      where: { id },
    })
      .then(() => ({ message: 'message successfully deleted' }))
      .catch((err) => {
        throw err;
      });
  }
}

export default MessagesController;
