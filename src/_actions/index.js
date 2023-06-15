export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const CREATE_PARTNER_START1 = 'CREATE_PARTNER_START1'
export const CREATE_PARTNER_SUCCESS1 = 'CREATE_PARTNER_SUCCESS1'
export const CREATE_PARTNER_FAILURE1 = 'CREATE_PARTNER_FAILURE1'

export const CREATE_PARTNER_START2 = 'CREATE_PARTNER_START2'
export const CREATE_PARTNER_SUCCESS2 = 'CREATE_PARTNER_SUCCESS2'
export const CREATE_PARTNER_FAILURE2 = 'CREATE_PARTNER_FAILURE2'

export const LIST_ROLES_START = 'LIST_ROLES_START'
export const LIST_ROLES_SUCCESS = 'LIST_ROLES_SUCCESS'
export const LIST_ROLES_FAILURE = 'LIST_ROLES_FAILURE'

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user }
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};

export const logoutSuccess = (user) => {
  return { type: LOGIN_SUCCESS }
};

export const logoutFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};

export const createUserStart = () => {
  return { type: CREATE_USER_START }
}

export const createUserSuccess = (partnerUser) => {
  return { type: CREATE_USER_SUCCESS, payload: partnerUser }
}

export const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, payload: error }
}

// export const listRolesStart = () => {
//   return { type: LIST_ROLES_START }
// }

export const listRolesSuccess = (listRoles) => {
  return { type: LIST_ROLES_SUCCESS, payload: listRoles }
}

export const listRolesFailure = (error) => {
  return { type: LIST_ROLES_FAILURE, payload: error }
}

// GENERAL INFORMATION
export const createPartnerStart1 = () => {
  return { type: CREATE_PARTNER_START1 }
}

export const createPartnerSuccess1 = (partner) => {
  return { type: CREATE_PARTNER_SUCCESS1, payload: partner }
}

export const createPartnerFailure1 = (error) => {
  return { type: CREATE_PARTNER_FAILURE1, payload: error }
}

// COMPANY INFORMATION
export const createPartnerStart2 = () => {
  return { type: CREATE_PARTNER_START2 }
}

export const createPartnerSuccess2 = (partner) => {
  return { type: CREATE_PARTNER_SUCCESS2, payload: partner }
}

export const createPartnerFailure2 = (error) => {
  return { type: CREATE_PARTNER_FAILURE2, payload: error }
}

