import axios from 'axios';
import AppConfig from '../config/AppConfig';
// import { ACCESS_TOKEN } from '../constant/keyStorage.constant';
// import { getItemLocalStorage } from '../utils/common';
const client = axios.create(AppConfig.axios);

// const configHeader = () => {
//   return {
//     headers: {
//       'Authorization': `Bearer ${getItemLocalStorage(ACCESS_TOKEN)}`
//     }
//   }
// }

// const myClient = {
//   post(endpoint: string, mParams: any, config?: any) {
//     return client.post(endpoint, mParams, { ...config, ...configHeader() });
//   },
//   put(endpoint: string, mParams?: any, config?: any) {
//     return client.put(endpoint, mParams, { ...config, ...configHeader() });
//   },
//   get(endpoint: string, config?: any) {
//     return client.get(endpoint, { ...config, ...configHeader() });
//   },
//   delete(endpoint: string, config?: any) {
//     return client.delete(endpoint, { ...config, ...configHeader() });
//   },
// };

const myClient = {
  post(endpoint: string, mParams: any, config?: any) {
    return client.post(endpoint, mParams);
  },
  put(endpoint: string, mParams?: any, config?: any) {
    return client.put(endpoint, mParams);
  },
  get(endpoint: string, config?: any) {
    return client.get(endpoint);
  },
  delete(endpoint: string, config?: any) {
    return client.delete(endpoint);
  },
};

export default myClient;
