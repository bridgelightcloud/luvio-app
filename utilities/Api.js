const statusCodes = {
  0: {
    success: false,
    NETWORK_ERROR: 'NETWORK_ERROR',
  },
  200: {
    success: true,
    SEARCH_ACOUNTS: 'ACCOUNTS_RETURNED',
    SEARCH_EVENTS: 'EVENTS_RETURNED',
    SEND_MAGIC_LINK: 'MAGIC_LINK_SENT',
  },
  201: {
    success: true,
    CREATE_ACCOUNT: 'ACCOUNT_CREATED',
    CREATE_SESSION: 'SESSION_CREATED',
  },
  204: {
    success: true,
  },
  304: {
    success: true,
  },
  400: {
    success: false,
    CREATE_ACCOUNT: 'BAD_REQUEST',
    VERIFY_SESSION: 'BAD_REQUEST',
  },
  401: {
    success: false,
    CREATE_SESSION: 'EXPIRED_TOKEN',
  },
  403: {
    success: false,
  },
  404: {
    success: false,
    CREATE_SESSION: 'INVALID_TOKEN',
    LOOKUP_ACCOUNT: 'ACCOUNT_NOT_FOUND',
  },
  409: {
    success: false,
  },
  500: {
    success: false,
    SEARCH_ACOUNTS: 'SERVER_ERROR',
    SEARCH_EVENTS: 'SERVER_ERROR',
    CREATE_ACCOUNT: 'SERVER_ERROR',
  },
};

const Api = {
  version: 'v1',

  url(endpoint) {
    return [
      // 'http://10.0.0.11:8080',
      'https://api.getluv.io',
      `/${this.version}/`,
      endpoint,
    ].join('');
  },

  addQuery(apiUrl, data) {
    const query = Object.entries(data).map((pair) => pair.map(encodeURIComponent).join('=')).join('&');
    return `${apiUrl}?${query}`;
  },

  checkStatus(response, call) {
    // There will be no response if the server is unreacable.
    // This likely means that there is no internet connection.
    const {
      status,
      data,
    } = response || {
      status: 0,
      data: null,
    };

    const check = {
      success: statusCodes[status].success,
      code: statusCodes[status][response ? call : 'NETWORK_ERROR'],
      data,
    };

    // TODO: If there is a network error, alert the user?

    return check;
  },
};

export default Api;
