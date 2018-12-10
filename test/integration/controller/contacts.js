import 'babel-polyfill';
import server from '../../../src/server';

let getServer;
describe('contacts', () => {
  before(async () => {
    getServer = await server(false);
  });

  describe('contacts', () => {
    it('should  /POST contact', async () => {
      const payload = {
        name: 'Ade',
        phoneNumber: '08056638926',
      };
      const options = {
        method: 'POST',
        url: '/api/v1/contacts',
        payload,
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(201);
      expect(responseData.name).to.equal(payload.name);
      expect(responseData.phoneNumber).to.equal(payload.phoneNumber);
    });

    it('should  /DELETE contact', async () => {
      const options = {
        method: 'DELETE',
        url: '/api/v1/contacts/08025250445',
      };

      const response = await getServer.inject(options);
      const responseData = JSON.parse(response.payload);

      expect(response.statusCode).to.equal(200);
      expect(responseData.message).to.equal(
        'phone number successfully deleted',
      );
    });
  });
});
