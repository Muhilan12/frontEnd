const BASE_URL = "http://127.0.0.1:8000";


export const API_ENDPOINTS = {
  REGISTER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,
  PROTECTED: `${BASE_URL}/protected`,
  PROFILE: `${BASE_URL}/profiles/`, 
  PROFILES: `${BASE_URL}/profiles`,
  UPDATE_PROFILE: `${BASE_URL}/profiles/update-profile`, 
  CREATE_PROFILE: `${BASE_URL}/profiles/create`, 
  FEEDBACK: `${BASE_URL}/feedback/add`,
  VIEW_FEEDBACK: `${BASE_URL}/feedback/view-feedback`,

};



export default BASE_URL;