import { jwtDecode } from "jwt-decode";

const checkToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  const decoded = jwtDecode(token);

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    localStorage.removeItem("token");
    return false;
  }

  return true;
};

export default checkToken;