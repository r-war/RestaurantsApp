import CONFIG from './config';

const API = {
  RESTAURANT_LIST: `${CONFIG.BASE_URL}/list`,
  RESTAURANT_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API;
