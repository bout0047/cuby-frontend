import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username');
        if (!username) {
			return fail(400, { username, missingUser: true });
		}

		const password = data.get('password');
        if (!password) {
			return fail(400, { password, missingPass: true });
		}

        const res = await fetch('http://localhost:3011/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                username, 
                password
            }),
        });
        const response = await res.json();
        console.log(res);
        console.log(response);
        if (res.ok) {
            //cookies.set('token', response.token);
            throw redirect(307, '/home');
        } else {
            if (response.error === 'Authentication failed. User not found.') {
                return fail(400, { username, incorrectUser: true });
            } else if (response.error === 'Authentication failed. Incorrect password.') {
                return fail(400, { username, incorrectPass: true });
            } else {
                return fail(500, { username, serverError: true });
            }
        }
	}
};
