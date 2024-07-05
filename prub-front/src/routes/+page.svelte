<script lang="ts">
	import { page } from '$app/stores';
	let session = $page.data.session;
	let userName = session ? session.user?.name : 'There';
</script>

<h1>Hi {userName}, Welcome to SvelteKit</h1>
<h2>Hope you will love the SvelteKit</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
