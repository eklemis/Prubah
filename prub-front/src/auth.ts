import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/sveltekit/providers/google';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
	const authOptions = {
		providers: [
			GoogleProvider({
				clientId: process.env.GOOGLE_ID,
				clientSecret: process.env.GOOGLE_SECRET,
				authorization: {
					params: {
						prompt: 'consent',
						access_type: 'offline',
						response_type: 'code'
					}
				}
			})
		],
		secret: process.env.AUTH_SECRET,
		trustHost: true
	};
	return authOptions;
});
