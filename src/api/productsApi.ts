import AppConfig from '@/config/AppConfig';
import { AppSettings } from './api.setting';
import API from './configApi';
import { IParamsCreateProduct } from '@/interfaces/products.interface';

export default {
  addProduct(params: FormData) {
    return API.post(`${AppSettings.API_PRODUCTS_LIST}/add-product`, params)
  },
  getListProducts() {
    return API.get(`${AppSettings.API_PRODUCTS_LIST}`);
  },
  getProduct(id: string) {
    return API.get(`${AppSettings.API_PRODUCTS_LIST}/${id}`);
  },
  deleteProduct(id: string) {
    return API.delete(`${AppSettings.API_PRODUCTS_LIST}/${id}`);
  },
};
