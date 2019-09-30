import { Get, Post } from "../utiliy/request";

interface loginBody {
  username : string,
  password : string,
}

interface registerBody {
  username : string,
  nickname : string,
  mail : string,
  password : string,
}

interface logoutBody {
  token: string,
}

interface checkBody {
  token: string,
}

export function login(body : loginBody) {
  return Post("/session/login", body);
}

export function register(body : registerBody) {
  return Post("/session/register", body);
}

export function logout(body : logoutBody) {
  return Post("/session/logout", body);
}

export function check(body : checkBody) {
  return Post("/session/check", body);
}