import HttpClient from '../../../utils/HttpClient';
import constants from '../../../utils/constants';

const httpClient = HttpClient.createInstance({
  baseURL: constants.baseUrl.sraBackendCore,
});

// eslint-disable-next-line import/prefer-default-export
export const login = (email, password) =>
  httpClient.post('/api/v0/auth/login', { email, password });
