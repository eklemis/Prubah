<script lang="ts">
	import { page } from '$app/stores';
	import { clipboard } from '@skeletonlabs/skeleton';
	let session = $page.data.session;
	let userName = session ? session.user?.name : 'There';

	const exampleData: string = 'This text was copied by the Skeleton clipboard action.';
</script>

<button use:clipboard={exampleData}>Copy</button>

<h1>Hi {userName}, Welcome to SvelteKit</h1>
<h2>Hope you will love the SvelteKit</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
