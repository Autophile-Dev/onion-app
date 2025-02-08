import axios from "axios";
import { ROOT_URL } from "./index";

const baseurl = ROOT_URL;

const Login_API = async (data_parse) => {
  try {
    return await axios({
      method: "post",
      url: baseurl + "account/login/",
      data: data_parse,
    });
  } catch (error) {
    return error;
  }
};
const Google_Login = async (data_parse) => {
  try {
    return await axios({
      method: "post",
      url: baseurl + "account/google_login/",
      data: data_parse,
    });
  } catch (error) {
    return error;
  }
};
const SignUp_API = async (data_parse) => {
  try {
    return await axios({
      method: "post",
      url: baseurl + "account/register/",
      data: data_parse,
    });
  } catch (error) {
    return error;
  }
};
const User_edit_API = async (data_parse) => {
  try {
    console.log("data1", data_parse);
    return await axios({
      method: "post",
      url: baseurl + "account/register/",
      data: data_parse,
    });
  } catch (error) {
    return error;
  }
};

const toExport = {
  Login_API,
  SignUp_API,
  Google_Login,
  baseurl,
};

export default toExport;
