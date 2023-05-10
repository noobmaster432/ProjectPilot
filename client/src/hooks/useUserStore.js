import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => ({
  user: null,
  login: async () => {
    const loginData = JSON.parse(localStorage.getItem("loginData"));
    const userID = loginData.other._id;

    const response = await axios.get(
      `http://localhost:5000/api/user/getuser/${userID}`
    );
    set({ user : response.data.findUser});
  },
//   signup: (userData) => {
//     set({ user: userData.user, token: userData.token });
//     localStorage.setItem("user", JSON.stringify(userData.user));
//     localStorage.setItem("token", userData.token);
//   },
//   logout: () => {
//     set({ user: null, token: null });
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//   },
}));

export default useUserStore;
