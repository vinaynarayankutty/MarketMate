const API_URL = 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/';

const makeRequest = async <T>(config?: RequestInit): Promise<T> => {
  try {
    const response = await fetch(`${API_URL}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error;
  }
};

export const fetchStocksData = async (): Promise<any> => {
  return makeRequest();
};
