import axios from "axios";
import { BASE_URL_SERVER } from "../config/server";

const API_ENDPOINT = {
  USER_LOGIN: "/api/v1/login",
  USER_REGISTER: "/api/v1/register",
};
class AccountService {
  userLogin = async (data) => {
    return await axios.post(BASE_URL_SERVER + API_ENDPOINT.USER_LOGIN, data);
  };
  userRegister = async (data) => {
    return await axios.post(BASE_URL_SERVER + API_ENDPOINT.USER_REGISTER, data);
  };
}

const accountService = new AccountService();
export default accountService;
