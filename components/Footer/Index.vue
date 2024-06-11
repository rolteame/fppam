<script setup lang="ts">
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '../ui/button';

const formSchema = toTypedSchema(z.object({
	email: z.string().email({message: 'Please enter a valid email'})
}))

const form = useForm({
	validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>

<template>
<div class="grid grid-cols-2 lg:grid-cols-1 lg:p-2 bg-[#113C6F] text-white font-body">
  <div class="pr-8 pl-8 pt-8 mt-4 lg:flex lg:py-8">
    <ul class="grid grid-rows-5 text-[16px] pb-7 lg:grid-rows-1 lg:flex lg:w-[60%] lg:mr-14">
			<li class="inline-block footer py-2 lg:mr-12">
				<NuxtLink to="/">Home</NuxtLink>
			</li>
			<li
				class="inline-block footer py-2 lg:mr-12"
			>
				<NuxtLink to="">Who We Are</NuxtLink>
			</li>
			<li class="inline-block footer py-2 lg:mr-12">
				<NuxtLink to="">Online Giving</NuxtLink>
			</li>
			<li class="inline-block footer py-2 lg:mr-12"><NuxtLink to="">Listen</NuxtLink></li>
			<li class="inline-block footer py-2"><NuxtLink to="">Contact Us</NuxtLink></li>
		</ul>
		<div class="py-2 lg:relative lg:-mt-12">
			<h3 class="font-medium text-[20px]">Join Our Newsletter</h3>
			<form action="" @submit.prevent="onSubmit" class="lg:flex">
				<FormField name="email" v-slot="{ field }">
					<FormItem>
						<FormControl>
							<Input type="email" placeholder="Enter your Email" v-bind="field" class="bg-[#126CD3CC] p-2 font-16px placeholder:text-white placeholder:font-body placeholder:font-medium placeholder:text-[14px] border rounded-sm mt-2"/>
						</FormControl>
					</FormItem>
				</FormField>
				<Button type="submit" class="text-[#113C6F] font-2xl bg-white mt-3 lg:mt-2 lg:ms-4">Subscribe</Button>
			</form>
		</div>
  </div>
  <div class="px-8 pt-8 mt-4 lg:order-first ml-auto">
		<img src="~/assets/img/logo.png" alt="FPPAM Logo" class="w-24" />
	</div>
</div>
<div class="bg-[#113C6F] text-white text-[12px] -mt-1">
	<div class="border-b mx-8 pt-2">
	</div>
	<div>
		<p class="text-[12px] ms-8 py-8"><span>&copy </span><span>2024 </span><span class="font-bold">FREEDOM POWER PACKER ANOINTED MINISTRY </span><span>All Rights Reserved.</span></p>
	</div>
</div>
</template>