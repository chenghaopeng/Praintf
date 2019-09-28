import axios from "axios";

const server = "https://mockapi.eolinker.com/CNCnNla06d5a02fe4ff2c6fefbd70c85e033731b5a718f2";

export function Get(url : string, body : any) {
  let url_params : string = "";
  for (let key in body) {
    if (url_params === "") url_params = "?" + key + "=" + body[key];
    else url_params += "&" + key + "=" + body[key];
  }
  return axios({
    method: "GET",
    headers: { "Content-type": "application/json" },
    url: server + url + url_params,
    withCredentials: true,
  }).then(res => {
    return res.data;
  }).catch(error => {
    console.log(error);
  });
}

export function Post(url : string, body : any) {
  return axios({
    method: "POST",
    headers: { "Content-type": "application/json" },
    url: server + url,
    data: body,
    withCredentials: true,
  }).then(res => {
    return res.data;
  }).catch(error => {
    console.log(error);
  });
}