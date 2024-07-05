import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/sveltekit/providers/google';

const GOOGLE_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const GOOGLE_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;
const AUTH_SECRET = import.meta.env.VITE_AUTH_SECRET;
const env = import.meta.env;
export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
	let googleProvider = GoogleProvider({
		clientId: GOOGLE_ID,
		clientSecret: GOOGLE_SECRET,
		authorization: {
			params: {
				prompt: 'consent',
				access_type: 'offline',
				response_type: 'code'
			}
		}
	});
	const authOptions = {
		providers: [googleProvider],
		secret: AUTH_SECRET,
		trustHost: true
	};
	return authOptions;
});
