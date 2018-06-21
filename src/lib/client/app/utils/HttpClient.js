import axios from 'axios';

const supportedErrorCodes = {
  //INSUFFICIENT_PERMISSIONS: 'INSUFFICIENT_PERMISSIONS',
};

const throwErrorWithCodeAndMsg = ({ code, message }) => {
  const error = new Error(message);

  error.code = code;

  return error;
};
const getErrorCodeAndMsg = errors => ({
  code:
    (Array.isArray(errors) && errors[0] && supportedErrorCodes[errors[0].code]) || 'UNKNOWN_ERROR',
  message:
    (Array.isArray(errors) && errors[0] && errors[0].message) ||
    'Something went wrong while making HTTP requests.',
});
const extractErrorListFromResponse = error =>
  error.response && error.response.data ? error.response.data.errors : error;
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

export { HttpClient as default, supportedErrorCodes };
