import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchData = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&x_cg_demo_api_key=CG-WPQo3LGXH5ywS2iJTeXJDZHY`
    );
    return response;
  } catch (error) {
    console.error("Error Fetching Data", error.message);
    throw error;
  }
};
