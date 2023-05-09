import { AxiosRequestConfig } from "axios";
import { ENV } from "./env";

const axios: AxiosRequestConfig = {
  baseURL: ENV.BASE_URL,
  responseType: 'json',
  timeout: ENV.AXIOS_TIMEOUT,
}
export default {
  axios
};
