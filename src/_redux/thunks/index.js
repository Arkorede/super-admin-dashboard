import { loginSuccess, loginFailure, logoutSuccess, logoutFailure, listRolesSuccess, listRolesFailure, createPartnerSuccess1, createPartnerFailure1, createPartnerSuccess2, createPartnerFailure2 } from "../../_actions";
import axios from 'axios';
import api from '../../axios/api';

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/admin/login', {
        email, password
      });

      const data = response.data;
      localStorage.setItem('access_token', data.access_token);
      console.log('logged in');

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      // console.log(error)
    }
  }
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      const data = await response.json();
      dispatch(logoutSuccess());

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(logoutFailure(error.message))
      console.log(error)
    }
  }
};

export const createUser = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://credbevy-env.eba-nsfp43cc.us-east-1.elasticbeanstalk.com/api/partner/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('logged in');

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      console.log(error)
    }
  }
};

export const listRoles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://credbevy-env.eba-nsfp43cc.us-east-1.elasticbeanstalk.com/api/partner/roles', {
        headers: {
          'Authorization': "",
          'Content-Type': 'application/json'
        },
      });

      const data = response.data;
      console.log('roles listed');

      dispatch(listRolesSuccess(data.roles));

      // console.log(response);
      // console.log(data);
    }
    catch (error) {
      dispatch(listRolesFailure(error.message))
      console.log(error)
    }
  }
};

export const createPartner1 = (partner_name, partner_display_name, partner_address, partner_contact_phone_number, partner_website, partner_support_email, partner_contact_email) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/admin/partner/general-information',
        { partner_name, partner_display_name, partner_address, partner_contact_phone_number, partner_website, partner_support_email, partner_contact_email }
      );

      const data = response.data;
      console.log('Partner created');

      dispatch(createPartnerSuccess1(data.partner));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(createPartnerFailure1(error.message));
      console.log(error);
    }
  };
};

// cac_uploads.forEach((cac_upload) => {
//   formData.append('cac_uploads[]', cac_upload);
// })
// license_uploads.forEach((license_upload) => {
//   formData.append('license_uploads[]', license_upload);
// })
export const createPartner2 = (partner_RC_Number, cac_uploads, license_uploads) => {
  return async (dispatch) => {
    const formData = new FormData();

    formData.append('partner_RC_Number', partner_RC_Number);
    for (let i = 0; i < cac_uploads.length; i++) {
      formData.append('cac_uploads[]', cac_uploads[i]);
    }
    for (let i = 0; i < license_uploads.length; i++) {
      formData.append('license_uploads[]', license_uploads[i]);
    }
    try {
      const response = await api.post('/api/admin/partner/business-information/94dcb314-08cf-4003-a6a6-17142cf0a4ae', formData);

      const data = response.data;
      console.log('documents upload');

      dispatch(createPartnerSuccess2(data.status));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(createPartnerFailure2(error.message));
      console.log(error);
    }
  };
};

