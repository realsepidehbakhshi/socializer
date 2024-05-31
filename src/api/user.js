import http from "./";

export const login = async (data) => {
  try {
    const res = await http.post(`${http.url}/authenticate`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const userData = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await http.get(`${http.url}/portal-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res;
    }
  } catch (err) {
    console.log(err);
  }
};
