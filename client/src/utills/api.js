import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("API endpoint not found");
    } else {
      throw error;
    }
  }
};



export const makePaymentRequest = axios.create({
  baseURL: process.env.REACT_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  },
});