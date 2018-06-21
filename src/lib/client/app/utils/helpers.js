import queryString from 'query-string';

const redirectTo = url => {
  window.location.assign(url);
};

const parseQueryString = queryStr => (queryStr && queryString.parse(queryStr)) || {};

export { redirectTo, parseQueryString };
