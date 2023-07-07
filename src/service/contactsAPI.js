import axios from 'axios';



const BASEURL = 'https://64a5a1b100c3559aa9c000fc.mockapi.io';
export const contactAPI = axios.create({
  BaseURL: 'https://64a5a1b100c3559aa9c000fc.mockapi.io/api/v1',
});

export const getContacts = async () => {
  const { data } = await contactAPI.get(`${BASEURL}/Contacts`);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactAPI.post(`${BASEURL}/Contacts`, contact);
  return data;
};


export const delContacts = async id => {
  const { data } = await contactAPI.delete(`${BASEURL}/Contacts/${id}`);
  return data;
};