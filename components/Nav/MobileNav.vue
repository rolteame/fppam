<script setup lang="ts">
const isMobileMenuOpen = ref(false);

const closeMobileMenu = () => {
	isMobileMenuOpen.value = false
}

const isDropdownOpen = ref(false);

const onMouseLeave = (event: any) => {
	if (
		!event.relatedTarget ||
		!event.currentTarget.contains(event.relatedTarget)
	) {
    setTimeout(() => {
      isDropdownOpen.value = false;
    }, 200)
	}
};
</script>
<template>
	<img
		src="~/assets/img/pepicons-pop_menu.svg"
		alt="mobile menu icon"
		class="w-10 lg:hidden -mt-4"
    :class="isMobileMenuOpen ? 'invisible' : 'visible'"
		@click="isMobileMenuOpen = !isMobileMenuOpen"
	/>

	<div class="absolute bg-white p-4 w-[250px] h-auto md:-mt-14 md:text-lg text-md lg:hidden -mt-16" v-show="isMobileMenuOpen" :class="isMobileMenuOpen || isDropdownOpen ? 'animate__animated animate__fadeInLeft animate__faster h-auto' : 'animate__animated animate__backOutLeft'">
		<div>
			<img src="~/assets/img/ic_outline-arrow-back-ios.svg" alt="mobile back icon" class="w-6 font-bold font-body" @click="closeMobileMenu()">
		</div>
		<ul>
			<li class="py-2">
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li
				class="inline-block"
				@mouseenter="isDropdownOpen  = true"
				@mouseleave="onMouseLeave"
			>
				<NuxtLink to="">Who We Are</NuxtLink>
				<ul
					class=" bg-white text-black text-left w-[180px] px-5 py-3 absolute ml-32 -mt-8"
          :class="isDropdownOpen ? 'animate__animated animate__fadeIn animate__faster' : 'animate__animated animate__backOutUp'"
					v-show="isDropdownOpen"
					@mouseleave="onMouseLeave"
				>
					<li class="px-2 py-2 inline-block list-disc">
						<NuxtLink to="">Our History</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block list-disc">
						<NuxtLink to="">Mission and Vision</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block list-disc">
						<NuxtLink to="">Our Belief</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block list-disc">
						<NuxtLink to="">Our Structure</NuxtLink>
					</li>
				</ul>
			</li>
			<li class="py-2">
				<NuxtLink to="">Online Giving</NuxtLink>
			</li>
			<li class="py-2"><NuxtLink to="">Listen</NuxtLink></li>
			<li class="py-2"><NuxtLink to="">Contact Us</NuxtLink></li>
		</ul>
	</div>
</template>
