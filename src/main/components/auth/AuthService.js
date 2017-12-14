const AUTHENTICATION_STATE = 'BASR_USER';

export function login(user) {
  if (!authenticate(user)) {
    return false;
  }
  let authenticationState = {
    user: user,
    expires: new Date(new Date().getTime() + 60000)
  };

  localStorage.setItem(AUTHENTICATION_STATE,
      JSON.stringify(authenticationState));
  return true;
}

function authenticate(user) {
  return user && !!user.username && user.username.length;
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
  let expired =  expireTime < new Date();
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