import axios from "axios";
import { CRYPTO_URL, CRYPTO_HEADERS } from "./index";

const baseurl = CRYPTO_URL;
const headers = CRYPTO_HEADERS;

const latest_news = async () => {
  try {
    return await axios.get(baseurl + "data/v2/news/?lang=EN", {
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const top5LatestNews = async () => {
  try {
    return await axios.get(baseurl + "data/v2/news/?lang=EN", {
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};

const topBTCNews = async () => {
  try {
    return await axios.get(baseurl + "data/v2/news/?categories=BTC&lang=EN", {
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const topETHNews = async () => {
  try {
    return await axios.get(baseurl + "data/v2/news/?categories=ETH&lang=EN", {
      headers: headers,
    });
  } catch (error) {
    return error;
  }
};
const toExport = {
  latest_news,
  top5LatestNews,
  topBTCNews,
  topETHNews,
};

export default toExport;
