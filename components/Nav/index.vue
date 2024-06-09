<script setup lang="ts">
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
	<div class="font-body pt-32 lg:w-[60%] md:w-[80%] mx-auto hidden md:block">
		<ul class="grid grid-cols-5 text-[20px]">
			<li class="px-2 inline-block">
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li
				class="px-2 inline-block"
				@mouseenter="isDropdownOpen = true"
				@mouseleave="onMouseLeave"
			>
				<NuxtLink to="">Who We Are</NuxtLink>
				<ul
					class="absolute bg-white text-black -ms-2 mt-8 text-left border w-[220px] px-5 py-3"
          :class="isDropdownOpen ? 'animate__animated animate__fadeInUp animate__faster' : 'animate__animated animate__backOutUp'"
					v-show="isDropdownOpen"
					@mouseleave="onMouseLeave"
				>
					<li class="px-2 py-2 inline-block">
						<NuxtLink to="">Our History</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block">
						<NuxtLink to="">Mission and Vision</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block">
						<NuxtLink to="">Our Belief</NuxtLink>
					</li>
					<li class="px-2 py-2 inline-block">
						<NuxtLink to="">Our Structure</NuxtLink>
					</li>
				</ul>
			</li>
			<li class="px-2 inline-block">
				<NuxtLink to="">Online Giving</NuxtLink>
			</li>
			<li class="px-2 inline-block"><NuxtLink to="">Listen</NuxtLink></li>
			<li class="px-2 inline-block"><NuxtLink to="">Contact Us</NuxtLink></li>
		</ul>
	</div>
</template>
