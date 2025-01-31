<script lang="ts">
	import { selectedLanguage } from '@/stores/store';

	function handleLanguageChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		selectedLanguage.set(target.value);
	}
</script>

<select
	class="rounded border px-2 py-1"
	bind:value={$selectedLanguage}
	on:change={handleLanguageChange}
>
	<option value="UA">UA</option>
	<option value="UK">UK</option>
	<option value="RU">RU</option>
</select>
