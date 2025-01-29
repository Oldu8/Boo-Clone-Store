<script lang="ts">
	import type { Catalog } from '@/types/Catalog/catalog';

	export let item: Catalog;
	export let category: string;
</script>

<div
	class="item-card flex cursor-pointer flex-col items-center justify-end rounded-lg border border-gray-300 bg-white p-4 transition-transform hover:scale-105"
>
	<a href={`/catalog/${category}/${item.id}`}>
		<img
			src={`https://back.boo.ua/${item.imageSecondary}`}
			alt={item.name}
			class="mb-4 h-80 w-80 rounded-sm bg-gray-100 object-contain"
		/>
		<h5 class="sm:text-md mt-auto text-center text-sm font-semibold">
			{item.name.length > 100 ? `${item.name.substring(0, 40)}...` : item.name}
		</h5>
	</a>
</div>
