<script>
	import Login from './pages/Login.svelte'
	import Header from './components/Header.svelte'
	import Footer from './components/Footer.svelte'
	export let name
</script>

<style>
	h1 {
		color: purple
	}
</style>

<!-- Component -->
<div class='container'>
	<Login/>
</div>