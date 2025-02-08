import axios from "axios";
import { FEAR_AND_GREED_URL } from "./index";

const baseurl = FEAR_AND_GREED_URL;

const fearAndGreed = async () => {
  try {
    return await axios({
      method: "get",
      url: baseurl + "?limit=366&date_format=us",
    });
  } catch (error) {
    console.log(error);
  }
};

const toExport = {
  fearAndGreed,
};

export default toExport;
