import axios from "axios";
import { ROOT_URL } from "./index";

const baseurl = ROOT_URL;

const signals = async () => {
  try {
    return await axios.get(baseurl + "coin/signals");
  } catch (error) {
    return error;
  }
};
const notifications = async () => {
  try {
    return await axios.get(baseurl + "account/notification");
  } catch (error) {
    return error;
  }
};
const toExport = {
  signals,
  notifications,
};

export default toExport;
