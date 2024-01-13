/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const token = localStorage.getItem('userToken') || '';
  
    if (event.url.pathname.startsWith('http://localhost')) {
      event.request.headers.set('Authorization', `Bearer ${token}`);
    }
    console.log('Added token header to: ', event.url.pathname);
    const response = await resolve(event);
  
    return response;
}
  