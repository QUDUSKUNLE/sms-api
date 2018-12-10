import 'babel-polyfill';
import server from '../../../src/server';

let getServer;
describe('contacts', () => {
  before(async () => {
    getServer = await server(false);
  });

  describe('contacts', () => {
    it('should  /POST message', async () => {
      const payload = {
        message: 'I miss you',
        receiverId: '08068429137',
        senderId: '08037136919',
      };
      const options = {
        method: 'POST',
        url: '/api/v1/sms',
        payload,
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(201);
      expect(responseData.message).to.equal(payload.message);
      expect(responseData.receiverId).to.equal(payload.receiverId);
      expect(responseData.senderId).to.equal(payload.senderId);
    });

    it('should  /GET sent messages', async () => {
      const options = {
        method: 'GET',
        url: '/api/v1/sms/sender/08037136919',
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);
      expect(response.statusCode).to.equal(200);
      expect(responseData.length).to.equal(2);
    });

    it('should  /GET received messages', async () => {
      const options = {
        method: 'GET',
        url: '/api/v1/sms/receiver/08068429137',
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData.length).to.equal(2);
    });

    it('should  /DELETE message', async () => {
      const options = {
        method: 'DELETE',
        url: '/api/v1/sms/381c0799-7f25-42cf-baba-2e4bd89b829e',
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData.message).to.equal('message successfully deleted');
    });
  });
});
