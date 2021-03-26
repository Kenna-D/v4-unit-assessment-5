const initialState = {
  username: '',
  profile_pic: ''
};

const UPDATE_USER = 'UPDATE_USER';
const USER_LOGOUT = 'USER_LOGOUT'

export function updateUser(username, profile_pic){
  return {
    type: UPDATE_USER,
    payload: {username, profile_pic}
  }
};

export function logout(){
  return {
    type: USER_LOGOUT
  }
};

export default function reducer(state= initialState, action) {
  switch(action.type){
    case UPDATE_USER:
      return {...state, ...action.payload};
    case USER_LOGOUT:
      return initialState;
      default: return state;
  }
};