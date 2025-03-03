import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchData = async (page, currency) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=CG-WPQo3LGXH5ywS2iJTeXJDZHY`
    );
    return response;
  } catch (error) {
    console.error("Error Fetching Data", error.message);
    throw error;
  }
};

let controller;

export const searchCoin = async (query) => {
  if (controller) controller.abort();
  controller = new AbortController();
  try {
    const response = await axios.get(
      `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=CG-WPQo3LGXH5ywS2iJTeXJDZHY`,
      { signal: controller.signal }
    );
    return response;
  } catch (error) {
    if (error.name === "CanceledError") {
      console.log("Request Canceled:", query);
    } else {
      console.error("Error Fetching Data", error.message);
      throw error;
    }
  }
};

export const marketChart = async (coin) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`
    );
    return response;
  } catch (error) {
    console.error("Error Fetching Data", error.message);
    throw error;
  }
};
