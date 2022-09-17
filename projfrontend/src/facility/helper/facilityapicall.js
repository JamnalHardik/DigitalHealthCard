// user calls
import { API } from "../../backend";
export const getAllUserForms = async (userId, token) => {
  return await fetch(`${API}/user/form/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllUserFormsForHospital = async (hospitalId, userId, token) => {
  return await fetch(`${API}/user/form/${hospitalId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getHospitalById = async (hospitalId) => {
  return await fetch(`${API}/hospital/${hospitalId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const fillData = (hospitalId, token, hospital) => {
  return fetch(`${API}/hospital/form/${hospitalId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(hospital),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserByAadhar = (aadharNumber) => {
  return fetch(`${API}/user/aadhar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ aadharNumber }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUser = (hospitalId, userId, token) => {
  return fetch(`${API}/hospital/userData/${hospitalId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
