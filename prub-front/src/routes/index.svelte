<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';

	let password: String;
</script>

<nav>
	<p>
		These actions are all using the methods exported from
		<code>@auth/sveltekit/client</code>
	</p>
	<div class="actions">
		<div class="wrapper-form">
			<button on:click={() => signIn('google')}>Sign In with Google</button>
		</div>
		<div class="wrapper-form">
			<div class="input-wrapper">
				<label for="password">Password</label>
				<input bind:value={password} type="password" id="password" name="password" required />
			</div>
			<button on:click={() => signIn('credentials', { password })}>
				Sign In with Credentials
			</button>
			<button on:click={() => signOut()}> Sign Out </button>
		</div>
	</div>
</nav>
