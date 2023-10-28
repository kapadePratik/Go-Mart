import axios from "axios";

const API_BASE_URL = "https://gomart.thecompletesoftech.in/api/v1/customer"; // Replace with your API endpoint

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
    var token = localStorage.getItem("token");
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
    console.log("Catch Error ==> "+ error);
    return false;
  }
};

export const apigetmethod = async (url) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${url}`
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const userregister = async (url, formdata) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${url}`,
      formdata,
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const Login = async (url, formdata) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${url}`,
      formdata,
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const verifyOtp = async (url, formdata) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/${url}`,
      formdata,
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const useraddress  = async (url, formdata) => {
  try {
    var token = localStorage.getItem("token");
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    const response = await axios.post(
      `${API_BASE_URL}/${url}`,
      formdata,header
    );
    return response.data;
  } catch (error) {
    return false;
  }
};