<script lang="ts">
	import '../app.css';
	import { AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { Burger, BookOpen, Home, ChartMixed, RectangleList, UserGroup } from '$lib/icons';
	import UserCircle from '$lib/icons/UserCircle.svelte';

	let currentTile: number = 0;
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><Burger /></svelte:fragment>
	Prubah
	<svelte:fragment slot="trail"><UserCircle /></svelte:fragment>
</AppBar>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/"><Home /></AppRailAnchor>
	</svelte:fragment>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<svelte:fragment slot="lead"><BookOpen /></svelte:fragment>
		<span>Tile 1</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<svelte:fragment slot="lead"><RectangleList /></svelte:fragment>
		<span>Tile 2</span>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<svelte:fragment slot="lead"><ChartMixed /></svelte:fragment>
		<span>Tile 3</span>
	</AppRailTile>
	<!-- --- -->
	<svelte:fragment slot="trail">
		<AppRailAnchor href="/" target="_blank" title="Account"><UserGroup /></AppRailAnchor>
	</svelte:fragment>
</AppRail>
