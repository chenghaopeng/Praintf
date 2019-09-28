import { Get, Post } from "../utiliy/request";

export interface loginBody {
  username : string,
  password : string,
}

export interface registerBody {
  username : string,
  nickname : string,
  mail : string,
  password : string,
}

export interface logoutBody {
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