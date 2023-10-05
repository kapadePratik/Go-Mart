import axios from "axios";

const API_BASE_URL = "https://gomart.thecompletesoftech.pw/api/v1/customer"; // Replace with your API endpoint

export const fetchData = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getCategory`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getBanner = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getBanner`);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getItem = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getItem`);

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const apimethod = async (url, formdata) => {
  try {
    var token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2dvbWFydC50aGVjb21wbGV0ZXNvZnRlY2gucHcvYXBpL3YxL2N1c3RvbWVyL2xvZ2luIiwiaWF0IjoxNjk2NDA0NjUwLCJleHAiOjM4NTY0MDQ2NTAsIm5iZiI6MTY5NjQwNDY1MCwianRpIjoid1NGaTN2YXVwOWNGNVpJbCIsInN1YiI6IjIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.pxUAA6cpWntg4XT8Ia6TvAytaHuGV6r8JL-D1K27-Ms`;
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/${url}`,
      formdata,
      header
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
