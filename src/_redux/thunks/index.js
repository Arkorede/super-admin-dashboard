import { loginSuccess, loginFailure, logoutSuccess, logoutFailure, listRolesSuccess, listRolesFailure, createPartnerSuccess1, createPartnerFailure1, createPartnerSuccess2, createPartnerFailure2, createPartnerSuccess3, createPartnerFailure3 } from "../../_actions";
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
      localStorage.setItem("partner_id", data.partner.partner_id)
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

export const createPartner2 = (formData) => {
  const partnerID = localStorage.getItem("partner_id");
  console.log(partnerID);

  return async (dispatch) => {
    try {
      const endpoint = `/api/admin/partner/business-information/${partnerID}`
      const response = await api.post(endpoint, formData);

      const data = response.data;
      console.log('documents upload');

      dispatch(createPartnerSuccess2(data));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(createPartnerFailure2(error.message));
      console.log(error);
    }
  };
};

export const createPartner3 = (email, password, confirmPassword) => {
  const partnerID = localStorage.getItem("partner_id");

  return async (dispatch) => {
    try {
      const endpoint = `/api/admin/partner/admin/invite/${partnerID}`
      const response = await api.post(endpoint, email, password, confirmPassword);

      const data = response.data;
      dispatch(createPartnerSuccess3(data))

      console.log(data);
    } catch (error) {
      dispatch(createPartnerFailure3(error.message))
      console.log(error);
    }
  }
}

