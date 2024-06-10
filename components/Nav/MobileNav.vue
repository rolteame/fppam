<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}
</script>
<template>
	<img
		src="~/assets/img/pepicons-pop_menu.svg"
		alt="mobile menu icon"
		class="w-10 lg:hidden"
    :class="isMobileMenuOpen ? 'hidden' : 'block'"
		@click="isMobileMenuOpen = !isMobileMenuOpen"
	/>

	<div class="absolute bg-white p-4 w-[250px] md:-mt-14 md:text-lg text-md lg:hidden" v-show="isMobileMenuOpen" :class="isMobileMenuOpen ? 'animate__animated animate__fadeInLeft animate__faster' : 'animate__animated animate__backOutLeft'">
		<div>
			<img src="~/assets/img/ic_outline-arrow-back-ios.svg" alt="mobile back icon" class="w-6 font-bold font-body" @click="closeMobileMenu()">
		</div>
		<ul>
			<li class="py-2">
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li
				class=""
			>
				<NuxtLink to="">Who We Are</NuxtLink>
				<ul
					class=""
				>
					<li class="">
						<NuxtLink to="">Our History</NuxtLink>
					</li>
					<li class="">
						<NuxtLink to="">Mission and Vision</NuxtLink>
					</li>
					<li class="">
						<NuxtLink to="">Our Belief</NuxtLink>
					</li>
					<li class="">
						<NuxtLink to="">Our Structure</NuxtLink>
					</li>
				</ul>
			</li>
			<li class="">
				<NuxtLink to="">Online Giving</NuxtLink>
			</li>
			<li class=""><NuxtLink to="">Listen</NuxtLink></li>
			<li class=""><NuxtLink to="">Contact Us</NuxtLink></li>
		</ul>
	</div>
</template>
