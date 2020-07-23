const statusCodes = {
  200: {
    success: true,
    LOOKUP_ACCOUNT: 'ACCOUNT_FOUND',
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
    CREATE_ACCOUNT: 'NOT_FOUND',
    CREATE_SESSION: 'INVALID_TOKEN',
    LOOKUP_ACCOUNT: 'ACCOUNT_NOT_FOUND',
  },
  409: {
    success: false,
  },
  500: {
    success: false,
    CREATE_ACCOUNT: 'SERVER_ERROR',
  },
};

const Api = {
  version: 'v1',

  url(endpoint) {
    return [
      // process.env.API_HOST || 'https://api.getluv.io',
      process.env.API_HOST_DEV || 'http://10.0.0.107:8080/:8080',
      process.env.API_PATH || `/${this.version}/`,
      endpoint,
    ].join('');
  },

  checkStatus(response, call) {
    const { status, data } = response;
    const check = {
      success: statusCodes[status].success,
      code: statusCodes[status][call],
      data,
    };
    return check;
  },
};

export default Api;
