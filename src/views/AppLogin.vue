<template>
	<div class="min-h-screen bg-white flex">
		<div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
			<div class="mx-auto w-full max-w-sm lg:w-96">
				<div>
					<img class="h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
					<h2 class="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
				</div>

				<div class="mt-8">
					<div class="mt-6">
						<form action="#" method="POST" class="space-y-6" v-if="isHidden">
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700"> Name </label>
								<div class="mt-1">
									<input
										id="name"
										name="name"
										type="name"
										autocomplete="name"
										required
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
								<div class="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autocomplete="email"
										required
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div class="space-y-1">
								<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
								<div class="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autocomplete="current-password"
										required
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Create my account
								</button>
							</div>
							<div>
								<div class="mt-6 relative">
									<div class="absolute inset-0 flex items-center" aria-hidden="true">
										<div class="w-full border-t border-gray-300"></div>
									</div>
									<div class="relative flex justify-center text-sm">
										<span class="px-2 bg-white text-gray-500">Or</span>
									</div>
								</div>
							</div>
						</form>

						<form action="#" method="POST" class="space-y-6" v-if="!isHidden" @submit.prevent="submit">
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
								<div class="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autocomplete="email"
										required
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="form.email"
									/>
								</div>
							</div>

							<div class="space-y-1">
								<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
								<div class="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autocomplete="current-password"
										required
										class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										v-model="form.password"
									/>
								</div>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center">
									<input
										id="remember_me"
										name="remember_me"
										type="checkbox"
										class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
									/>
									<label for="remember_me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
								</div>

								<div class="text-sm">
									<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Sign in
								</button>
							</div>
							<div>
								<div class="mt-6 relative">
									<div class="absolute inset-0 flex items-center" aria-hidden="true">
										<div class="w-full border-t border-gray-300"></div>
									</div>
									<div class="relative flex justify-center text-sm">
										<span class="px-2 bg-white text-gray-500">Or</span>
									</div>
								</div>
							</div>
						</form>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
							@click="isHidden = !isHidden"
						>
							Sign up
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="hidden lg:block relative w-0 flex-1">
			<img
				class="absolute inset-0 h-full w-full object-cover"
				src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixqx=WDpxGENRFm&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isHidden: false,
			form: {
				password: '',
				email: '',
			},
		};
	},
	methods: {
		submit(e) {
			e.preventDefault();
			if (this.form.password.length > 0) {
				this.$axios
					.post('/auth/login', this.form)
					.then((response) => {
						localStorage.setItem('jwt', response.data.access_token);
						if (localStorage.getItem('jwt') != null) {
							if (this.$route.params.nextUrl != null) {
								this.$router.push(this.$route.params.nextUrl);
							} else {
								this.$router.push('dashboard');
							}
						}
					})
					.catch(function (error) {
						console.error(error.response);
					});
			}
		},
	},
};
</script>
