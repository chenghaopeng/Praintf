import axios from "axios";

const server = "";

interface Body {
  [key : string] : any;
}

export default function Get(url : string, body : Body, callback : Function) {
  let url_params : string = "";
  for (let key in body) {
    if (url_params === "") url_params = "?" + key + "=" + body[key];
    else url_params += "&" + key + "=" + body[key];
  }
  axios({
    method: "GET",
    headers: { "Content-type": "application/json" },
    url: server + url + url_params,
    withCredentials: true,
  }).then(res => {
    callback(res.data);
  }).catch(error => {
    console.log(error);
  });
}

export function Post(url : string, body : Body, callback : Function) {
  axios({
    method: "POST",
    headers: { "Content-type": "application/json" },
    url: server + url,
    data: body,
    withCredentials: true,
  }).then(res => {
    callback(res.data);
  }).catch(error => {
    console.log(error);
  });
}