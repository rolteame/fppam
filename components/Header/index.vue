
<template>
	<div
		class="container-fluid bg-[url('~/assets/img/hero.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center saturate-100 py-6"
	>
		<div class="h-full w-full flex flex-col justify-center text-center text-white font-header">
			<img src="~/assets/img/logo.png" alt="FPPAM Logo" class="w-32 mx-auto" />
			<div class="container-md flex justify-center">
				<h1
					class="lg:text-8xl/none md:text-6xl/none text-4xl/none px-2 flex flex-col font-bold header-outline"
				>
					<span class="">Freedom Power</span
					><span class="">Packed Anointed</span
					><span
						class="h-2 md:h-3 lg:h-5 w-[85%] mx-auto bg-gradient-to-r from-[#FFC700] to-[#FFDA56] rounded-tr-sm rounded-bl-sm"
					></span
					><span class="">Ministry</span>
				</h1>
			</div>
			<p class="text-lg md:text-2xl lg:text-3xl pt-3 capitalize font-header font-thin">
				Home of Possibilities
			</p>
			<div class="mt-auto ">
					<Nav />
			</div>
		</div>
	</div>
</template>
