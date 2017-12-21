import * as axios from "axios";
import * as q from "q";
import {configuration} from "../../../config/properties";

const AUTHENTICATION_STATE = 'BASR_USER';
const AUTHENTICATION_DURATION_MINUTES = 15;
const AUTH_DURATION = AUTHENTICATION_DURATION_MINUTES * 60 * 1000;
const {host, port, base} = configuration.rest;

export function login(user) {
  let deferred = q.defer();

  authenticate(user).then(() => {
    let {username} = user;
    let authenticationState = {
      user: {
        username
      },
      expires: new Date(new Date().getTime() + AUTH_DURATION)
    };

    localStorage.setItem(AUTHENTICATION_STATE,
        JSON.stringify(authenticationState));

    deferred.resolve();
  }).catch(deferred.reject);

  return deferred.promise;
}

export function register(user) {
  let deferred = q.defer();

  axios.request({
    url: "/auth/register",
    method: 'post',
    baseURL: `https://${host}:${port}` + base,
    data: user
  })
  .then(deferred.resolve)
  .catch((err) => {
    if (err.response) {
      deferred.reject(err.response.data);
    } else if (err.request) {
      deferred.reject(err.request);
    } else {
      deferred.reject();
    }
  });

  return deferred.promise;
}

function authenticate(user) {
  let {username, password} = user;
  return axios.request({
    url: "/auth/login",
    baseURL: `https://${host}:${port}` + base,
    auth: {
      username, password
    }
  });
}

export function logout() {
  localStorage.removeItem(AUTHENTICATION_STATE);
}

export function whoami() {
  let authState = getAuthenticationState();
  if (!authState) {
    return null;
  }
  return authState.user;
}

export function isLoggedIn() {
  let authenticationState = getAuthenticationState();
  if (!authenticationState) {
    return false;
  }
  let expireTime = new Date(authenticationState.expires);
  let expired = expireTime < new Date();
  if (expired) {
    console.log(`Token is expired at ${expireTime}`);
    logout();
  }
  return !expired;
}

function getAuthenticationState() {
  let authenticationState = localStorage.getItem(AUTHENTICATION_STATE);
  if (!!authenticationState) {
    return JSON.parse(authenticationState);
  }
  return null;
}