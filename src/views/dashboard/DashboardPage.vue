<template>
	<div class="h-screen flex overflow-hidden bg-gray-100">
		<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
		<div class="lg:hidden">
			<div class="fixed inset-0 flex z-40">
				<!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
				<div class="fixed inset-0">
					<div class="absolute inset-0 bg-gray-600 opacity-75" aria-hidden="true"></div>
				</div>
				<!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
				<div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
					<div class="absolute top-0 right-0 -mr-12 pt-2">
						<button
							class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						>
							<span class="sr-only">Close sidebar</span>
							<!-- Heroicon name: outline/x -->
							<svg
								class="h-6 w-6 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex-shrink-0 flex items-center px-4">
						<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo" />
					</div>
					<nav class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
						<div class="px-2 space-y-1">
							<!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" -->
							<a href="#" class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md" aria-current="page">
								<!-- Heroicon name: outline/home -->
								<svg
									class="mr-4 h-6 w-6 text-cyan-200"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Home
							</a>

							<a href="#" class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md">
								<!-- Heroicon name: outline/document-report -->
								<svg
									class="mr-4 h-6 w-6 text-cyan-200"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Log out
							</a>
						</div>
						<div class="mt-6 pt-6">
							<div class="px-2 space-y-1">
								<a
									href="#"
									class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
								>
									<!-- Heroicon name: outline/cog -->
									<svg
										class="mr-4 h-6 w-6 text-cyan-200 group-hover:text-cyan-200"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										/>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									Settings
								</a>

								<a
									href="#"
									class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
								>
									<!-- Heroicon name: outline/question-mark-circle -->
									<svg
										class="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Help
								</a>

								<a
									href="#"
									class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
								>
									<!-- Heroicon name: outline/shield-check -->
									<svg
										class="mr-4 h-6 w-6 text-cyan-300 group-hover:text-cyan-200"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
									Privacy
								</a>
							</div>
						</div>
					</nav>
				</div>
				<div class="flex-shrink-0 w-14" aria-hidden="true">
					<!-- Dummy element to force sidebar to shrink to fit close icon -->
				</div>
			</div>
		</div>

		<!-- Static sidebar for desktop -->
		<div class="hidden lg:flex lg:flex-shrink-0">
			<div class="flex flex-col w-64">
				<!-- Sidebar component, swap this element with another sidebar if you like -->
				<div class="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
					<div class="flex items-center flex-shrink-0 px-4">
						<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo" />
					</div>
					<nav class="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
						<div class="px-2 space-y-1">
							<!-- Current: "bg-cyan-800 text-white", Default: "text-cyan-100 hover:text-white hover:bg-cyan-600" -->
							<a
								href="#"
								class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
								aria-current="page"
							>
								<!-- Heroicon name: outline/home -->
								<svg
									class="mr-4 h-6 w-6 text-cyan-200"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Home
							</a>

							<button
								href="#"
								class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
								@click="logout"
							>
								<!-- Heroicon name: outline/document-report -->
								<svg class="mr-4 h-6 w-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
								Log out
							</button>
						</div>
					</nav>
				</div>
			</div>
		</div>

		<div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
			<main class="flex-1 relative pb-8 z-0 overflow-y-auto">
				<!-- Page header -->
				<div class="bg-white shadow">
					<div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
						<div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
							<div class="flex-1 min-w-0">
								<!-- Profile -->
								<div class="flex items-center">
									<img
										class="hidden h-16 w-16 rounded-full sm:block"
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=WDpxGENRFm&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
										alt=""
									/>
									<div>
										<div class="flex items-center">
											<img
												class="h-16 w-16 rounded-full sm:hidden"
												src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=WDpxGENRFm&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
												alt=""
											/>
											<h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">Good morning, Emilia Birch</h1>
										</div>
										<dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
											<dt class="sr-only">Company</dt>
											<dd class="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
												<!-- Heroicon name: solid/office-building -->
												<svg
													class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
														clip-rule="evenodd"
													/>
												</svg>
												Duke street studio
											</dd>
											<dt class="sr-only">Account status</dt>
											<dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
												<!-- Heroicon name: solid/check-circle -->
												<svg
													class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													/>
												</svg>
												Verified account
											</dd>
										</dl>
									</div>
								</div>
							</div>
							<div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
								<button
									type="button"
									class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Add money
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="mt-8">
					<h2 class="max-w-full mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-16 mb-5">Recent activity</h2>

					<!-- Activity list (smallest breakpoint only) -->
					<div class="shadow sm:hidden">
						<ul class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
							<li>
								<a href="#" class="block px-4 py-4 bg-white hover:bg-gray-50">
									<span class="flex items-center space-x-4">
										<span class="flex-1 flex space-x-2 truncate">
											<!-- Heroicon name: solid/cash -->
											<svg
												class="flex-shrink-0 h-5 w-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
													clip-rule="evenodd"
												/>
											</svg>
											<span class="flex flex-col text-gray-500 text-sm truncate">
												<span class="truncate">Payment to Molly Sanders</span>
												<span><span class="text-gray-900 font-medium">$20,000</span> USD</span>
												<span>July 11, 2020</span>
											</span>
										</span>
										<!-- Heroicon name: solid/chevron-right -->
										<svg
											class="flex-shrink-0 h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</a>
							</li>

							<!-- More items... -->
						</ul>

						<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200" aria-label="Pagination">
							<div class="flex-1 flex justify-between">
								<a
									href="#"
									class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
								>
									Previous
								</a>
								<a
									href="#"
									class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
								>
									Next
								</a>
							</div>
						</nav>
					</div>

					<!-- Activity table (small breakpoint and up) -->
					<div class="hidden sm:block">
						<div class="max-w-full mx-auto px-4 sm:px-6 lg:px-16">
							<div class="flex flex-col mt-2">
								<div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
									<table class="min-w-full divide-y divide-gray-200">
										<thead>
											<tr>
												<th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">text</th>
												<th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
												<th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date of création</th>
											</tr>
										</thead>
										<tbody class="bg-white divide-y divide-gray-200">
											<tr v-for="(item, index) in info.data" :key="index" class="bg-white">
												<td class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
													<div class="flex">
														<a href="#" class="group inline-flex space-x-2 truncate text-sm">
															<!-- Heroicon name: solid/cash -->
															<p class="text-gray-500 truncate group-hover:text-gray-900">{{ item.text }}</p>
														</a>
													</div>
												</td>
												<td class="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
													{{ item.completed }}
												</td>
												<td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">{{ item.created_at }}</td>
											</tr>

											<!-- More items... -->
										</tbody>
									</table>
									<!-- Pagination -->
									<nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">
										<div class="hidden sm:block">
											<p class="text-sm text-gray-700">
												Showing
												<span class="font-medium">1</span>
												to
												<span class="font-medium">10</span>
												of
												<span class="font-medium">20</span>
												results
											</p>
										</div>
										<div class="flex-1 flex justify-between sm:justify-end">
											<a
												href="#"
												class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
											>
												Previous
											</a>
											<a
												href="#"
												class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
											>
												Next
											</a>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			info: [],
			errored: false,
		};
	},
	mounted() {
		this.$axios
			.get('http://localhost:8000/api/todos')
			.then((response) => {
				this.info = response.data;
				console.log(this.info);
				return this.info;
			})
			.catch((error) => {
				console.log(error);
				this.errored = true;
			});
	},
	methods: {
		logout(e) {
			e.preventDefault();
			const jwt = localStorage.getItem('jwt');
			this.$axios
				.post('auth/logout', jwt)
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
			localStorage.removeItem('jwt');
			this.$router.push('/');
		},
	},
};
</script>
