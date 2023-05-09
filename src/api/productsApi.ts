import AppConfig from '@/config/AppConfig';
import { AppSettings } from './api.setting';
import API from './configApi';

export default {
  getListProducts() {
    return API.get(`${AppSettings.API_PRODUCTS_LIST}`);
  },
  deleteProduct(id: string) {
    return API.delete(`${AppSettings.API_PRODUCTS_LIST}/${id}`)
  }
};
