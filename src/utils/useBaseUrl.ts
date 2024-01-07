let baseUrl: string = process.env.NODE_ENV === 'development'
  ? process.env.BASE_URL_DEVELOPMENT!
  : process.env.BASE_URL_PRODUCTION!;

export { baseUrl };