const SERVER_URL = 'http://www.eosfrontier.space:5000/';
const API_BASE = `${SERVER_URL}api/`;

export const environment = {
  production: false,
  API_URL: API_BASE,
  WEATHER: {
    API_URL: `${API_BASE}weather/`
  },
  SOCKET: {
    API_URL: `${API_BASE}io/`
  },
  DATETIME: {
    API_URL: `${API_BASE}time/`
  },
  FOB: {
    API_URL: `${API_BASE}fob/`
  },
  MISSIONS: {
    API_URL: `${API_BASE}missions/`
  },
};
