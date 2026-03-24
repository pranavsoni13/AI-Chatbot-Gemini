import axios from "axios";

const API_URL = "https://chatbot-backend-072q.onrender.com/chat";

export const sendMessage = async (message) => {
  try {
    const res = await axios.post(API_URL, { message });
    return res.data.response;
  } catch (err) {
    return "Error: Unable to fetch response";
  }
};