export const ROUTE = {
  HOME: '/index',
  EXPLORE: '/explore/:type',
  DETAIL: '/:type/:spotId',
  SEARCH: '/search',
  BUILD_EXPLORE_PATH: ({ type }) => `/explore/${type}`,
  BUILD_DETAIL_PATH: ({ type, id }) => `/${type}/${id}`,
};
