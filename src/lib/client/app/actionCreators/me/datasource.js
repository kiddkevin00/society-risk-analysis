import HttpClient from '../../utils/HttpClient';
import constants from '../../utils/constants';

const httpClient = HttpClient.createInstance({
  baseURL: constants.baseUrl.sraBackendCore,
});

export const subscribeToEmailList = email => httpClient.post('/api/v0/auth/subscribe', { email });

export const checkAuthentication = email => httpClient.get('/api/v0/auth/check', { email });
