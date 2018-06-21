export default {
  baseUrl: {
    sraBackendCore:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8087'
        : 'https://sra-backend-core.herokuapp.com/',
  },

  noop() {},
};
