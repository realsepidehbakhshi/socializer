import http from "./";

export const login = async (data) => {
  try {
    const res = await http.post(`${http.url}/authenticate`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const register = async (data) => {
  try {
    const res = await http.post(`${http.url}/registration`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const setAnswer = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await http.post(`${http.url}/result/set`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getAnswers = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await http.get(`${http.url}/result/get-all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const setNP = async (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = await http.post(
      `${http.url}/portal-user/update-password`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const recoverP = async (data) => {
  try {
    const res = await http.post(`${http.url}/reset-password`, data);
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
