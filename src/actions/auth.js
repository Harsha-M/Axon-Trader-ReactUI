import { push } from "react-router-redux";
import {
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  PERFORM_LOGOUT
} from '../constants/authActions';

const registeredUsers = ["buyer1", "buyer2", "buyer3", "buyer4", "buyer5", "buyer6"];

export function performLogin(username, password) {
  return (dispatch) => {
    // TODO Service call for login
    if (registeredUsers.indexOf(username) > -1) {
      dispatch(loginRequest());
      const fakeReponseData = {
        username: username,
        email: 'johnsmith@gmail.com',
        firstName: 'John',
        lastName: 'Smith',
      }
      dispatch(loginSuccess(fakeReponseData));
      dispatch(push('/dashboard'));
    }
  }
}

export function loginRequest() {
  return {
    type: AUTHENTICATION_REQUEST,
    payload: {
      isFetching: true,
      isAuthenticated: false
    }
  }
}

export function loginSuccess(data) {
  return {
    type: AUTHENTICATION_SUCCESS,
    payload: {
      isFetching: false,
      isAuthenticated: true,
      email: data.email,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName
    }
  }
}

export function loginFailure(error) {
  return {
    type: AUTHENTICATION_FAILURE,
    payload: {
      isFetching: false,
      isAuthenticated: false,
      error

    }
  }
}


export function performLogout() {
  // todo redirect to logout page
  return {
    type: PERFORM_LOGOUT,
    payload: {
      isFetching: false,
      isAuthenticated: false
    }
  }
}

