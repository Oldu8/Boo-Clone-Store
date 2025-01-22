<script lang="ts">
</script>

<div class="footer-wrapper bg-dark py-8 text-white">
	<footer class="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
		<!-- Социальные сети -->
		<div class="flex flex-col space-y-4">
			<h3 class="text-lg font-bold">Соцмережі</h3>
			<a href="#" class="flex items-center space-x-2">
				<span>📱</span> <span>Viber</span>
			</a>
			<a href="#" class="flex items-center space-x-2">
				<span>✈️</span> <span>Telegram</span>
			</a>
			<a href="#" class="flex items-center space-x-2">
				<span>📘</span> <span>Facebook</span>
			</a>
			<a href="#" class="flex items-center space-x-2">
				<span>📷</span> <span>Instagram</span>
			</a>
		</div>

		<!-- Подписка -->
		<div>
			<h3 class="text-lg font-bold">Підписка на оновлення</h3>
			<p class="text-sm text-gray-400">
				Підпишіться на наші оновлення, щоб завчасно отримувати інформацію про надходження нових
				товарів, вигідних пропозицій та акцій.
			</p>
			<form class="mt-4 flex">
				<div class="relative flex-1">
					<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">@</span>
					<input
						type="email"
						placeholder="email@email.com"
						class="w-full rounded-l-md border border-gray-300 bg-white py-2 pl-8 pr-4 text-gray-700"
					/>
				</div>
				<button
					type="submit"
					class="rounded-r-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
				>
					→
				</button>
			</form>
		</div>

		<!-- Навигация -->
		<div class="flex flex-col md:col-span-2 md:flex-row md:justify-between">
			<div>
				<ul class="space-y-2">
					<li><a href="#" class="text-sm hover:underline">Про нас</a></li>
					<li><a href="#" class="text-sm hover:underline">Контакти</a></li>
					<li><a href="#" class="text-sm hover:underline">Повернення та гарантія</a></li>
					<li><a href="#" class="text-sm hover:underline">Новини та акції</a></li>
				</ul>
			</div>
			<div>
				<ul class="space-y-2">
					<li><a href="#" class="text-sm hover:underline">Стати партнером</a></li>
					<li><a href="#" class="text-sm hover:underline">Користувацька угода</a></li>
					<li><a href="#" class="text-sm hover:underline">Оплата та доставка</a></li>
				</ul>
			</div>
		</div>

		<!-- Копирайт -->
		<div class="col-span-3 text-center text-sm text-gray-400 md:text-left">
			© 2018–2024 BOO!UA інтернет-магазин надійних б/у товарів
		</div>
	</footer>
</div>

<style>
	.footer-wrapper {
		background-color: #1e2232;
		color: #ffffff;
	}
</style>
