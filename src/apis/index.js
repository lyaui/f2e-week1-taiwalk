import axios from 'axios';
import jsSHA from 'jssha';

const addAuthConfig = (config) => {
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(process.env.REACT_APP_APP_KEY, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const authorization =
    'hmac username="' +
    process.env.REACT_APP_APP_ID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';

  config.headers.Authorization = authorization;
  config.headers['x-date'] = GMTString;
  return config;
};

const createdAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
createdAxios.interceptors.request.use(addAuthConfig, (error) => Promise.reject(error));

const apiGetAllSpots = (query) => createdAxios('/ScenicSpot', { params: query });
const apiGetCitySpots = ({ city, query }) => createdAxios(`/ScenicSpot/${city}`, { params: query });

const apiGetAllRestaurants = (query) => createdAxios('/Restaurant', { params: query });
const apiGetCityRestaurants = ({ city, query }) =>
  createdAxios(`/Restaurant/${city}`, { params: query });

const apiGetAllHotels = (query) => createdAxios('/Hotel', { params: query });
const apiGetCityHotels = ({ city, query }) => createdAxios(`/Hotel/${city}`, { params: query });

const apiGetAllActivities = (query) => createdAxios('/Activity', { params: query });
const apiGetCityActivities = ({ city, query }) =>
  createdAxios(`/Activity/${city}`, { params: query });

export {
  apiGetAllSpots,
  apiGetCitySpots,
  apiGetAllRestaurants,
  apiGetCityRestaurants,
  apiGetAllHotels,
  apiGetCityHotels,
  apiGetAllActivities,
  apiGetCityActivities,
};
