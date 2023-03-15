import axiosInstance from "../configs/axiosInstance.js";

export const fetchReadJhoanLabra = async () => {
  try {
    const options = {
      method: 'GET',
      url: '/json/jhoanlabra.json'
    };
    const { data } = await axiosInstance(options);
    return data;
  } catch (error) {
    console.log(error);
  }
};