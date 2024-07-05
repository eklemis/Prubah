<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	console.log('Session:', $page.data.session);
</script>

<h1>This page required authenticated user</h1>
<div class="wrapper-form">
	<button on:click={() => signOut()}> Sign Out </button>
</div>
