import StandardResponseWrapper from './standard-response-wrapper';
import StandardErrorWrapper from './standard-error-wrapper';
import axios from 'axios';

const throwErrorWithCodeAndMsg = ({ code, message }) => {
  const error = new Error(message);

  error.code = code;

  return error;
};
const getErrorCodeAndMsg = error => ({
  code: error.code || 'UNKNOWN_ERROR',
  message: error.message || 'Something went wrong while making a HTTP request.',
});
const extractErrorListFromResponse = error =>
  (error.response &&
    StandardResponseWrapper.verifyFormat(error.response.data) &&
    StandardResponseWrapper.deserialize(error.response.data).getNthData(0) &&
    StandardErrorWrapper.verifyFormat(
      StandardResponseWrapper.deserialize(error.response.data).getNthData(0).detail
    ) &&
    StandardErrorWrapper.deserialize(
      StandardResponseWrapper.deserialize(error.response.data).getNthData(0).detail
    ).getNthError(0)) ||
  error;
const handleError = error =>
  throwErrorWithCodeAndMsg(getErrorCodeAndMsg(extractErrorListFromResponse(error)));

class HttpClient {
  static createInstance(instanceConfig) {
    const axiosInstance = axios.create(instanceConfig);

    axiosInstance.interceptors.request.use(config => {
      const reqHeader = {
        Accept: 'application/json',
      };

      return {
        ...config,
        withCredentials: true,
        headers: {
          ...config.headers,
          ...reqHeader,
        },
      };
    }, null);

    axiosInstance.interceptors.response.use(null, error => Promise.reject(handleError(error)));

    return axiosInstance;
  }
}

export { HttpClient as default };
