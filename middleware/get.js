import { get } from '@sveltejs/kit';

export const get = async (req, res, next) => {
  const token = sessionStorage.getItem('userToken') || '';
  const targetDomain = 'http://localhost:3011';
  console.log('Hello token: ', token);

  if (token && req.url.startsWith(`${targetDomain}/`)) {
    req.headers.set('Authorization', `Bearer ${token}`);
  }

  return await next(req, res);
};
