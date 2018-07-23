const initialState = {
    user: {},
    username: '',
    password: ''
  }
  
  const USER_DATA = 'USER_DATA';
  const UPDATE_USER = 'UPDATE_USER';
  const LOGOUT = 'LOGOUT';
  
  export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
      case USER_DATA:
        return Object.assign({}, state, { user: action.payload });
      case UPDATE_USER:
        return { ...state, username: payload.username, password: payload.password };
      case LOGOUT:
        return initialState;
      default:
        return state;
    }
  }
  
  export function getUserData(user) {
    return {
      type: USER_DATA,
      payload: user
    };
  }

  export function updateUser(user) {
    return {
      type: UPDATE_USER,
      payload: user
    }
  }
  
  export function logout() {
    return {
      type: LOGOUT
    }
  }