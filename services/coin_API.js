import axios from "axios";
import { CRYPTO_URL, CRYPTO_HEADERS, ROOT_URL } from "./index";

const baseurl = CRYPTO_URL;
const headers = CRYPTO_HEADERS;

const coin_volumes = async () => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/top/mktcapfull?limit=100&tsym=USD",

      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const multi_coins = async (data) => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/pricemultifull?" + data,
      headers: headers,
    });
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const first_coin = async (data) => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/top/mktcapfull?limit=1&tsym=USD",
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
// top 5 coins starting with 2nd index
const fetchTop5Coins = async (data) => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/top/mktcapfull?limit=10&tsym=USD",
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const top_10_coins = async (data) => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/top/mktcapfull?limit=30&tsym=USD",
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const btc_data = async () => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "data/pricemultifull?fsyms=BTC&tsyms=USDT",
      headers: headers,
    });
  } catch (error) {
    console.log("Error", error);
    return error;
  }
};
const rapid_api_greed = async () => {
  try {
    return await axios({
      method: "get",
      url: ROOT_URL + "coin/greed",
    });
  } catch (error) {
    return error;
  }
};
const toExport = {
  coin_volumes,
  multi_coins,
  rapid_api_greed,
  btc_data,
  first_coin,
  top_10_coins,
  fetchTop5Coins,
};

export default toExport;
