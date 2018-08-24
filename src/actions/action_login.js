import { push } from "react-router-redux";

const registeredUsers = [ "buyer1", "buyer2", "buyer3", "buyer4", "buyer5", "buyer6" ];

export function performLogin(username, password) {
    return (dispatch) =>  {
        // TODO Service call for login
        if (registeredUsers.indexOf(username) > -1) {
            dispatch(loginAction(username, password));
            dispatch(successLogin());
            dispatch(push('/Dashboard'));
        }
    }
}

function loginAction(username, password) {
    return {
        type: 'PERFORM_LOGIN',
        user: {
            username: username,
            password: password
        }
    }
}

function successLogin() {
    return {
        type: 'LOGIN_SUCCESS',
        isLoginSuccess: true
    }
}


export function logOutAction() {
    return {
        type: 'PERFORM_LOGOUT',
        isLoginSuccess: false
    }
}

