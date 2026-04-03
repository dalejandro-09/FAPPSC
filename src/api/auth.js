import axios from "./axios.js";

export const registerRequest = async (user) => {
  const res = await axios.post("/register", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res;
};

export const loginRequest = async (user) => {
  const res = await axios.post("/login", user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }

  return res;
};

export const verifyTokenRequest = () => axios.get("/verify");
