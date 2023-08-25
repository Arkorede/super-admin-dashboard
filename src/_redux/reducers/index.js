import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAILURE, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, CREATE_PARTNER_START1, CREATE_PARTNER_SUCCESS1, CREATE_PARTNER_FAILURE1, CREATE_PARTNER_START2, CREATE_PARTNER_SUCCESS2, CREATE_PARTNER_FAILURE2, CREATE_PARTNER_START3, CREATE_PARTNER_SUCCESS3, CREATE_PARTNER_FAILURE3, LIST_ROLES_START, LIST_ROLES_SUCCESS, LIST_ROLES_FAILURE } from "../../_actions";

const initialState = {
  partnerUser: null,
  currentUser: null,
  error: null,
  roles: null,
  partner1: null,
  partner2: null,
  partner3: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, currentUser: null, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case LOGOUT_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_USER_START:
      return { ...state }
    case CREATE_USER_SUCCESS:
      return { ...state, partnerUser: action.payload, error: null };
    case CREATE_USER_FAILURE:
      return { ...state, partnerUser: null, error: action.payload }
    default:
      return state;
  }
};

// GENERAL INFORMATION
export const partner1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTNER_START1:
    case CREATE_PARTNER_START2:
      return { ...state };
    case CREATE_PARTNER_SUCCESS1:
    case CREATE_PARTNER_SUCCESS2:
      return { ...state, partner1: action.payload, error: null };
    case CREATE_PARTNER_FAILURE1:
    case CREATE_PARTNER_FAILURE2:
      return { ...state, partner1: null, error: action.payload }
    default:
      return state;
  }
};

// COMPANY INFORMATION
export const partner2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTNER_START2:
      return { ...state };
    case CREATE_PARTNER_SUCCESS2:
      return { ...state, partner2: action.payload, error: null };
    case CREATE_PARTNER_FAILURE2:
      return { ...state, partner2: null, error: action.payload }
    default:
      return state;
  }
};

// INVITE A TEAM MEMBER
export const partner3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PARTNER_START3:
      return { ...state };
    case CREATE_PARTNER_SUCCESS3:
      return { ...state, partner3: action.payload, error: null };
    case CREATE_PARTNER_FAILURE2:
      return { ...state, partner3: null, error: action.payload }
    default:
      return state;
  }
};

// export const roleReducer = (state = [], action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case LIST_ROLES_START:
//       return { ...state }
//     case LIST_ROLES_SUCCESS: {
//       const { roles } = payload;
//       return { ...state, roles };
//     }
//   }
// }

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ROLES_START:
      return { ...state }
    case LIST_ROLES_SUCCESS:
      return { ...state, roles: action.payload, error: null }
    case LIST_ROLES_FAILURE:
      return { ...state, roles: null, error: action.payload }
    default:
      return state;
  }
}