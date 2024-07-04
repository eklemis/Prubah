import type { LayoutServerLoad } from './$types';

/**
 * What you return in the function LayoutServerLoad will be available inside the $page store,
 * in the data property: $page.data. In this case we return an object with the ‘session’ property which is what we are accessing in the other code paths.
 * @param event
 * @returns
 */

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.auth()
	};
};
